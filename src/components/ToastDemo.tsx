"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { BellRing, CheckCircle2 } from "lucide-react";

export function ToastDemo() {
  const { toast } = useToast();

  const handleNotify = () => {
    toast({
      title: "Workout Reminder Set",
      description: "We'll notify you 15 minutes before your HIIT session.",
      // In Next.js/Shadcn, you can pass custom components to the action area
      action: (
        <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded text-primary">
          <CheckCircle2 className="h-4 w-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Active</span>
        </div>
      ),
    });
  };

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={handleNotify}
      className="group transition-all duration-300 hover:border-primary"
    >
      <BellRing className="mr-2 h-4 w-4 group-hover:animate-bounce transition-transform" />
      Get Workout Reminders
    </Button>
  );
}