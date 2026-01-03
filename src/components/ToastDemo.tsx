"use client";

// ✅ Changed from useToast to sonner
import { toast } from "sonner"; 
import { Button } from "@/components/ui/button";
import { BellRing, CheckCircle2 } from "lucide-react";

export default function ToastDemo() {
  const handleNotify = () => {
    // ✅ Updated to use Sonner's toast function
    toast.success("Notification Sent!", {
      description: "You have successfully subscribed to FitZone updates.",
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    });
  };

  const handleAlert = () => {
    toast("System Alert", {
      description: "New workout classes are now available in your area.",
      icon: <BellRing className="h-5 w-5 text-primary" />,
    });
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      <Button 
        onClick={handleNotify}
        className="bg-primary hover:bg-primary/90 font-bold"
      >
        <CheckCircle2 className="mr-2 h-4 w-4" />
        Success Toast
      </Button>

      <Button 
        variant="outline"
        onClick={handleAlert}
        className="border-primary text-primary font-bold"
      >
        <BellRing className="mr-2 h-4 w-4" />
        Show Alert
      </Button>
    </div>
  );
}