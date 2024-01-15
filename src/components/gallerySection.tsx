"use client";
import React from 'react'
import {Fade} from "react-awesome-reveal";
import {BestSellerCardConstants, GalleryConstants} from "@/BestSellerCardConstants";
import BestSellerCard from "@/components/ui/bestSellerCard/BestSellerCard";
import Image from "next/image";

const GallerySection = () => {
    return (
        <Fade cascade damping={1}>
        <section className="min-h-screen w-full bg-gray-100 items-center justify-center flex flex-col gap-4 bg3">
            <Fade damping={0.2}>
                <h1 className=" font-bold text-center">Our Gallery</h1>
                <p className="text-center">Pumpkin Enchantment exceeded my expectations!
                    Unforgettable <br/> experiences, flavors, and joy – a true enchanting journey.</p>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center">
                    <Fade damping={0.2} className="grid">
                        {GalleryConstants.map((img, index) => (
                            <Image key={index} className="w-96 h-72 rounded-2xl" src={img.bgImage} alt="product" width={100} height={100} />
                        ))}
                    </Fade>
                </div>
            </Fade>
        </section>
        </Fade>
    )
}
export default GallerySection
