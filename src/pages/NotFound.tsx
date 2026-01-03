"use client";

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dumbbell, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      {/* Visual Icon */}
      <div className="mb-8 animate-bounce">
        <div className="bg-primary/10 p-6 rounded-full shadow-glow">
          <Dumbbell className="h-16 w-16 text-primary" />
        </div>
      </div>

      {/* Error Text */}
      <div className="animate-fade-in">
        <h1 className="text-9xl font-black tracking-tighter text-muted/30">
          404
        </h1>
        <h2 className="mt-[-2rem] text-4xl font-black md:text-5xl">
          Page <span className="text-gradient">Not Found</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-xl text-muted-foreground">
          It looks like you've wandered off the track. Let's get you back to your 
          transformation journey.
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-10 animate-slide-up">
        <Link to="/">
          <Button variant="hero" size="xl" className="group">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </Button>
        </Link>
      </div>

      {/* Subtle Background Element */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>
    </div>
  );
};

export default NotFound;