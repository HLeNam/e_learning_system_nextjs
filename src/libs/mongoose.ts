"use server";

import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URI is not defined");
  }

  if (isConnected) {
    console.log(">>> MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: process.env.MONGODB_DB_NAME || "default_db",
    });

    isConnected = true;

    console.log(">>> MongoDB connected successfully");
  } catch (error) {
    console.error(">>> MongoDB connection failed:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
