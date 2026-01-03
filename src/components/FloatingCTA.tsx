"use client";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <Button
        variant="hero"
        size="lg"
        className={cn(
          "shadow-elevated hover:shadow-glow rounded-full px-6 py-6",
          "transition-all duration-300 hover:-translate-y-1 active:scale-95",
          "flex items-center gap-2"
        )}
      >
        <Zap className="w-5 h-5 fill-current" />
        <span className="font-bold">Book Free Trial</span>
      </Button>
    </div>
  );
};

export default FloatingCTA;