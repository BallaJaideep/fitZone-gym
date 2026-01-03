"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dumbbell, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: Access attempted on:", pathname);
  }, [pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center text-foreground">
      
      {/* Decorative Icon */}
      <div className="mb-8 animate-scale-in">
        <div className="relative inline-block">
          <div className="absolute -inset-4 rounded-full bg-primary/20 blur-3xl" />
          <Dumbbell size={80} className="relative rotate-12 text-primary" />
        </div>
      </div>

      {/* Error Message */}
      <div className="animate-fade-in space-y-4">
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-gradient">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
          Lost your way?
        </h2>

        <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex flex-col gap-4 animate-slide-up sm:flex-row">
        <Link href="/">
          <Button
            variant="hero"
            size="lg"
            className="px-8 font-black uppercase tracking-widest"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Base
          </Button>
        </Link>

        <Button
          type="button"
          variant="outline"
          size="lg"
          className="border-white/10 px-8 font-black uppercase tracking-widest hover:bg-white/5"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go Back
        </Button>
      </div>

      {/* Brand */}
      <div className="absolute bottom-10 opacity-20">
        <span className="text-xs font-black uppercase tracking-[0.3em]">
          FitZone Gym
        </span>
      </div>
    </div>
  );
}
