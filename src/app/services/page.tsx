"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  Heart, 
  Activity, 
  Bike, 
  Music, 
  Users, 
  ArrowRight,
  Flame,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const Services = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      tag: "Popular",
      description: "Build muscle, increase strength, and boost metabolism with our comprehensive strength training program. Expert trainers guide you through proper form.",
      features: ["Free weights", "Plate-loaded machines", "Personal coaching", "Progress tracking"],
      color: "text-blue-500"
    },
    {
      icon: Flame,
      title: "Cardio Fitness",
      tag: "High Intensity",
      description: "Improve cardiovascular health and burn calories. From high-end treadmills to specialized rowing machines, we cover all your endurance needs.",
      features: ["Premium Treadmills", "Air Bikes", "Rowing Machines", "Endurance Testing"],
      color: "text-orange-500"
    },
    {
      icon: Activity,
      title: "CrossFit Training",
      tag: "Pro",
      description: "High-intensity functional fitness that builds strength, agility, and endurance. Join our elite CrossFit community and push your limits daily.",
      features: ["Daily WODs", "Olympic lifting", "Gymnastic skills", "Community support"],
      color: "text-red-500"
    },
    {
      icon: Bike,
      title: "Yoga & Wellness",
      tag: "Mindfulness",
      description: "Find balance, flexibility, and inner peace. Our yoga programs are perfect for all levels, focusing on mobility and stress reduction.",
      features: ["Vinyasa flow", "Hot Yoga", "Meditation", "Flexibility training"],
      color: "text-green-500"
    },
    {
      icon: Music,
      title: "Zumba Dance",
      tag: "Fun",
      description: "Dance your way to fitness with high-energy Zumba classes. Burn calories while having fun with infectious international music and vibes.",
      features: ["Dance cardio", "Vibrant atmosphere", "All fitness levels", "Group energy"],
      color: "text-pink-500"
    },
    {
      icon: Zap,
      title: "Personal Training",
      tag: "Elite",
      description: "One-on-one coaching tailored specifically to your body and goals. Our certified trainers ensure you get the fastest possible results.",
      features: ["1-on-1 sessions", "Advanced goal setting", "Form correction", "Nutrition plans"],
      color: "text-yellow-500"
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Our <span className="text-gradient">Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Discover elite fitness paths designed for your transformation. 
            From heavy lifting to mindful yoga, we have a specialized space for every goal.
          </p>
        </section>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className="group bg-card border-border/60 hover:border-primary transition-all duration-500 hover:shadow-2xl group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center bg-background shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:shadow-glow",
                    program.color
                  )}>
                    <program.icon className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-secondary rounded text-muted-foreground">
                    {program.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>

                <div className="border-t border-border/50 pt-6 mb-8">
                  <ul className="grid grid-cols-1 gap-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-xs font-bold text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full h-12 font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                >
                  Explore Program
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <Card className="relative bg-card border-none overflow-hidden animate-scale-in">
            <CardContent className="p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                Ready to Join the <span className="text-gradient">Revolution?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto font-medium">
                Get full access to all specialized zones, 50+ weekly classes, 
                and our elite community of high-achievers.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button 
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto px-10 h-16 text-lg font-black shadow-elevated"
                >
                  Book Free Trial
                </Button>
                <Button 
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto px-10 h-16 text-lg font-black border-2"
                >
                  View Membership Plans
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;