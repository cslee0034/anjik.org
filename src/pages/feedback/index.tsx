import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Feedback() {
  return (
    <div className="flex flex-col items-center justify-center lg:py-8 md:py-6 sm:py-4">
      <div className="w-full max-w-lg">
        <form className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">Feedback</legend>
            <div>
              <p className="text-sm text-gray-500">
                서비스에 대해 궁금한 점이나 개선사항이 있다면 <br />
                아래 폼을 통해 피드백을 보내주시면 감사하겠습니다.
              </p>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="응답을 받을 수 있는 이메일을 입력해주세요."
                className="w-full"
              />
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
      </div>
    </div>
  );
}
