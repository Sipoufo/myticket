import React, { useEffect, useState } from "react";
import TrendingEvent from "../components/home/trendingEvent";
import DiscoverEvent from "../components/home/dicoverEvent";
import Footer from "../components/footer";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import { FetchAllEvents } from "../services/eventService";
import { FetchAllCategories } from "../services/categoryService";

const Home = () => {
    const { token } = useParams();

    // const [data, setData] = useState();
    const [result, setResult] = useState([]);
    const [categories, setCategories] = useState({
        isError: false,
        message: [],
        data: null,
    });
    const [loading, setLoading] = useState(true);

    const fetchEvents = () => {
        const res = FetchAllEvents(1, 8);
        res.then((data) => {
            if (!data.isError) {
                console.log(data['data']['data']);
                setResult(data['data']['data']);
            } else {
                console.log(data['data']);
                setResult(data['data']);
            }
        }).catch((e) => {
            console.log(e);
        });
    };

    const fetchCategories = () => {
        const res = FetchAllCategories();
        res.then((data) => {
            setCategories(data);
        }).catch((e) => {
        });
    };

    useEffect(() => {
        fetchEvents();
        fetchCategories();
        setLoading(false);
    }, []);

    if (loading) {
        return <Loading />;
    } else {
        return (
            <div className="w-full h-full flex flex-col overflow-y-auto gap-10">
                {/* Header */}
                <Header token={token} />

                {/* Trending Event */}
                <TrendingEvent data={result} />

                {/* Discover Event By Category */}
                <DiscoverEvent data={categories} />

                {/* Footer */}
                <Footer />
            </div>
        );
    }
};

export default Home;
