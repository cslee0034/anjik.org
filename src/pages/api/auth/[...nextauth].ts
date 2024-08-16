import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mongoConnect from "../../../libs/mongodb";
import User from "../../../models/User";

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
            role: "user",
            receivingEmail: user.email,
            shouldReceiveEmails: false,
          });

          await newUser.save();
        } catch (error) {
          console.error("Error saving new user:", error);
          return false;
        }
      }

      return true;
    },
  },
});
