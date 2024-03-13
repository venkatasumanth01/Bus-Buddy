import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { CiStar,CiGps } from "react-icons/ci";
import { PiTicketThin,PiBatteryChargingLight } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import SeatSelection from './SeatSelection';


const BusCard = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const origin = params.get('origin');
    const destination = params.get('destination');

    const [arr, setArr] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9000/buses?origin=${origin}&destination=${destination}`).then(
            (posRes) => {
                const { data } = posRes;
                setArr(data);
            }, (errRes) => {
                console.log(errRes);
            }
        )
    }, []);

    // State to track which bus card's "View Seats" button is clicked
    const [selectedBusIndex, setSelectedBusIndex] = useState(null);

    // Function to handle "View Seats" button click
    const handleViewSeatsClick = (index) => {
        if (selectedBusIndex === index) {
            // If the same button is clicked again, close the small box
            setSelectedBusIndex(null);
        } else {
            // Otherwise, open the small box for the clicked bus card
            setSelectedBusIndex(index);
        }
    };

    const data='hello';

    if (arr.length === 0) {
        return (
            <>
                <div>
                    <h1>No Buses Found</h1>
                </div>
            </>
        )
    } else {
        return (
            <div>
                {arr.map((bus, index) => (
                    <div key={index}>
                        <div className="bus-section2">
                            <div className="flex justify-around p-5">
                                <div className="ml-5 mr-9">
                                    <h5 className=" text-[#273240] font-bold text-[21px]">{`${bus.bus_name}`}</h5>
                                    <h6 className="text-[black] font-medium text-[14px] mt-1 ">{`${bus.bus_type}`}</h6>
                                    <div className="flex mt-5 gap-4 ">
                                        <CiGps className="w-[30px] h-[30px]" />
                                        <PiTicketThin className="w-[30px] h-[30px]" />
                                        <PiBatteryChargingLight className="w-[30px] h-[30px]" />
                                        <RxExit className="w-[28px] h-[28px] pt-1 pb-1 " />
                                    </div>
                                </div>

                                <div className="ml-5 mr-9">
                                    <h4 className="font-semibold text-[20px] ">{`${bus.start_time}`}</h4>
                                    <p className="text-[#939393] font-bold text-base">{`${bus.boarding_point}`}</p>
                                </div>
                                <div className="ml-5 mr-9">
                                    <p className="text-[#ac7b7b] font-bold text-base ">{`${bus.duration}`}</p>
                                </div>
                                <div className="ml-5 mr-9">
                                    <h4 className=" text-[#444343] font-semibold text-[20px] ">{`${bus.end_time}`}</h4>
                                    <p className="text-[#939393] font-bold text-base ">{`${bus.dropping_point}`}</p>
                                </div>
                                <div className="ml-5 mr-9">
                                    <h5>Starts from</h5>
                                    <p className="text-[#434343] font-bold " >INR <span className="text-[#F5A522] text-[22px] font-bold ">{`${bus.price}`}</span> </p>
                                    <div className="bg-[#03C003] w-[63px] h-[32px] text-white rounded-[10px] flex gap-1 mt-3  " >
                                        <CiStar className="w-[25px] h-[25px] ml-2 mt-1" />
                                        <span className="mt-1">{`${bus.rating}`}</span>
                                    </div>
                                </div>
                                <button
                                    className="bg-[#FFCB00] text-white rounded-[30px] w-[102px] h-[32px] mt-11 font-[15px]"
                                    onClick={() => handleViewSeatsClick(index)} >
                                    View Seats
                                </button>
                            </div>
                        </div>
                        {/* Small box to show seats, render only for the selected bus card */}
                        {selectedBusIndex === index && (
                            <div className="mt-3 ml-[0px] mr-[10px]">
                                {/* Add your code for the small box here */}
                                {/* This box will be shown only for the selected bus card */}
                                <SeatSelection bus_type={bus.bus_type} price={bus.price} bus_name={bus.bus_name} origin={origin} destination={destination}/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}

export default BusCard;
