import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const ViewBus=()=>{

    const navigate=useNavigate(); 

    const [arr,setArr]=useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:9000/allBus").then(
            (posRes)=>{
                const {data}=posRes;
                setArr(data);
            },(errRes)=>{
                console.log(errRes);
            }
        )
    },[]);

    const delete_bus=(id)=>{
        axios.delete(`http://localhost:9000/delete/${id}`).then(
            (posRes)=>{
                console.log(posRes);
            },(errRes)=>{
                console.log(errRes);
            }
        )
    }

    const edit_bus=(id)=>{
        navigate(`/editbus/${id}`)
    }

    const home=()=>{
        navigate("/home");
    }
    /* background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%); */
    return(
        <>
            <div className="2xl:h-[900px] bg-gradient-to-t from-[#fff1eb] from-0% to-[#ace0f9] to-100%" >
                <div className=" 2xl:pt-8 " >
                    <div className=" 2xl:w-[600px] 2xl:h-[60px] 2xl:ml-[30%]  rounded-l-[20px] rounded-r-[20px] bg-[#7489a2] border-[#072448] " >
                        <h1 className="text-[26px]  pt-2.5 font-bold text-[#fdfbfb] text-center  " >Bus Details</h1>
                    </div>
                    <div className=" flex 2xl:gap-8 2xl:ml-[45%] mt-2 " >
                        <button onClick={home} className=" hover:bg-gradient-to-t from-[#f5f7fa] from-0% to-[#c3cfe2] to-100% hover:text-black xxs:w-[50px] xxs:h-[18px] xxs:text-[9px]  xxs:mt-[13px]  xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6   xl:w-[80px] xl:h-[25px] xl:text-[15px]  xl:mt-5  2xl:w-[108px] 2xl:h-[35px] 2xl:text-[18px] shadow-lg  bg-[#FFCB00] text-white font-semibold  text-center rounded-[20px] border-[#FFCB00] border-" >Home</button>
                    </div>
                </div>
                <div className=" mt-[2%] " >
                    {
                        arr.map((element,index)=>{
                            return(
                                <>
                                    <div className=" flex ml-[-3%] " >
                                        <div className=" mt-[-1.5%] " >
                                            <div className="  md:w-[1450px] md:h-[80px] md:ml-[6%] md:mt-10 bg-[#A9B9CA] rounded-[10px] border-l-[6px] border-r-[6px] border-[#1e2f43] key={index} " >
                                                <div className=" flex gap-9 ml-4 " >
                                                    <div className=" flex flex-col pt-2.5 pl-3  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c] " >Bus No</p>
                                                        <p className=" pt-3 font-bold text-[18px] " >{element.bus_id}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Bus Name</p>
                                                        <p className=" pt-3 font-bold text-[18px]  ">{element.bus_name}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Bus Type</p>
                                                        <p className=" pt-3 font-bold text-[18px]  ">{element.bus_type}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Duration</p>
                                                        <p className=" pt-3 font-bold text-[18px] ">{element.duration}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Starting Time</p>
                                                        <p className=" pt-3 font-bold text-[18px] ">{element.start_time}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Ending Time</p>
                                                        <p className=" pt-3 font-bold text-[18px] ">{element.end_time}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Origin</p>
                                                        <p className=" pt-3 font-bold text-[18px] ">{element.origin}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Destination</p>
                                                        <p className=" pt-3 font-bold text-[18px] ">{element.destination}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Boarding Point</p>
                                                        <p className=" pt-3 font-bold text-[18px] ">{element.boarding_point}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Dropping Point</p>
                                                        <p className=" pt-3 font-bold text-[18px] ">{element.dropping_point}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Price</p>
                                                        <p className=" pt-3 font-bold text-[18px] ">{element.price}</p>
                                                    </div>
                                                    <div className=" flex flex-col pt-2.5  " >
                                                        <p className=" text-[14px] font-semibold text-[#615e6c]  ">Rating</p>
                                                        <p className=" pt-3 font-bold text-[18px] ">{element.rating}</p>
                                                    </div>
                                                    <div className=" flex gap-6 mt-4 ml-2 " >
                                                        <FiEdit2 onClick={()=>edit_bus(element.bus_id)} className=" mt-4 " />
                                                        <RiDeleteBin6Line  onClick={()=>delete_bus(element.bus_id)} className=" mt-4 "  />
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
export default ViewBus;





