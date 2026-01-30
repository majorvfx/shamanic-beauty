import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Method from "@/components/Method";
import Course from "@/components/Course";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Marquee />
      <Problem />
      <About />
      <Method />
      <Course />
      <Testimonials />

      {/* Sticky Book Now Bar for Mobile */}
      <div className="md:hidden sticky bottom-6 left-0 right-0 z-40 px-6 pointer-events-none">
        <button className="w-full py-4 rounded-full bg-gold text-background font-medium text-lg shadow-2xl flex items-center justify-center gap-2 pointer-events-auto active:scale-95 transition-transform backdrop-blur-sm">
          Book Now
        </button>
      </div>
    </main>
  );
}
