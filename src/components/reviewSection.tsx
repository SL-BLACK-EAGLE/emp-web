"use client";
import React from 'react'
import {Fade} from "react-awesome-reveal";
import Image from "next/image";
import {Reviews} from "@/ReviewConstants";

const ReviewSection = () => {

    return (
        <Fade cascade damping={1}>
        <section className="min-h-screen w-full items-center justify-center flex flex-col gap-10 bg6">
            <Fade cascade damping={0.2}>
                <h1 className=" font-bold text-center">What Our Clients Says</h1>
                <span className="text-center flex">Pumpkin Enchantment exceeded my expectations!
                    Unforgettable <br/> experiences, flavors, and joy – a true enchanting journey.</span>
                <div
                    className="grid mb-8 w-full border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                    {Reviews.map((review, index) => (
                        <figure
                            key={index}
                            className="flex min-w-unit-9xl flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700"
                        >
                            <blockquote className="max-w-4xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{review.title}</h3>
                                <p className="my-4">{review.content}</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center ">
                                <Image className="rounded-full w-9 h-9" src={review.imgSrc} alt="profile picture" width={100} height={100} />
                                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                    <div>{review.name}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 ">{review.position}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>

            </Fade>
        </section>
        </Fade>
    )
}
export default ReviewSection
