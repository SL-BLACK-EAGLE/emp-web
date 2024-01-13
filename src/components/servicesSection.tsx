"use client";
import React from 'react'
import {Fade} from "react-awesome-reveal";
import HorizontalCard from "@/components/ui/HorizontalCard";
import {Button} from "@nextui-org/react";

const ServicesSection = () => {
    return (
        <Fade cascade damping={1}>
            <section className="justify-center items-center flex flex-col gap-16 bg-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-12">
                    <h1 className=" font-bold text-center mb-4">We Providing Services <br/> Since 2023 With Proud.</h1>
                    <div className="justify-center px-20 items-center flex">
                        <p className="text-center">Step into a world where pumpkins take center stage, and enchantment knows no bounds. Welcome to Pumpkin Enchantment, your gateway to a whimsical village brimming with innovative pumpkin wonders, delectable delights, and festivities that spark the imagination. Join us online or venture into our extraordinary pumpkin realm for an unforgettable experience celebrating the magic of the season.</p>
                    </div>
                    <div className="justify-center flex">
                        <HorizontalCard imgSrc="/images/image1.png"/>
                    </div>
                    <div className="justify-center flex">
                        <HorizontalCard imgSrc="/images/image2.png"/>
                    </div>
                    <div className="justify-center flex">
                        <HorizontalCard imgSrc="/images/image3.png"/>
                    </div>
                    <div className="justify-center flex">
                        <HorizontalCard imgSrc="/images/image1.png"/>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Button variant="bordered" className="hover:bg-primary hover:text-white" color="primary" size="lg">Learn More</Button>
                </div>
            </section>
        </Fade>
    )
}
export default ServicesSection
