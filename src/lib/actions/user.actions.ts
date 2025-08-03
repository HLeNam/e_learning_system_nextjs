"use server";

import { TCreateParams } from "@/types";
import UserModel from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

export default async function createUser(params: TCreateParams) {
  try {
    await connectToDatabase();

    const newUser = await UserModel.create(params);

    return newUser;
  } catch (error) {
    console.error(">>> Error creating user:", error);
    throw new Error("Failed to create user");
  }
}
