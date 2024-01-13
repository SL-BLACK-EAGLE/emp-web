import React from "react";
import "./BestSellerCard.css";

type BestSellerCardProps = {
    title: string;
    content: string;
    bgImage: string;
};

const BestSellerCard = (
    {
        title,
        content,
        bgImage,
    }: BestSellerCardProps) => (

    <div className={`card ${bgImage}`}>
        <div className="card-content">
            <h5 className="card-title">{title}</h5>
            <p className="card-body">
                {content}
            </p>
            <a href="#" className="button">
                View Product
            </a>
        </div>
    </div>
);
export default BestSellerCard;