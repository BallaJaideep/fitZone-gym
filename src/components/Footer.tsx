import Link from "next/link";
import { Dumbbell, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const quickLinks = ["Home", "About Us", "Services", "Challenges", "Contact"];
  const programs = ["Cardio Training", "Strength Training", "CrossFit", "Yoga & Wellness", "Zumba Dance"];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg shadow-glow">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient">FitZone Gym</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your body, transform your life. Join the fitness revolution today.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-card hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center border border-border"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Fitness Street, Gym City, GC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@fitzone.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@fitzone.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs text-center md:text-left">
            © {new Date().getFullYear()} FitZone Gym. All rights reserved.
          </p>
          <p className="text-xs text-center md:text-right">
            Developed by{" "}
            <span className="text-gradient font-semibold">MystryMind Innovations</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;