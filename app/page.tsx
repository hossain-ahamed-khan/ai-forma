import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Precision from "@/components/Precision";
import Cockpit from "@/components/Cockpit";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import LaunchApps from "@/components/LaunchApps";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <Precision />
      <Cockpit />
      <Mission />
      <FAQ />
      <GetInTouch />
      <LaunchApps />
      <CTA />
      <Footer />
    </main>
  );
}
