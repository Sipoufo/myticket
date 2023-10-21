import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({id, image, name}) => {
    return (
        <Link to={`/event/category/${id}`} className="relative flex items-end w-full h-60">
            {/* Card Image */}
            <img src={process.env.PUBLIC_URL + image} className="absolute w-full h-full object-cover" alt="Category" />
            <div className="absolute w-full h-full bg-black bg-opacity-20"></div>
            <div className="bg-black bg-opacity-10 hover:bg-opacity-70 w-full z-10 px-4 py-2 text-white text-lg font-medium">
                {name}
            </div>
        </Link>
    )
};

export default CategoryCard;