// import { TbBus } from "react-icons/tb";
import { TbArrowRightCircle } from "react-icons/tb";
import { CgArrowLongLeftC } from "react-icons/cg";
import { RiBusFill } from "react-icons/ri";
import { FaBarcode } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Ticket = (props) => { 

    const id=props.id;

    const [array, setArray] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:9090/ticket/${id}`).then(
            (posRes) => {
                const { data } = posRes;
                setArray(data);
                console.log(array);
            }, (errRes) => {
                console.log(errRes);
            }
        )
    }, [id]);

    return (
        <>  
            <div className=" xxs:hidden xs:hidden sm:hidden md:block lg:block xl:block 2xl:block  " >
                <div className=" 2xl:ml-[10%] " >
                    <h1 className="font-bold mt-5 text-3xl ml-[450px]">Booking Success ...</h1>
                    <div className=" md:w-[600px] md:h-[130px] md:ml-[10%] md:mt-10  lg:w-[650px] lg:h-[140px] xl:w-[750px] xl:h-[170px] 2xl:w-[900px] 2xl:h-[195px] bg-[url('./assets/images/subtract.png')] flex  bg-no-repeat bg-cover object-contain  " >
                        <div className=" md:w-[280px] md:h-[130px] lg:w-[300px] lg:h-[140px] xl:w-[350px]  xl:h-[165px] 2xl:w-[410px] 2xl:h-[195px]   bg-[#8493A4] rounded-l-[20px] " >
                            <div className="flex md:gap-4 md:ml-3.5 md:pt-7 lg:pt-9 lg:ml-5 xl:ml-6 2xl:gap-5 " >
                                
                                <div className=" flex flex-col " >
                                    <h5 className=" md:text-[14px] lg:text-[15px] xl:text-[19px] 2xl:text-[24px]  font-semibold " >{array.origin}</h5>
                                    <p className=" md:text-[10px] xl:text-[12px] 2xl:text-[15px] font-thin " >9:00 PM</p>
                                    <p className=" md:text-[9px] xl:text-[10px] 2xl:text-[13px] font-thin  " ></p>
                                </div>
                                <span className=" md:ml-[-3%] md:mt-[-1.5%] xl:mt-[2px] " >---</span><div className=" md:w-[25px] md:h-[25px] xl:w-[28px] xl:h-[28px] md:mt-[-2px] md:ml-[-3%] 2xl:w-[32px] 2xl:h-[32px] " ><RiBusFill className=" 2xl:w-[26px] 2xl:h-[26px] " /></div><span className=" md:ml-[-3%] md:mt-[-1.5%] xl:mt-[2px] " >---</span>
                                <div className=" flex flex-col md:ml-[-4%] " >
                                    <h5 className=" md:text-[14px] lg:text-[15px] xl:text-[19px] 2xl:text-[24px] font-semibold " >{array.destination}</h5>
                                    <p className=" md:text-[10px] xl:text-[12px] 2xl:text-[15px] font-thin " >5:00 AM</p>
                                    <p className=" md:text-[9px] xl:text-[10px] 2xl:text-[13px] font-thin " ></p>
                                </div>
                            </div>
                            <div className="mt-5 ml-[100px] font-semibold">
                                <h1>Reference ID : {id}</h1>
                            </div>
                        </div>
                        <div className=" md:mt-6 md:ml-2 lg:ml-3  xl:ml-4 xl:mt-8 2xl:ml-5 " >
                            <div className=" flex   gap-1 lg:gap-2 xl:gap-3 2xl:gap-5 " >
                                <TbArrowRightCircle className=" 2xl:w-[26px] 2xl:h-[26px] " />
                                <div className="flex flex-col" >
                                    <p className=" md:text-[8px] 2xl:text-[14px] md:font-semibold" >KPHB</p>
                                    <p className=" md:text-[8px] 2xl:text-[11px] " ></p>
                                </div>
                            </div>
                            <div className=" flex  gap-1 lg:gap-2  xl:gap-3 2xl:gap-5 " >
                                <CgArrowLongLeftC className=" 2xl:w-[26px] 2xl:h-[26px] " />
                                <div className="flex flex-col">
                                    <p className=" md:text-[8px] 2xl:text-[14px] md:font-semibold " >Silk Board</p>
                                    <p className=" md:text-[8px] 2xl:text-[11px] " ></p>
                                </div>
                            </div>
                            <div className=" flex  mt-1 gap-1 lg:gap-2 xl:gap-3 2xl:gap-5 " >
                                <RiBusFill className=" 2xl:w-[26px] 2xl:h-[26px] " />
                                <p className=" md:text-[8px] md:mt-[3px] 2xl:text-[14px] font-semibold  " >{array.bus_name}</p>
                            </div>
                            <h6 className=" md:text-[10px] mt-1  xl:mt-4 xl:text-[14px] 2xl:text-[16px] " > <span>{array.total_tickets}</span> Seat(s) </h6>
                        </div>
                        <div className="  " ></div>
                        <div className=" ml-[15%] mt-[4%] 2xl:ml-[12%] " >
                            <FaBarcode className=" md:w-[120px] md:h-[80px] xl:w-[160px] xl:h-[100px] 2xl:w-[180px] 2xl:h-[110px] " />
                        </div>

                    </div>
                </div>
            </div>
            

            <div className="  xxs:block xs:block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden bg-[#1b3753] bg-cover " >
                

            </div>


        </>
    )
}
export default Ticket;
