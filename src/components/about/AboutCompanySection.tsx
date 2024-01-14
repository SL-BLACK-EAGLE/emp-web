"use client";
import React from 'react'
import {Fade} from "react-awesome-reveal";

const AboutCompanySection = () => {
    return (
        <Fade cascade damping={1}>
        <section className="min-h-screen w-full bg-gray-100 items-center justify-center flex flex-col gap-4 bg3">
            <Fade cascade damping={0.2}>
                <h1 className=" font-bold text-center">About Us</h1>
                <p className="text-center">Pumpkin Company, a leading innovator in the agricultural sector, specializes in
                    cultivating and processing premium pumpkin varieties. Renowned for our commitment to quality, sustainability,
                    and farm-to-table practices, we deliver exceptional pumpkin-based products to meet diverse consumer needs.
                    From wholesome purees to delectable snacks, Pumpkin Company exemplifies excellence in harnessing the rich potential
                    of this versatile and nutritious ingredient. Our dedication to sustainable farming practices ensures a
                    bountiful harvest, contributing to both the well-being of consumers and the environment..</p>
                <div className="mt-10 gap-12 flex flex-col">
                    <Fade cascade damping={0.5}>
                    <div>
                        <h2 className="font-bold text-center">Introduction</h2>
                        <p className="text-center">The proposed model aims to enhance the operations and efficiency
                            of the Pumpkin Company across various aspects, including cultivation, production,
                            marketing, and customer engagement. By leveraging modern technologies and strategic
                            approaches, the project intends to streamline processes, increase sustainability,
                            and elevate the overall business performance.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-center">Our Vision</h2>
                        <p className="text-center">To be a global leader in promoting health
                            and happiness through the exceptional quality and versatility
                            of pumpkin-based products. We envision a world where the
                            nutritional richness of pumpkins enhances lives, and our
                            company is synonymous with innovation, sustainability, and
                            consumer well-being.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-center">Our Mission</h2>
                        <p className="text-center">Our mission is to cultivate, process, and deliver the finest pumpkin products,
                            exceeding consumer expectations in taste, nutrition, and sustainability. We are dedicated to fostering a
                            culture of excellence, environmental responsibility, and community engagement. Through our commitment to
                            quality and innovation, we aim to inspire healthier living and culinary creativity worldwide..</p>
                    </div>
                    </Fade>
                </div>
            </Fade>
        </section>
        </Fade>
    )
}
export default AboutCompanySection
