import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[99vh] px-2 py-8 flex flex-col gap-3 items-start">
      <div>
        <h2 className="text-5xl font-bold">404</h2>
        <p className="text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
      </div>

      <Link href="/" className={buttonVariants({})}>
        Return Home
      </Link>
    </div>
  );
}
