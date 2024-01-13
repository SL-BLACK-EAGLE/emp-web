import HeroCarousal from "@/components/carousal";
import DescriptionSection from "@/components/descriptionSection";
import ServicesSection from "@/components/servicesSection";
import ReviewSection from "@/components/reviewSection";
import HowItWorks from "@/components/howItWorks";
import RoadMap from "@/components/RoadMap";
import OurBestSellerProducts from "@/components/ourBestSellerProduct";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
        <div className="">
            <HeroCarousal />
            <HowItWorks />
            <DescriptionSection />
            <OurBestSellerProducts />
            <ServicesSection />
            <RoadMap />
            <ReviewSection />
        </div>
    </main>
  )
}
