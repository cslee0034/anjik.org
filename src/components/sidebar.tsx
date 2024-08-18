import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div className="hidden md:flex align-middle">
          <Button asChild variant="outline" className="mx-1">
            <Link href="/profile">내 정보</Link>
          </Button>
          <Button asChild variant="outline" className="mx-1">
            <Link href="/api/auth/signout">로그아웃</Link>
          </Button>
        </div>
      ) : (
        <div className="hidden md:flex">
          <Button asChild variant="secondary" className="mx-1">
            <Link href="/api/auth/signin">로그인</Link>
          </Button>
        </div>
      )}

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" aria-describedby="sheet-description">
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>

          <div id="sheet-description" className="sr-only">
            sidebar navigation content.
          </div>

          <nav className="grid gap-6 text-lg font-medium">
            <SheetClose asChild>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/feedback"
                className="text-muted-foreground hover:text-foreground"
              >
                Feedback
              </Link>
            </SheetClose>
            <div />
            {session ? (
              <>
                <SheetClose asChild>
                  <Button asChild variant="outline">
                    <Link href="/profile">내 정보</Link>
                  </Button>
                </SheetClose>
                <Button asChild variant="outline">
                  <Link href="/api/auth/signout">로그아웃</Link>
                </Button>
              </>
            ) : (
              <>
                <SheetClose asChild>
                  <Button asChild variant="outline" className="mx-1">
                    <Link href="/api/auth/signin">로그인</Link>
                  </Button>
                </SheetClose>
              </>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
