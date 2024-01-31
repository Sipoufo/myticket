import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Event from "../widgets/event";
import Footer from "../components/footer";
import {
    FetchEventsByCategoryId,
} from "../services/eventService";
import Loading from "../components/loading";
import { FetchAllCategories } from "../services/categoryService";
import { useLocation } from 'react-router-dom';
import { IoTicketOutline } from "react-icons/io5";

const EventCategoryPage = () => {
    const { categoryId } = useParams();
    const [result, setResult] = useState(null);
    const [categories, setCategories] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 20;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const location = useLocation();
    const categoryName = location.state.name;


    const fetchEventsByCategoryId = async (categoryId, pageNumber, pageSize) => {
            const data = await FetchEventsByCategoryId(categoryId, pageNumber, pageSize);
            setResult(data["data"]); 
            console.log(result);  
    };

    const fetchCategories = async () => {
        await FetchAllCategories()
            .then((data) => {
                setCategories(data);
            })
            .catch((e) => {});
    };

    useEffect(() => {
        fetchEventsByCategoryId(categoryId, pageNumber, pageSize);
        fetchCategories();
    }, [pageNumber, pageSize]);

    useEffect(() => {
        if(categories){
            setSelectedCategory(categories["data"].find(category => category.categoryId === categoryId));
        }
        
    }, [categories, categoryId]);

    const prevOnClick = (e) => {
        e.preventDefault();
        setResult(null);
        setPageNumber(pageNumber - 1);
        fetchEventsByCategoryId(pageNumber - 1, pageSize);
    }

    const nextOnClick = (e) => {
        e.preventDefault();
        setResult(null);
        setPageNumber(pageNumber + 1);
        fetchEventsByCategoryId(pageNumber + 1, pageSize);
        
    }

    if (result == null || categories == null) {
        return <Loading />;
    }
    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10">
            {/* Header */}
            <Header />
            {result["data"].length === 0 ? (
                <div className="flex items-center justify-center">
                    <div className="h-96 flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl items-center justify-center">
                        <IoTicketOutline className="text-[10rem] text-gray-400" />
                        <p className="font-medium text-gray-600 text-center">
                            Oops, no events here!
                        </p>
                        <p className="text-2rem text-gray-300 text-center">
                        Try coming back later.
                        </p>
                    </div>
                </div>)

                : 
                <div className="flex justify-center">
                <div className="relative flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                    {/* Categories */}
                    <div className="flex flex-row gap-2 items-center">
                        <label className="text-xl font-bold">
                            Événements populaires :
                        </label>
                        <select className="px-4 py-2 text-xl text-primary font-bold bg-white">
                        <option selected disabled value="">Select event type</option>
                        <option value="OnLine">OnLine</option>
                        <option value="Present">Present</option>
                        </select>
                    </div>
                    <ul className="flex flex-row gap-10 overflow-x-auto no-scrollbar">
                        <li
                            className={

                                "text-primary border-b-2 border-primary"}
                        >
                            <strong>{categoryName ? categoryName : "..."}</strong>
                        </li>
                    </ul>
                    {/* Event Presentation Part */}
                    <Event data={result["data"]} />

                    {/* Pagination */}
                    <div className="flex flex-col items-center">
                        <span className="text-sm">
                            Showing{" "}
                            <span className="font-semibold text-primary">
                                {pageNumber}
                            </span>{" "}
                            to{" "}
                            <span className="font-semibold text-primary">
                                {pageSize > result.dataNumber
                                    ? result.dataNumber
                                    : pageSize}
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-primary">
                                {result.dataNumber}
                            </span>{" "}
                            Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button
                                className={`${
                                    pageNumber <= 1 && "cursor-not-allowed pointer-events-none"
                                } flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-l hover:bg-gray-900`}
                                onClick={prevOnClick}
                            >
                                Prev
                            </button>
                            <button
                                className={`${
                                    pageSize >= result.dataNumber &&
                                    "cursor-not-allowed pointer-events-none"
                                } flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-l border-gray-700 rounded-r hover:bg-gray-900`}
                                onClick={nextOnClick}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                    
            }
            {/* List of events */}
            

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default EventCategoryPage;
