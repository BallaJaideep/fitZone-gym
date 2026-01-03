"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Trophy, Heart, Shield, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data ---
const TRAINERS = [
  {
    name: "Alex Morgan",
    role: "Head Trainer",
    spec: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop",
  },
  {
    name: "Sarah Williams",
    role: "Yoga Instructor",
    spec: "Yoga & Mindfulness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop",
  },
  {
    name: "Mike Thompson",
    role: "CrossFit Coach",
    spec: "CrossFit & HIIT",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop",
  },
  {
    name: "Emma Rodriguez",
    role: "Nutrition Expert",
    spec: "Diet & Wellness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
  },
];

const ACHIEVEMENTS = [
  { icon: Award, label: "Certified Trainers", value: "50+", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Users, label: "Happy Members", value: "5000+", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: Trophy, label: "Awards Won", value: "25+", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: Target, label: "Success Rate", value: "95%", color: "text-red-500", bg: "bg-red-500/10" },
];

// --- Component ---
export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-background selection:bg-primary selection:text-white">
      <div className="container mx-auto px-4 space-y-32">
        
        {/* 1. Hero Section */}
        <section className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            WE ARE <span className="text-gradient">FITZONE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto">
            A decade of pushing boundaries. We don't just build bodies; we build 
            resilient mindsets in a world-class environment.
          </p>
        </section>

        {/* 2. Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-10">
          {[
            { 
              title: "Our Mission", 
              icon: Heart, 
              text: "To empower individuals to achieve their fitness goals through personalized training and cutting-edge equipment. We believe fitness is a lifetime journey." 
            },
            { 
              title: "Our Vision", 
              icon: Shield, 
              text: "To be the global benchmark for fitness communities where every member feels supported and equipped to transcend their limits." 
            }
          ].map((item, i) => (
            <Card key={i} className="group border-none bg-secondary/20 hover:bg-secondary/40 transition-all duration-500">
              <CardContent className="p-12 space-y-6">
                <div className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl font-black tracking-tight">{item.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* 3. Achievements */}
        <section className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">THE NUMBERS <br/> BEHIND US</h2>
              <div className="h-2 w-20 bg-primary rounded-full" />
            </div>
            <p className="text-muted-foreground max-w-sm font-medium">
              Measurable success is our core value. We track everything to ensure 
              our community is moving forward.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                <item.icon className={cn("w-10 h-10 mb-6", item.color)} />
                <h3 className="text-5xl font-black tracking-tighter mb-2">{item.value}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Trainers Grid */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Expert Coaching</h2>
            <p className="text-muted-foreground text-lg">Your results are fueled by their expertise.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRAINERS.map((trainer, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-secondary aspect-[4/5]">
                <Image 
                  src={trainer.image} 
                  alt={trainer.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{trainer.role}</p>
                  <p className="text-zinc-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {trainer.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. The Story */}
        <section className="relative overflow-hidden rounded-[3rem] bg-zinc-950 text-white p-12 md:p-24">
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="px-4 py-2 rounded-full border border-white/20 text-xs font-black uppercase tracking-widest">
                Est. 2010
              </span>
              <h2 className="text-5xl md:text-7xl font-black leading-none">THE EVOLUTION OF ENERGY</h2>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed font-light">
                <p>
                  We started in a 500 sq ft garage with a single squat rack. 
                  Today, FitZone is an 8,000 sq ft powerhouse of innovation.
                </p>
                <p>
                  Our DNA is built on "Old School" hard work combined with 
                  Bio-Mechanical science. We don't follow trends; we set them.
                </p>
              </div>
            </div>
            <div className="hidden lg:block relative aspect-square">
               <Dumbbell className="w-full h-full text-white/5 animate-pulse rotate-12" />
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[150px] -mr-48 -mt-48" />
        </section>

      </div>
    </div>
  );
}