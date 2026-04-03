import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyLooqus from "@/components/sections/WhyLooqus";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Looqus — Digital Ad Agency | We Make Brands Impossible to Ignore",
  description:
    "Looqus is a performance-first digital advertising agency. Meta & Google Ads, Creative Strategy, Shopify Growth, and Analytics for brands that want to dominate.",
  openGraph: {
    title: "Looqus — Digital Ad Agency",
    description: "We Make Brands Impossible to Ignore.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <WhyLooqus />
      <Testimonials />
      <CTABanner />
    </>
  );
}
