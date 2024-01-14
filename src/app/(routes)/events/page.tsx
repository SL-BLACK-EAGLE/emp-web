"use client";

import React from 'react'
import {Fade} from "react-awesome-reveal";
import Image from "next/image";
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/react";

const EventsPage = () => {

    return (
        <Fade cascade damping={1}>
            <section className="min-h-screen w-full bg-gray-100  justify-center flex flex-col gap-4 bg6">
                <Breadcrumbs className="lg:px-20">
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem>Events</BreadcrumbItem>
                </Breadcrumbs>
                <Fade cascade damping={0.2}>
                    <div className="grid grid-cols-2 lg:px-20">
                        <div className="flex items-start justify-center mb-40 gap-6 flex-col">
                            <h1 className=" font-bold text-start">Nothing to worry <br/> about with <br/> Cucurbita</h1>
                            <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam,
                                quas.</span>
                        </div>
                        <div className="justify-center items-center flex mb-40">
                            <div className="rounded-3xl border-8 h-96 w-96 border-amber-200">
                                <Image src="/images/about-hero.jpeg" alt="aboutImg" className="rounded-3xl rotate-image h-96"  height={500} width={500}  />
                            </div>
                        </div>
                    </div>

                </Fade>
            </section>
        </Fade>
    )
}
export default EventsPage
