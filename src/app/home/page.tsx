"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Trophy, 
  Users, 
  Target, 
  Dumbbell, 
  Heart, 
  Clock,
  Star,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Home = () => {
  const stats = [
    { label: "Active Members", value: "5000+", icon: Users },
    { label: "Expert Trainers", value: "50+", icon: Dumbbell },
    { label: "Success Stories", value: "10k+", icon: Trophy },
    { label: "Years Experience", value: "15+", icon: Target },
  ];

  const features = [
    {
      icon: Heart,
      title: "Premium Equipment",
      description: "State-of-the-art machines and free weights for every fitness level"
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Certified professionals dedicated to your transformation journey"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open 24/7 to fit your busy schedule and lifestyle"
    },
    {
      icon: Target,
      title: "Personalized Plans",
      description: "Custom workout and nutrition programs tailored to your goals"
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Transformation Winner",
      text: "Lost 30 lbs in 3 months! The trainers here are incredible and the community is so supportive.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Strength Program",
      text: "Best gym I've ever been to. Equipment is top-notch and the atmosphere keeps me motivated.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "CrossFit Member",
      text: "The classes are challenging but fun. I've never been in better shape in my life!",
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" 
            alt="Hero Gym" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl animate-in fade-in duration-1000">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Transform Your
              <span className="block text-gradient">Body & Mind</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Join the fitness revolution with expert trainers, premium equipment, 
              and a community that pushes you to be your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link href="/challenges">
                  Start Your Journey
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">
                  Book Free Trial
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-in slide-in-from-bottom-5 fade-in duration-700 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-gradient mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">FitZone</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to reach your fitness goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-in zoom-in-95 duration-700 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real transformations from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-background border-border hover:shadow-glow transition-all duration-300 animate-in slide-in-from-bottom-5 duration-700 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-in zoom-in-95 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Transformation?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of members who have already transformed their lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link href="/contact">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Get Started Today
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/services">
                  Explore Programs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;