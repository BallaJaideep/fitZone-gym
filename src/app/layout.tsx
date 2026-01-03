import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Components & Providers
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from "@/components/providers/QueryProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { cn } from "@/lib/utils";

/** * FONT OPTIMIZATION
 * Replaces the <link> tags from your index.html.
 * Next.js self-hosts these fonts for better performance.
 */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

/** * VIEWPORT CONFIGURATION
 */
export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

/** * METADATA API
 * Replaces all <meta> and <title> tags from your index.html.
 */
export const metadata: Metadata = {
  title: {
    default: "FitZone Gym - Transform Your Body, Transform Your Life",
    template: "%s | FitZone Gym",
  },
  description: "Premium fitness center offering personal training, group classes, and state-of-the-art equipment. Join FitZone Gym today.",
  authors: [{ name: "MystryMind Innovations" }],
  metadataBase: new URL("https://fitzone.com"),
  openGraph: {
    title: "FitZone Gym - Premium Fitness Center",
    description: "Transform your body with expert trainers and world-class facilities",
    url: "https://fitzone.com",
    siteName: "FitZone Gym",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
        width: 1200,
        height: 630,
        alt: "FitZone Gym Training Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitZone Gym",
    description: "Transform your body with expert trainers.",
    site: "@fitzone_gym",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-primary/30 selection:text-primary",
          poppins.variable
        )}
      >
        <QueryProvider>
          <TooltipProvider delayDuration={0}>
            {/* Main Application Shell */}
            <div className="relative flex min-h-screen flex-col">
              <Navigation />
              
              {/* Skip Link for Accessibility */}
              <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white"
              >
                Skip to content
              </a>

              <main id="main-content" className="flex-1">
                {children}
              </main>

              <Footer />
              <FloatingCTA />
            </div>

            {/* Global Toasts */}
            <Toaster />
            <Sonner position="top-center" richColors closeButton />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}