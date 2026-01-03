"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// --- Data ---
const CONTACT_CHANNELS = [
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["123 Fitness Street", "Gym City, GC 12345"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Phone,
    title: "Direct Line",
    details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Mail,
    title: "Digital Desk",
    details: ["info@fitzone.com", "support@fitzone.com"],
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Clock,
    title: "Floor Hours",
    details: ["Mon-Fri: 5 AM - 11 PM", "Sat-Sun: 6 AM - 10 PM"],
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Required fields missing", { description: "Please complete the form." });
      return;
    }

    setIsSubmitting(true);
    // WhatsApp lead generation logic
    const msg = encodeURIComponent(`🔥 NEW INQUIRY\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
    const url = `https://wa.me/1234567890?text=${msg}`;

    await new Promise((r) => setTimeout(r, 1000));
    window.open(url, "_blank");
    toast.success("Opening WhatsApp Messenger");
    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-background/50 selection:bg-primary selection:text-white">
      <div className="container mx-auto px-4 space-y-24">
        
        {/* 1. Page Header */}
        <header className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            GET IN <span className="text-gradient">TOUCH</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            Have a question about our programs? Our elite coaching team is ready to 
            guide your next move.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* 2. Contact Form */}
          <section className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <Card className="border-none bg-card shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden rounded-[2.5rem]">
              <div className="h-3 w-full bg-primary" />
              <CardContent className="p-10 md:p-16 space-y-10">
                <div className="space-y-2">
                  <h2 className="text-4xl font-black tracking-tight">DIRECT MESSAGE</h2>
                  <p className="text-muted-foreground font-medium">Typical response time: &lt; 60 minutes.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Athlete Name</Label>
                      <Input
                        placeholder="MARCUS AURELIUS"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-14 bg-secondary/50 border-none rounded-xl focus:ring-primary font-bold"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Phone Number</Label>
                      <Input
                        type="tel"
                        placeholder="+1 (000) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-14 bg-secondary/50 border-none rounded-xl font-bold"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Inquiry Details</Label>
                    <Textarea
                      placeholder="TELL US ABOUT YOUR GOALS..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary/50 border-none rounded-2xl resize-none p-6 font-medium"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full h-16 text-sm font-black uppercase tracking-widest group shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "TRANSMITTING..." : "OPEN WHATSAPP CHAT"}
                    <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* 3. Info Channels */}
          <aside className="lg:col-span-5 space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            {CONTACT_CHANNELS.map((channel, idx) => (
              <Card key={idx} className="border-none bg-secondary/20 hover:bg-secondary/40 transition-all duration-500 rounded-3xl group">
                <CardContent className="p-8 flex gap-6 items-center">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform", channel.bg)}>
                    <channel.icon className={cn("w-7 h-7", channel.color)} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-black text-lg uppercase tracking-tight">{channel.title}</h3>
                    {channel.details.map((line, i) => (
                      <p key={i} className="text-muted-foreground font-medium text-sm leading-tight">{line}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </aside>
        </div>

        {/* 4. Interactive Map Section */}
        <section className="animate-in fade-in zoom-in-95 duration-1000">
          <Card className="border-none overflow-hidden rounded-[3rem] shadow-2xl bg-zinc-900">
            <div className="grid lg:grid-cols-3">
              <div className="p-12 md:p-16 space-y-8 flex flex-col justify-center">
                <h2 className="text-white text-4xl font-black leading-none uppercase">Locate the <br/> <span className="text-primary">Zone</span></h2>
                <p className="text-zinc-400 font-medium">Located in the heart of Gym City. Free parking for members on Level B2.</p>
                <Button variant="outline" className="w-fit text-white border-white/20 hover:bg-white hover:text-black">
                  Open in Google Maps <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="lg:col-span-2 h-[500px] relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* 5. Trust Badges */}
        <section className="flex flex-wrap justify-center gap-12 py-10 opacity-50 grayscale">
          <div className="flex items-center gap-3 font-black tracking-widest text-xs"><CheckCircle2 className="w-4 h-4" /> 24/7 SUPPORT</div>
          <div className="flex items-center gap-3 font-black tracking-widest text-xs"><CheckCircle2 className="w-4 h-4" /> DATA ENCRYPTION</div>
          <div className="flex items-center gap-3 font-black tracking-widest text-xs"><CheckCircle2 className="w-4 h-4" /> SECURE BOOKING</div>
        </section>

      </div>
    </div>
  );
}