import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import FeaturedWork from "@/components/home/FeaturedWork";
import PressMarquee from "@/components/home/PressMarquee";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";
import JournalTeaser from "@/components/home/JournalTeaser";
import InstagramGrid from "@/components/home/InstagramGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedWork />
      <PressMarquee />
      <AboutTeaser />
      <ServicesPreview />
      <Testimonials />
      <JournalTeaser />
      <InstagramGrid />
    </>
  );
}
