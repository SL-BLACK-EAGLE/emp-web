"use client";

import HeroCarousal from "@/components/carousal";
import DescriptionSection from "@/components/descriptionSection";
import ServicesSection from "@/components/servicesSection";
import ReviewSection from "@/components/reviewSection";
import HowItWorks from "@/components/howItWorks";
import RoadMap from "@/components/RoadMap";
import OurBestSellerProducts from "@/components/ourBestSellerProduct";
import {useEffect, useState} from "react";
import Loading from "@/app/loading";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 2 seconds

        return () => clearTimeout(timer); // cleanup on unmount
    }, []);
  return (
    <main className="flex flex-col items-center">
        {isLoading ? <Loading /> :
        <div className="">
            <HeroCarousal />
            <HowItWorks />
            <DescriptionSection />
            <OurBestSellerProducts />
            <ServicesSection />
            <RoadMap />
            <ReviewSection />
        </div>
        }
    </main>
  )
}
