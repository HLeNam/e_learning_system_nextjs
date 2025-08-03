import { Webhook } from "svix";
import { NextResponse } from "next/server";
import { WebhookEvent } from "@clerk/nextjs/server";

import createUser from "@/lib/actions/user.actions";

const webhookSecret: string = process.env.WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  const svix_id = req.headers.get("svix-id") ?? "";
  const svix_timestamp = req.headers.get("svix-timestamp") ?? "";
  const svix_signature = req.headers.get("svix-signature") ?? "";

  console.log(">>> Received webhook request:", {
    svix_id,
    svix_timestamp,
    svix_signature,
  });

  if (!webhookSecret) {
    console.error(">>> WEBHOOK_SECRET is not set in environment variables");
    return new Response("Internal Server Error", { status: 500 });
  }

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error(">>> Missing required headers for webhook verification");
    return new Response("Bad Request", { status: 400 });
  }

  const payload = await req.json();

  const body = JSON.stringify(payload, null, 2);

  console.log(">>> Webhook payload:", body);

  const sivx = new Webhook(webhookSecret);

  let msg: WebhookEvent;

  try {
    msg = sivx.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error(">>> Webhook verification failed:", err);
    return new Response("Bad Request", { status: 400 });
  }

  const eventType = msg.type;

  if (eventType === "user.created") {
    // create user in the database
    try {
      const {
        id,
        username,
        email_addresses,
        image_url,
        first_name,
        last_name,
      } = msg.data;

      const user = await createUser({
        clerkId: id,
        username: username as string,
        name:
          first_name && last_name
            ? `${first_name} ${last_name}`
            : (username as string),
        email: email_addresses[0].email_address,
        avatar: image_url,
      });

      return NextResponse.json({
        message: "User created successfully",
        user: user,
      });
    } catch (error) {
      console.error(">>> Error creating user:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }

  // Rest

  return new Response("OK", { status: 200 });
}
