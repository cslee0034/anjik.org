import mongoose, { Schema, Document } from "mongoose";
import { UserRole } from "../types/userRole";

interface IUser extends Document {
  email: string;
  provider: string;
  role: UserRole;
  receivingEmail?: string;
  shouldReceiveEmails: boolean;
  lastActiveAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    provider: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    receivingEmail: {
      type: String,
      required: false,
    },
    shouldReceiveEmails: {
      type: Boolean,
      default: false,
    },
    lastActiveAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ email: 1 });
userSchema.index({ shouldReceiveEmails: 1 });

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
