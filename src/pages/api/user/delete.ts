import { NextApiRequest, NextApiResponse } from "next";
import mongoConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    await mongoConnect();

    const provider = session.user.provider;
    const email = session.user.email;

    const deletedUser = await User.findOneAndDelete({ provider, email });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
