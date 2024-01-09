"use client";
import React from 'react'
import {Fade} from "react-awesome-reveal";

const ServicesSection = () => {
    return (
        <Fade cascade damping={1}>
        <section className="min-h-screen w-full items-center justify-center flex flex-col gap-4 bg5">
            <Fade cascade damping={0.2}>
                <h1 className=" font-bold text-center">Welcome to Cucurbita</h1>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.</p>
                <div className="mt-10 gap-12 flex flex-col">
                    <Fade cascade damping={0.5}>
                    <div>
                        <h2 className="font-bold text-center">Our Mission</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                            quas.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-center">Our Vision</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                            quas.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-center">Our Values</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                            quas.</p>
                    </div>
                    </Fade>
                </div>
            </Fade>
        </section>
        </Fade>
    )
}
export default ServicesSection
