"use client";
import Link from "next/link";
import { Dumbbell, Home, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
        
        {/* Visual Icon Area */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative bg-card border border-border p-8 rounded-2xl shadow-2xl">
            <Dumbbell className="w-16 h-16 text-primary animate-bounce" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-7xl font-black tracking-tighter text-foreground">
            404
          </h1>
          <h2 className="text-2xl font-bold uppercase tracking-tight">
            Workout Interrupted
          </h2>
          <p className="text-muted-foreground">
            We couldn't find the page you're looking for. It might have been moved, or you might be trying to access the old <code className="bg-muted px-1 rounded">/fitZone-gym</code> path.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button asChild size="lg" className="font-bold uppercase tracking-wide">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Homepage
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="font-bold uppercase tracking-wide border-primary text-primary hover:bg-primary/5"
            onClick={() => window.location.reload()}
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Refresh Session
          </Button>
        </div>

        {/* Help Note */}
        <p className="text-xs text-muted-foreground pt-8 border-t border-border">
          If you are seeing this on your main URL, ensure your file is located at <br />
          <span className="font-mono text-primary">src/app/page.tsx</span>
        </p>
      </div>
    </div>
  );
}