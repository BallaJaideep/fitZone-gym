// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { 
//   Trophy, 
//   Users, 
//   Target, 
//   Dumbbell, 
//   Heart, 
//   Clock,
//   Star,
//   ArrowRight,
//   CheckCircle2
// } from "lucide-react";

// export default function Home() {
//   const stats = [
//     { label: "Active Members", value: "5000+", icon: Users },
//     { label: "Expert Trainers", value: "50+", icon: Dumbbell },
//     { label: "Success Stories", value: "10k+", icon: Trophy },
//     { label: "Years Experience", value: "15+", icon: Target },
//   ];

//   const features = [
//     {
//       icon: Heart,
//       title: "Premium Equipment",
//       description: "State-of-the-art machines and free weights for every fitness level"
//     },
//     {
//       icon: Users,
//       title: "Expert Trainers",
//       description: "Certified professionals dedicated to your transformation journey"
//     },
//     {
//       icon: Clock,
//       title: "Flexible Hours",
//       description: "Open 24/7 to fit your busy schedule and lifestyle"
//     },
//     {
//       icon: Target,
//       title: "Personalized Plans",
//       description: "Custom workout and nutrition programs tailored to your goals"
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Transformation Winner",
//       text: "Lost 30 lbs in 3 months! The trainers here are incredible and the community is so supportive.",
//       rating: 5
//     },
//     {
//       name: "Mike Chen",
//       role: "Strength Program",
//       text: "Best gym I've ever been to. Equipment is top-notch and the atmosphere keeps me motivated.",
//       rating: 5
//     },
//     {
//       name: "Emma Davis",
//       role: "CrossFit Member",
//       text: "The classes are challenging but fun. I've never been in better shape in my life!",
//       rating: 5
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
//           <img 
//             src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
//             alt="Gym Hero" 
//             className="w-full h-full object-cover opacity-40 scale-105"
//           />
//         </div>
        
//         <div className="container mx-auto px-4 relative z-20">
//           <div className="max-w-3xl animate-fade-in">
//             <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic">
//               Transform Your
//               <span className="block text-gradient">Body & Mind</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-medium">
//               Join the fitness revolution with expert trainers, premium equipment, 
//               and a community that pushes you to be your best.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-5">
//               <Link href="/contact">
//                 <Button variant="hero" size="lg" className="w-full sm:w-auto gradient-primary shadow-glow font-black uppercase tracking-widest px-8 py-7 text-lg">
//                   Start Your Journey
//                   <ArrowRight className="ml-2" />
//                 </Button>
//               </Link>
//               <Link href="/contact">
//                 <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary/40 text-primary hover:bg-primary/10 font-black uppercase tracking-widest px-8 py-7 text-lg">
//                   Book Free Trial
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-24 bg-secondary/30 border-y border-border">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//             {stats.map((stat, index) => (
//               <div
//                 key={stat.label}
//                 className="text-center animate-slide-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="flex justify-center mb-6">
//                   <div className="bg-primary/10 p-5 rounded-2xl">
//                     <stat.icon className="w-8 h-8 text-primary shadow-glow" />
//                   </div>
//                 </div>
//                 <h3 className="text-4xl font-black text-gradient mb-2 tracking-tighter italic uppercase">{stat.value}</h3>
//                 <p className="text-muted-foreground font-bold uppercase text-xs tracking-widest">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-24">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-20 animate-fade-in">
//             <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
//               Why Choose <span className="text-gradient">FitZone</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               We provide everything you need to reach your fitness goals
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <Card
//                 key={feature.title}
//                 className="glass-card border-border hover:border-primary/50 transition-smooth hover:shadow-glow animate-scale-in group"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <CardContent className="p-8">
//                   <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
//                     <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
//                   </div>
//                   <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic">{feature.title}</h3>
//                   <p className="text-muted-foreground leading-relaxed text-sm font-medium">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-24 bg-secondary/20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-20 animate-fade-in">
//             <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
//               Success <span className="text-gradient">Stories</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Real transformations from real people
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card
//                 key={testimonial.name}
//                 className="glass-card border-border hover:shadow-glow transition-smooth animate-slide-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <CardContent className="p-8">
//                   <div className="flex gap-1 mb-6">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 fill-primary text-primary" />
//                     ))}
//                   </div>
//                   <p className="text-foreground/90 mb-8 italic text-lg leading-relaxed font-medium">"{testimonial.text}"</p>
//                   <div className="border-t border-border pt-6">
//                     <p className="font-black uppercase tracking-wider italic text-white">{testimonial.name}</p>
//                     <p className="text-sm text-primary font-bold uppercase tracking-widest">{testimonial.role}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-32 relative overflow-hidden">
//         <div className="absolute inset-0 bg-primary/5" />
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center animate-scale-in">
//             <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter italic">
//               Ready to Start Your <br />
//               <span className="text-gradient">Transformation?</span>
//             </h2>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
//               Join thousands of members who have already transformed their lives
//             </p>
//             <div className="flex flex-col sm:flex-row gap-5 justify-center">
//               <Link href="/contact">
//                 <Button variant="hero" size="lg" className="w-full sm:w-auto gradient-primary shadow-glow font-black uppercase tracking-widest px-10 py-8 text-lg">
//                   <CheckCircle2 className="mr-2" />
//                   Get Started Today
//                 </Button>
//               </Link>
//               <Link href="/services">
//                 <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary/40 text-primary hover:bg-primary/5 font-black uppercase tracking-widest px-10 py-8 text-lg">
//                   Explore Programs
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import React from "react";
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

export default function Home() {
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic">
              Transform Your
              <span className="block text-gradient">Body & Mind</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-medium">
              Join the fitness revolution with expert trainers, premium equipment, 
              and a community that pushes you to be your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button asChild variant="default" size="lg" className="w-full sm:w-auto gradient-primary shadow-glow font-black uppercase tracking-widest px-8 py-7 text-lg rounded-full">
                <Link href="/contact" className="flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-primary/40 text-primary hover:bg-primary/10 font-black uppercase tracking-widest px-8 py-7 text-lg rounded-full">
                <Link href="/contact">
                  Book Free Trial
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-5 rounded-2xl">
                    <stat.icon className="w-8 h-8 text-primary shadow-glow" />
                  </div>
                </div>
                <h3 className="text-4xl font-black text-gradient mb-2 tracking-tighter italic uppercase">{stat.value}</h3>
                <p className="text-muted-foreground font-bold uppercase text-xs tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
              Why Choose <span className="text-gradient">FitZone</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              We provide everything you need to reach your fitness goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Real transformations from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-8 italic text-lg leading-relaxed font-medium">"{testimonial.text}"</p>
                  <div className="border-t border-border pt-6">
                    <p className="font-black uppercase tracking-wider italic text-white">{testimonial.name}</p>
                    <p className="text-sm text-primary font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter italic">
              Ready to Start Your <br />
              <span className="text-gradient">Transformation?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
              Join thousands of members who have already transformed their lives
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto gradient-primary shadow-glow font-black uppercase tracking-widest px-10 py-8 text-lg rounded-full">
                <Link href="/contact" className="flex items-center">
                  <CheckCircle2 className="mr-2" />
                  Get Started Today
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-primary/40 text-primary hover:bg-primary/5 font-black uppercase tracking-widest px-10 py-8 text-lg rounded-full">
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
}