import React from "react";
import "./styles.css";

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

    <div className="best-seller-card border-primary border-3" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="best-seller-card-content">
            <h5 className="best-seller-card-title">{title}</h5>
            <p className="best-seller-card-body">
                {content}
            </p>
            <a href="#" className="button">
                View Product
            </a>
        </div>
    </div>
);
export default BestSellerCard;