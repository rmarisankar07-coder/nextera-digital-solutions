import { createFileRoute } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/aurora-background";
import { CinematicLoader } from "@/components/cinematic-loader";
import { ScrollProgress } from "@/components/scroll-progress";
import { NavBar } from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { Timeline } from "@/components/timeline";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NextEra Digital Solutions"},
      {
        name: "description",
        content:
          "NextEra Digital Solutions is a modern software studio by Team NextEra— building intelligent web platforms, AI-powered products and startup-grade digital experiences.",
      },
      { property: "og:title", content: "NextEra Digital Solutions" },
      {
        property: "og:description",
        content:
          "Modern websites, full-stack engineering, AI solutions and startup products — crafted with engineering excellence and design-led thinking.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen">
      <CinematicLoader />
      <AuroraBackground />
      <ScrollProgress />
      <NavBar />
      <main>
        <Hero />
        <Mission />
        <About />
        <Services />
        <Stack />
        <Projects />
        <Process />
        <Timeline />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
