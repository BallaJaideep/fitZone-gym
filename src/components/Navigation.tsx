// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, Dumbbell } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Challenges", path: "/challenges" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isActive = (path: string) => pathname === path;

//   return (
//     <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 group">
//             <div className="bg-primary p-2 rounded-lg shadow-glow group-hover:scale-110 transition-all duration-300">
//               <Dumbbell className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-xl font-bold text-gradient">FitZone Gym</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 className={cn(
//                   "font-medium transition-all duration-300 relative py-1",
//                   isActive(link.path)
//                     ? "text-primary after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
//                     : "text-foreground hover:text-primary"
//                 )}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <Button variant="hero" size="default">
//               Join Now
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 animate-fade-in bg-background border-t border-border mt-1">
//             <div className="flex flex-col gap-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   href={link.path}
//                   className={cn(
//                     "font-medium px-4 py-3 rounded-lg transition-all",
//                     isActive(link.path)
//                       ? "bg-primary/10 text-primary"
//                       : "text-foreground hover:bg-secondary"
//                   )}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <div className="px-4 pt-2">
//                 <Button variant="hero" size="default" className="w-full">
//                   Join Now
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Challenges", path: "/challenges" },
    { name: "Contact", path: "/contact" },
  ];

  /**
   * FIX FOR BASEPATH ACTIVE STATES:
   * Next.js usePathname() includes the basePath (e.g., /fitZone-gym/about).
   * We need to check if the current path ends with our link path or handles the root correctly.
   */
  const isActive = (path: string) => {
    if (path === "/" ) {
      // Matches /fitZone-gym or /fitZone-gym/
      return pathname === "/fitZone-gym" || pathname === "/fitZone-gym/";
    }
    // Matches /fitZone-gym/about
    return pathname.endsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Next.js <Link> automatically handles the /fitZone-gym prefix */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg shadow-glow group-hover:scale-110 transition-all duration-300">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient uppercase tracking-tighter">
              FitZone Gym
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "font-medium transition-all duration-300 relative py-1 text-sm uppercase tracking-wide",
                  isActive(link.path)
                    ? "text-primary after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 shadow-glow">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-in slide-in-from-top-5 duration-300 bg-background border-t border-border mt-1">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "font-medium px-4 py-3 rounded-lg transition-all text-sm uppercase",
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold shadow-glow">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;