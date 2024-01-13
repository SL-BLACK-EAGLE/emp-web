"use client";

import React from 'react'
import {Fade} from "react-awesome-reveal";
import BestSellerCard from "@/components/ui/bestSellerCard/BestSellerCard";
import {BestSellerCardConstants} from "@/BestSellerCardConstants";
const OurBestSellerProducts = () => {
    return (
        <Fade cascade damping={1}>
            <section className="justify-center items-center flex flex-col gap-16 bg-gray-50">
               <div>
                   <h1 className="font-bold">Our Best Seller Product</h1>
               </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-center items-center h-96">
                           <BestSellerCard
                               title="title"
                               content="content"
                               bgImage="/images/image1.png"
                           />
                </div>
            </section>
        </Fade>
    )
}
export default OurBestSellerProducts
