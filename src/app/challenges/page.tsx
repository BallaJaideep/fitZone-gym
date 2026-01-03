"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Trophy, Target, Zap, Calendar, CheckCircle2, Clock, Flame, Dumbbell, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// --- Types ---
interface Challenge {
  icon: any;
  title: string;
  duration: string;
  intensity: string;
  description: string;
  features: string[];
  status: "Active" | "Starting Soon" | "Full";
  color: string;
  price: string;
}

const CHALLENGES: Challenge[] = [
  {
    icon: Trophy,
    title: "30-Day Transformation",
    duration: "30 Days",
    intensity: "High",
    price: "$49",
    description: "Our flagship program. A complete body overhaul with structured daily workouts and a precision nutrition plan.",
    features: ["Daily workout plans", "Nutrition guidance", "Weekly measurements", "Before/after support"],
    status: "Active",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Flame,
    title: "Summer Shred",
    duration: "12 Weeks",
    intensity: "Extreme",
    price: "$99",
    description: "Focus on maximum fat loss and muscle definition to get you beach-ready in record time.",
    features: ["HIIT focus", "Macro tracking", "Group accountability", "Grand prize reward"],
    status: "Starting Soon",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Dumbbell,
    title: "Strength Builder",
    duration: "8 Weeks",
    intensity: "Medium-High",
    price: "$79",
    description: "Progressive overload training designed specifically for those looking to hit new personal bests safely.",
    features: ["Form coaching", "Max testing", "Strength analytics", "Specialized lifting gear"],
    status: "Active",
    color: "from-purple-500 to-indigo-500"
  },
];

export default function ChallengesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", challenge: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.challenge) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Success! You're on the list.", {
      description: "Expect a call from your lead coach within 24 hours."
    });
    setFormData({ name: "", phone: "", challenge: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-background/50 selection:bg-primary selection:text-white">
      <div className="container mx-auto px-4 space-y-32">
        
        {/* 1. Hero Section */}
        <section className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8">
            <ShieldCheck className="w-4 h-4" />
            <span>Official 2026 Season</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            LIMITLESS <br/> <span className="text-gradient">CHALLENGES</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            Join 12,000+ athletes who have crossed the finish line. 
            Structured paths. Proven results. No excuses.
          </p>
        </section>

        {/* 2. Challenges Selection */}
        <div className="grid lg:grid-cols-3 gap-10">
          {CHALLENGES.map((challenge, index) => (
            <Card
              key={index}
              className="group relative bg-card border-none hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 animate-in fade-in slide-in-from-bottom-12 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={cn("h-1.5 w-full bg-gradient-to-r", challenge.color)} />
              <CardContent className="p-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="bg-secondary p-4 rounded-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <challenge.icon className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Starts at</p>
                    <p className="text-2xl font-black">{challenge.price}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-black tracking-tight">{challenge.title}</h3>
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-xs font-bold text-primary">
                      <Clock className="w-3 h-3" /> {challenge.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-muted-foreground">
                      <Zap className="w-3 h-3" /> {challenge.intensity} Intensity
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-border/50">
                  {challenge.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all font-black uppercase tracking-widest text-xs h-12">
                  View Full Curriculum
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3. Registration & Trust Section */}
        <section className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-20 items-center">
          <div className="lg:col-span-3 space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl font-black tracking-tighter">SECURE YOUR <br/> <span className="text-gradient">2026 SPOT</span></h2>
              <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                Our cohorts are limited to 20 participants per trainer to maintain 
                elite coaching standards.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "Personalized", desc: "1-on-1 nutritional adjustments weekly." },
                { title: "Tech-Driven", desc: "Live progress tracking via our custom app." },
                { title: "Community", desc: "Private Discord access for 24/7 motivation." },
                { title: "Certified", desc: "All coaches are Level 3 PT & Nutrition certified." }
              ].map((item, i) => (
                <div key={i} className="space-y-2 border-l-2 border-primary pl-6">
                  <h4 className="font-black text-lg uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-none bg-zinc-950 text-white shadow-2xl p-1 rounded-[2.5rem] overflow-hidden">
              <CardHeader className="text-center space-y-2 p-10 pb-4">
                <CardTitle className="text-3xl font-black tracking-tighter">JOIN THE ROSTER</CardTitle>
                <CardDescription className="text-zinc-500">Initial consult is 100% free.</CardDescription>
              </CardHeader>
              <CardContent className="p-10 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Full Name</Label>
                    <Input
                      placeholder="e.g. MARCUS AURELIUS"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-zinc-900 border-zinc-800 h-14 focus:ring-primary uppercase text-xs font-bold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Contact Number</Label>
                    <Input
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-zinc-900 border-zinc-800 h-14"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Target Goal</Label>
                    <Select value={formData.challenge} onValueChange={(v) => setFormData({ ...formData, challenge: v })}>
                      <SelectTrigger className="bg-zinc-900 border-zinc-800 h-14 text-xs font-bold">
                        <SelectValue placeholder="PICK YOUR PATH" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                        <SelectItem value="transformation">30-DAY TRANSFORMATION</SelectItem>
                        <SelectItem value="summer">SUMMER SHRED</SelectItem>
                        <SelectItem value="strength">STRENGTH BUILDER</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full h-16 text-sm font-black uppercase tracking-widest shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "TRANSMITTING..." : "COMMAND YOUR SPOT"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}