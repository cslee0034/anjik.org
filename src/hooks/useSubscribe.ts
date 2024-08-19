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
  const response = await fetch("/api/subscribe/update", {
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

export const useSubscribe = () => {
  const { update } = useSession();

  const subscribeMutation = useMutation({
    mutationFn: updateEmailPreference,
    onError: (error) => {
      console.error("Error updating email preference:", error);
    },
    onSuccess: async (data) => {
      await update({
        shouldReceiveEmails: data.shouldReceiveEmails,
      });
      console.log("Email preference updated successfully:", data);
    },
  });

  return subscribeMutation;
};
