"use client";

import HeroCarousal from "@/components/carousal";
import ServicesSection from "@/components/servicesSection";
import ReviewSection from "@/components/reviewSection";
import HowItWorks from "@/components/howItWorks";
import RoadMap from "@/components/RoadMap";
import OurBestSellerProducts from "@/components/ourBestSellerProduct";
import {useEffect, useState} from "react";
import Loading from "@/app/loading";
import AboutCompanySection from "@/components/about/AboutCompanySection";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 1 seconds

        return () => clearTimeout(timer); // cleanup on unmount
    }, []);
  return (
    <main className="flex flex-col items-center">
        {isLoading ? <Loading /> :
        <div className="">
            <HeroCarousal />
            <HowItWorks />
            <AboutCompanySection />
            <OurBestSellerProducts />
            <ServicesSection />
            <RoadMap />
            <ReviewSection />
        </div>
        }
    </main>
  )
}
