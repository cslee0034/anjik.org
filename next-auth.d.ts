import { DefaultSession } from "next-auth";
import { UserRole } from "./userRole";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
      shouldReceiveEmails: boolean;
    } & DefaultSession["USER"];
  }

  interface User {
    role: UserRole;
    shouldReceiveEmails: boolean;
  }
}
