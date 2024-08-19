import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const updateEmailPreference = async ({
  email,
  provider,
  shouldReceiveEmails,
}: {
  email: string;
  provider: string;
  shouldReceiveEmails: boolean;
}) => {
  const response = await fetch("/api/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, provider, shouldReceiveEmails }),
  });

  if (!response.ok) {
    throw new Error("Failed to update email preference");
  }

  return response.json();
};

export const useUnsubscribe = () => {
  const { update } = useSession();

  const unsubscribeMutation = useMutation({
    mutationFn: updateEmailPreference,
    onError: (error) => {
      console.error("Error unsubscribing:", error);
    },
    onSuccess: async (data) => {
      await update({
        shouldReceiveEmails: data.shouldReceiveEmails,
      });
      console.log("Unsubscribed successfully:", data);
    },
  });

  return unsubscribeMutation;
};
