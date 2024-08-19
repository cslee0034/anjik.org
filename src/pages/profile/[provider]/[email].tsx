import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDeleteUser } from "../../../hooks/useDeleteUser";
import CustomDialog from "../../../components/custom-dialog";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { provider, email } = router.query;
  const { mutate: deleteUser } = useDeleteUser();

  useEffect(() => {
    // 세션이 없거나 아직 로딩 중일 때
    if (status === "loading") return;

    // 세션이 없거나 이메일이 일치하지 않을때
    if (
      !session ||
      session.user.email !== email ||
      session.user.provider !== provider
    ) {
      router.push("/api/auth/signin");
    }
  }, [session, status, email, router, provider]);

  // 세션 로딩 중일 때
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // 리다이렉션 중일 때
  if (
    !session ||
    session.user.email !== email ||
    session.user.provider !== provider
  ) {
    return null;
  }

  return (
    <div className="py-10">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">내 정보</CardTitle>
          <CardDescription className="min-w-72"></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Provider</Label>
              <Input
                id="email"
                type="email"
                placeholder={provider as string}
                disabled
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder={email as string}
                disabled
              />
            </div>
            <CustomDialog
              trigger="회원 탈퇴"
              title="정말로 회원 탈퇴를 하시겠습니까?"
              description="회원탈퇴를 하면 계정과 데이터가 영구적으로 삭제됩니다. 또한 더이상 안내 이메일을 받을 수 없습니다."
              action={deleteUser}
              cancel="취소"
              accept="회원 탈퇴"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
