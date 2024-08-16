import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import AuthLayout from "../../components/auth-layout";
import { AlertModal } from "../../components/alert-modal";

export default function LoginForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let isPending = false;

  return (
    <AuthLayout>
      <section>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={() => {}} className="grid gap-4">
              {isPending ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => {}}
                >
                  <Image
                    src="/google.svg"
                    alt="Google Icon"
                    width={20}
                    height={20}
                  />
                  Login with Google
                </Button>
              )}
              {isPending ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 bg-yellow-300"
                  onClick={() => {}}
                >
                  <Image
                    src="/kakao.svg"
                    alt="Kakao Icon"
                    width={20}
                    height={20}
                  />
                  Login with Kakao
                </Button>
              )}
            </form>
          </CardContent>
        </Card>
      </section>
      <AlertModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={""}
      />
    </AuthLayout>
  );
}
