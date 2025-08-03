import { Document, model, models, Schema } from "mongoose";

import { UserRole, UserStatus } from "@/types/enums";

export interface User extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  status: UserStatus;
  role: UserRole;
  courses: Schema.Types.ObjectId[];
  created_at: Date;
  updated_at: Date;
}

export const USER_DOCUMENT_NAME = "User";
export const USER_COLLECTION_NAME = "users";

const userSchema = new Schema<User>(
  {
    clerkId: {
      type: String,
    },

    name: {
      type: String,
    },

    username: {
      type: String,
      unique: true,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    avatar: {
      type: String,
    },

    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },

    status: {
      type: String,
      enum: Object.values(UserStatus),
      default: UserStatus.ACTIVE,
    },

    created_at: {
      type: Date,
      default: Date.now,
    },

    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection: USER_COLLECTION_NAME,
  },
);

const UserModel =
  models[USER_DOCUMENT_NAME] || model<User>(USER_DOCUMENT_NAME, userSchema);

export default UserModel;
