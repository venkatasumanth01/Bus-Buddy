import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewTickets=()=>{

    const [arr,setArr]=useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9090/allTickets`).then(
            (posRes) => {
                const {data}=posRes;
                setArr(data);
            }, (errRes) => {
                console.log(errRes);
            }
        )
    }, []);

    const home=()=>{
        navigate("/home");
    }
   

    return(
        <>
            <div  className=" 2xl:h-full bg-gradient-to-t from-[#f5f7fa] from-0% to-[#c3cfe2] to-100%" >
                <div className=" 2xl:pt-8 " >
                    <div className=" 2xl:w-[600px] 2xl:h-[60px] 2xl:ml-[30%]  rounded-l-[20px] rounded-r-[20px] bg-[#7489a2] border-[#072448] " >
                        <h1 className="text-[26px]  pt-2  font-bold text-[#fdfbfb] text-center  " >Bus Tickets</h1>
                    </div>
                    <div className=" flex 2xl:gap-8 2xl:ml-[45%] mt-2 " >
                        <button onClick={home} className=" hover:bg-gradient-to-t from-[#f5f7fa] from-0% to-[#c3cfe2] to-100% hover:text-black xxs:w-[50px] xxs:h-[18px] xxs:text-[9px]  xxs:mt-[13px]  xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6   xl:w-[80px] xl:h-[25px] xl:text-[15px]  xl:mt-5  2xl:w-[108px] 2xl:h-[35px] 2xl:text-[18px] shadow-lg  bg-[#FFCB00] text-white font-semibold  text-center rounded-[20px] border-[#FFCB00] border-" >Home</button>
                    </div>
                </div>
                <div className=" mt-[3%] " >
                    {
                        arr.map((element,index)=>{
                            return(
                                <>
                                
                                    <div className=" flex ml-[3.5%]   " >
                                        <div className=" mt-[-2%] " >
                                            <div className="  2xl:w-[1250px] 2xl:h-[80px] 2xl:ml-[6%] 2xl:mt-10 bg-[#A9B9CA] rounded-[10px] border-l-[6px] border-r-[6px] border-[#1e2f43] key={index} " >
                                                <div className=" flex gap-9 ml-4 " >
                                                    <div className=" flex flex-col pt-2 pl-3  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c] " >Ticket ID</p>
                                                        <p className=" pt-2 font-bold text-[18px] " >{element.ticket_id}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Bus Name</p>
                                                        <p className=" pt-2 font-bold text-[18px]  ">{element.bus_name}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Origin</p>
                                                        <p className=" pt-2 font-bold text-[18px] ">{element.origin}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Destination </p>
                                                        <p className=" pt-2 font-bold text-[18px] ">{element.destination}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">User Name</p>
                                                        <p className=" pt-2 font-bold text-[18px] ">{element.user_name}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">User Mobile</p>
                                                        <p className=" pt-2 font-bold text-[18px] ">{element.user_mobile}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">User Email</p>
                                                        <p className=" pt-2 font-bold text-[18px] ">{element.user_email}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2 ml-4  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Total Tickets</p>
                                                        <p className=" pt-2 font-bold text-[18px] ml-8 ">{element.total_tickets}</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default ViewTickets;