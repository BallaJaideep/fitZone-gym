import Link from "next/link";
import { Dumbbell, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      {/* Visual Element */}
      <div className="relative mb-8">
        <h1 className="text-[12rem] md:text-[18rem] font-black text-white/5 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary/20 p-6 rounded-full animate-bounce">
            <Dumbbell className="w-16 h-16 md:w-24 md:h-24 text-primary shadow-glow" />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-md mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">
          Looks like you <span className="text-primary">Missed</span> the set
        </h2>
        <p className="text-muted-foreground text-lg">
          The page you are looking for has been moved, deleted, or never existed in our training program. Let's get you back to the main floor.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild variant="default" size="lg" className="rounded-full px-8 font-bold shadow-glow">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              BACK TO HOME
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-bold border-primary text-primary hover:bg-primary/10">
            <Link href="/services" className="flex items-center gap-2">
              VIEW SERVICES
            </Link>
          </Button>
        </div>
      </div>

      {/* Aesthetic Background Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10 pointer-events-none" />
    </div>
  );
}