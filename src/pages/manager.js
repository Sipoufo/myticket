import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Loading from "../components/loading";
import { IoTicketOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import {FetchOneEvent} from "../services/eventService";
import {FetchTicketByEventId, FetchAllTicketByEventId,FetchTicketBuyByTicketId, FetchOneTicketByTicketId} from "../services/ticketService";



const ManagerEvent = () => {
    const { eventId, isError, message } = useParams();
    const [event, setEvent] = useState([]);
    const [dataStats, setDataStats] = useState([]);
    const [globalDataStats, setGlobalDataStats] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState("");
    const [usersWithTicketCount, setUsersWithTicketCount] = useState([]);
    const [totalTicketSold, setTotalTicketSold] = useState(0);
    const [totalSubscribers, setTotalSubscribers] = useState(0);
    const [totalEarningString, setTotalEarningString] = useState("0");
    const firstEntry = (currentPage - 1) * itemsPerPage + 1;
    const lastEntry = Math.min(currentPage * itemsPerPage, globalDataStats.length);

    const changePage = (newPage) => {
        setCurrentPage(newPage);
    };


    const fetchOneEvent = async () => {
          const data = await FetchOneEvent(eventId);
          setEvent(data["data"]);
    };
    const fetchTickets = async () => {
        const data = await FetchAllTicketByEventId(eventId);
        setTickets(data.data["data"]);
    };

    const fetchOneTicketEarning = async () => {
        if(selectedTicket){
            const data = await FetchOneTicketByTicketId(selectedTicket);
            const earnings = data.data["price"] * totalTicketSold;
            setTotalEarningString(formatMoney(earnings));
        }
    }

    const fetchOneTicketBuyService = async () =>{
        if(selectedTicket){
        const data = await FetchTicketBuyByTicketId(selectedTicket, currentPage, itemsPerPage);
        setDataStats(data.data["data"]);
    }
    }
    const fetchGlobalTicketBuyService = async () =>{
        if(selectedTicket){
        const data = await FetchTicketBuyByTicketId(selectedTicket, 1, 10000);
        setGlobalDataStats(data.data["data"]);
    }
    }

    function formatMoney(amount) {
        if (amount >= 1000) {
          const suffixes = ["", "k", "M", "B", "T"];
          const suffixNum = Math.floor(("" + amount).length / 3);
          let shortValue = parseFloat((suffixNum !== 0 ? (amount / Math.pow(1000, suffixNum)) : amount).toPrecision(2));
          if (shortValue % 1 !== 0) {
            shortValue = shortValue.toFixed(2);
          }
          return shortValue + suffixes[suffixNum];
        }
        return amount.toString();
      }


    //function reacting to selected ticket change to fetch data

    // Add pagination and search bar
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [result, setResult] = useState(null);
    useEffect(() => {
        fetchOneEvent();
        fetchTickets();
    }, [eventId]);
    useEffect(() => {
        fetchOneTicketBuyService();
        fetchGlobalTicketBuyService();
    }, [selectedTicket, itemsPerPage, currentPage]);
    useEffect(() => {
        const updatedUsersWithTicketCount = dataStats.map(item => ({
            userId: item.user.userId,
            firstName: item.user.firstName,
            lastName: item.user.lastName,
            email: item.user.email,
            phone: item.user.phone,
            ticketCount: item.ticketCount
        }));
        setUsersWithTicketCount(updatedUsersWithTicketCount);
    }, [dataStats]);
    useEffect(() => {
        setTotalTicketSold(globalDataStats.reduce((total, item) => total + item.ticketCount, 0));
        setTotalSubscribers(globalDataStats.length);
        // setTotalTicketSold(usersWithTicketCount.reduce((total, item) => total + item.ticketCount, 0));
        // setTotalSubscribers(usersWithTicketCount.length);
    }, 
    // [usersWithTicketCount]
    [globalDataStats]
    );
    useEffect(() => {
        fetchOneTicketEarning();
    }, [totalTicketSold]);



    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10 pb-40 md:pb-0">
            {/* Header */}
            <div className="relative min-h-[60%] flex text-white">
                {/* Background image */}
                <img
                    src={process.env.PUBLIC_URL + "/assets/images/bg2.jpg"}
                    className="absolute h-full w-full object-cover"
                    alt="bg_image_home"
                />
                <div className="absolute h-full w-full bg-gradient-to-t bg-primary to-transparent bg-opacity-70"></div>
                <div className="w-full h-full z-10 flex flex-col justify-center">
                    <Navbar />
                    <div className="flex justify-center items-center">
                        <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-dark-500 md:text-4xl lg:text-6xl dark:text-white pt-20">{event["name"]}</h1>
                    </div>
                   
                        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div class="grid grid-cols-1 row-gap-8 md:grid-cols-3">
                                <div class="text-center md:border-r px-2">
                                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{totalTicketSold}</h6>
                                <p class="text-sm font-medium tracking-widest text-black-500 uppercase lg:text-base">
                                    Ticket sold
                                </p>
                                </div>
                                <div class="text-center md:border-r px-2">
                                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{totalSubscribers}</h6>
                                <p class="text-sm font-medium tracking-widest text-black-500 uppercase lg:text-base">
                                    Subscribers
                                </p>
                                </div>
                                <div class="text-center px-2">
                                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{totalEarningString}FCFA</h6>
                                <p class="text-sm font-medium tracking-widest text-black-500 uppercase lg:text-base">
                                    Earnings
                                </p>
                                </div>
                            </div>
                        </div> 
                    
                </div>
            </div>
        <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight">Users</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select
                        onChange={(e) => {setItemsPerPage(e.target.value);}}
                            class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option selected>4</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                            onChange={(e) => {setSelectedTicket(e.target.value);
                                console.log(e.target.value);}}>
                            <option selected disabled>Choose a ticket</option>
                            {tickets.map((ticket)=> {
                                return(
                                    <option key={ticket["ticketId"]} value={ticket["ticketId"]}>{ticket["name"]}</option>
                                );  
                            })}
                            
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input id="searchInput" placeholder="Search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div> */}
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    First & Last Name
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Number of tickets
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Phone Number
                                </th>
                              
                            </tr>
                        </thead>
                        <tbody>
                        {usersWithTicketCount.map((user)=> {
                                return(
                                    <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        {/* <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div> */}
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {user["firstName"]} {user["lastName"]}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{user["ticketCount"]}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    {user["email"]}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    {user["phone"]}
                                    </p>
                                </td>

                            </tr>
                                    
                                );  
                            })}
                        </tbody>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                        <span class="text-xs xs:text-sm text-gray-900">
                            {!usersWithTicketCount.length < itemsPerPage ? `Showing ${firstEntry} to ${lastEntry} of ${globalDataStats.length} entries` : ''}
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                onClick={() => changePage(currentPage + 1)} disabled={usersWithTicketCount.length < itemsPerPage}
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ManagerEvent;
