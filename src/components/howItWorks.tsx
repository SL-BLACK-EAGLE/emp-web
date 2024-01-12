"use client";

import React from 'react'
import {Fade} from "react-awesome-reveal";
import Image from "next/image";
import {cards} from "@/HomeConstants";

const HowItWorks = () => {
    return (
        <Fade cascade damping={1}>
            <section className="min-h-screen w-full items-center justify-center flex flex-col gap-4 bg4 px-10">
                <Fade cascade damping={0.2}>
                    <h1 className=" font-bold text-center">How It Works</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.</p>
                    <div className="mt-10 gap-12 flex flex-col">
                        <Fade cascade damping={0.5}>
                            <div className="flex-col lg:flex-row flex gap-12 px-10">

                                {cards.map((card, index) => (
                                    <div key={index} className="items-center flex flex-col gap-6">
                                        <Image key={index} src={card.image} alt="howImage" width={100} height={100}/>
                                        <div className="flex-row flex items-center">
                                            <span className="text-3xl mr-3">{card.number}</span>
                                            <h4 className="font-bold text-foreground text-center">{card.title}</h4>
                                        </div>
                                        <p className="text-center">{card.content}</p>
                                    </div>
                                ))
                                }
                            </div>
                        </Fade>
                    </div>
                </Fade>
            </section>
        </Fade>
    )
}
export default HowItWorks
