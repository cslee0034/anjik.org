import { BellRing } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useSubscribe } from "@/hooks/useSubscribe";
import { useState } from "react";
import Link from "next/link";

const notifications = [
  {
    title: "새로운 유해품목을 가장 먼저 알려드립니다.",
    description: "가입한 이메일로 알림을 받으세요.",
  },
  {
    title: "어떠한 비용도 청구되지 않습니다.",
    description: "안심하고 구독하세요.",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export default function Subscription({ className, ...props }: CardProps) {
  const { data: session } = useSession();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const subscribeMutation = useSubscribe();

  const handleSubscribe = () => {
    if (!session) return;

    setIsSubscribing(true);

    subscribeMutation.mutate({
      email: session.user.email,
      provider: session.user.provider,
      shouldReceiveEmails: true,
    });

    setIsSubscribing(false);
  };

  return (
    <Card className={cn("w-[350px]", className)} {...props}>
      <CardHeader>
        <CardTitle>안심직구 이메일 구독하기</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {/* 구독 상태에 따라 버튼 표시 */}
        {!session ? (
          <Link href="/api/auth/signin" className="w-full">
            <Button
              className="w-full"
              disabled={isSubscribing || subscribeMutation.status === "pending"}
            >
              <div className="flex items-center justify-center gap-2">
                <BellRing className="h-4 w-4" /> 로그인이 필요합니다
              </div>
            </Button>
          </Link>
        ) : session?.user.shouldReceiveEmails ? (
          <Button variant="outline" className="w-full" disabled>
            <BellRing className="mr-2 h-4 w-4" /> 구독중
          </Button>
        ) : (
          <Button
            className="w-full"
            onClick={handleSubscribe}
            disabled={isSubscribing || subscribeMutation.status === "pending"}
          >
            <BellRing className="mr-2 h-4 w-4" /> 구독하기
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
