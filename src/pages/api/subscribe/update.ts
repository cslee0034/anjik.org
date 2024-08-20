import { NextApiRequest, NextApiResponse } from "next";
import mongoConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import { sendSlackMessage } from "../../../lib/slack-webhook";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongoConnect();

  const { email, provider, shouldReceiveEmails } = req.body;

  try {
    await User.updateOne({ email, provider }, { shouldReceiveEmails });

    return res
      .status(200)
      .json({ message: "Email preference updated", shouldReceiveEmails });
  } catch (error) {
    await sendSlackMessage(String(error));
    return res.status(500).json({ message: "Error updating email preference" });
  }
}
