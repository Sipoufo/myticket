import React from "react";
import TrendingEvent from "../components/home/trendingEvent";
import DiscoverEvent from "../components/home/dicoverEvent";
import Footer from "../components/footer";
import Header from "../components/header";
import { useParams } from "react-router-dom";

const Home = () => {
    const { token } = useParams();
    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10">
            {/* Header */}
            <Header token = {token} />

            {/* Trending Event */}
            <TrendingEvent />

            {/* Discover Event By Category */}
            <DiscoverEvent />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
