import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Feedback() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center lg:py-8 md:py-6 sm:py-4">
      <div className="w-full max-w-lg">
        {session ? (
          <form className="grid w-full items-start gap-6">
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Feedback
              </legend>
              <div>
                <p className="text-sm text-gray-500">
                  서비스에 대해 궁금한 점이나 개선사항이 있다면 <br />
                  아래 폼을 통해 피드백을 보내주시면 감사하겠습니다.
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="내용을 입력해주세요."
                  className="min-h-[9.5rem]"
                />
              </div>
              <Button className="w-full">피드백 보내기</Button>
            </fieldset>
          </form>
        ) : (
          <form className="grid w-full items-start gap-6">
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Feedback
              </legend>
              <div>
                <p className="text-sm text-gray-500">
                  로그인 이후 피드백을 보낼 수 있습니다.
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="내용을 입력해주세요."
                  className="min-h-[9.5rem]"
                  disabled
                />
              </div>
              <Button variant="outline" className="w-full" disabled>
                피드백 보내기
              </Button>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
}
