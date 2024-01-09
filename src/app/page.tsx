import Image from 'next/image'
import HeroCarousal from "@/components/carousal";
import DescriptionSection from "@/components/descriptionSection";
import ServicesSection from "@/components/servicesSection";
import ReviewSection from "@/components/reviewSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
        <div className="">
            <HeroCarousal />
            <DescriptionSection />
            <ServicesSection />
            <ReviewSection />
        </div>
    </main>
  )
}
