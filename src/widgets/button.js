import React from "react";

const Button = ({title}) => {
    return (
        <button className="w-auto px-4 py-3 bg-primary rounded-lg hover:bg-opacity-90">
            {title}
        </button>
    )
};

export default Button;