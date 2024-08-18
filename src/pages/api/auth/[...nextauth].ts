import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mongoConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import { UserRole } from "../../../types/userRole";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      await mongoConnect();

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        try {
          const newUser = new User({
            email: user.email,
            provider: account?.provider,
            role: "USER",
            receivingEmail: user.email,
            shouldReceiveEmails: false,
            lastActiveAt: new Date(),
          });

          await newUser.save();
        } catch (error) {
          console.error("Error saving new user:", error);
          return false;
        }
      } else {
        try {
          await User.updateOne({ lastActiveAt: new Date() });
        } catch (error) {
          console.error("Error updating existing user:", error);
          return false;
        }
      }

      return true;
    },

    async jwt({ token, user, account, trigger, session }) {
      if (trigger === "update" && session) {
        if (session.shouldReceiveEmails !== undefined) {
          token.shouldReceiveEmails = session.shouldReceiveEmails;
        }
        return token;
      }

      if (user && account) {
        const dbUser = await User.findOne({
          email: user.email,
          provider: account.provider,
        });

        if (dbUser) {
          token.email = dbUser.email;
          token.role = dbUser.role;
          token.shouldReceiveEmails = dbUser.shouldReceiveEmails;
          token.provider = dbUser.provider;
        }
      }

      return token;
    },

    async session({ session, token }) {
      session.user.role = (token?.role as UserRole) || "USER";
      session.user.shouldReceiveEmails = token?.shouldReceiveEmails || false;
      session.user.provider = token?.provider;

      return session;
    },
  },
});
