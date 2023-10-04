import React from "react";
import CategoryCard from "../../widgets/categoryCard";

const DiscoverEvent = () => {
    return (
        <div className="flex justify-center">
            <div className="relative flex flex-col gap-6 px-4 md:w-10/12 max-w-screen-xl">
                {/* header */}
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-xl font-medium">
                        Discover Events by Category
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CategoryCard image={"/assets/images/bg3.jpg"} name="Art" />
                    <CategoryCard image={"/assets/images/bg3.jpg"} name="Art" />
                    <CategoryCard image={"/assets/images/bg3.jpg"} name="Art" />
                    <CategoryCard image={"/assets/images/bg3.jpg"} name="Art" />
                    <CategoryCard image={"/assets/images/bg3.jpg"} name="Art" />
                    <CategoryCard image={"/assets/images/bg3.jpg"} name="Art" />
                </div>
            </div>
        </div>
    );
};

export default DiscoverEvent;
