"use client";

import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation,FreeMode, Thumbs } from 'swiper/modules';
import {HeroImages} from "../../public/images/Images";
import NewCard from "@/components/ui/Card";

const App = () => {
    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <>
                <div className="flex flex-col gap-2 w-full bg5">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Autoplay, Pagination, Navigation, FreeMode, Thumbs]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper2 w-[100vw] max-h-screen relative"
                    >
                        {HeroImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full relative image-wrapper">
                                    <Image src={image} alt="img" width={1000} height={100}/>
                                    <div
                                        className="absolute flex items-center z-40 bottom-96  -top-20 left-24">
                                        <span className="text-6xl font-bold text-white text-start">The Best <br/>
                                            Pumpkin Items
                                            <br/>
                                            In Your Home
                                        </span>
                                    </div>
                                    <div className="absolute flex items-center z-40 bottom-96  -top-64 right-24">
                                        <NewCard/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>

                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper w-[80vw] max-h-52"
                    >
                        {HeroImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="">
                                    <Image src={image} alt="img" loading={"lazy"} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </>
    );
}

export default App;