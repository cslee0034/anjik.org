import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

const deleteUserRequest = async () => {
  const response = await fetch("/api/user/delete", {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return response.json();
};

export const useDeleteUser = () => {
  const deleteUserMutation = useMutation({
    mutationFn: deleteUserRequest,
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
    onSuccess: async () => {
      await signOut({ callbackUrl: "/" });
    },
  });

  return deleteUserMutation;
};
