"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="mt-40 flex flex-col items-center space-x-4">
      <h1 className="relative font-display text-6xl dark:text-white">
        404
        <span className="absolute bottom-0 left-0 right-0 font-display text-[200px] opacity-5 dark:text-white">
          404
        </span>
      </h1>
      <p className="text-lg text-stone-500 dark:text-stone-400">
        This page does not exist, or you do not have permission to view it
      </p>
      <Button onClick={() => router.replace("/")} className="mt-4">
        Back to Home page
      </Button>
    </div>
  );
}
