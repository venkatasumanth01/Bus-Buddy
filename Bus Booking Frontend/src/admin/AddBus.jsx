import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";

const AddBus=()=>{

    const navigate=useNavigate();

    const bus_id=useRef(null);
    const bus_name=useRef(null);
    const duration=useRef(null);
    const start_time=useRef(null);
    const end_time=useRef(null);
    const bus_type=useRef(null);
    const origin=useRef(null);
    const destination=useRef(null);
    const boarding_point=useRef(null);
    const dropping_point=useRef(null);
    const price=useRef(null);
    const rating=useRef(null);

    const add_bus=()=>{
        axios.post("http://localhost:9000/save",{
            "bus_id":parseInt(bus_id.current.value),
            "bus_name":bus_name.current.value,
            "duration":duration.current.value,
            "start_time":start_time.current.value,
            "end_time":end_time.current.value,
            "bus_type":bus_type.current.value,
            "origin":origin.current.value,
            "destination":destination.current.value,
            "boarding_point":boarding_point.current.value,
            "dropping_point":dropping_point.current.value,
            "price":parseInt(price.current.value),
            "rating":rating.current.value
        }).then((posRes)=>{
            navigate("/viewBus");
        },(errRes)=>{
            console.log(errRes);
        });
    }
    /* background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */

    const home=()=>{
        navigate("/home");
    }
    return(
        <>
        
            <div className=" 2xl:h-[900px] bg-gradient-to-t from-[#f5f7fa] from-0% to-[#c3cfe2] to-100% " >
                <div className=" 2xl:pt-10" >
                    <div className=" 2xl:w-[820px] 2xl:h-[60px]  2xl:ml-2.5 bg-[#7489a2] border-[#072448] border-r-[5px] rounded-r-[25px] " >
                        <h1 className=" text-[26px]  pt-2.5 2xl:ml-[68%] font-bold text-[#393939]  ">Enter Bus Details</h1>
                    </div>
                    <div className=" flex 2xl:gap-8 2xl:ml-[45%] mt-2 " >
                        <button onClick={home} className=" hover:bg-gradient-to-t from-[#f5f7fa] from-0% to-[#c3cfe2] to-100% hover:text-black xxs:w-[50px] xxs:h-[18px] xxs:text-[9px]  xxs:mt-[13px]  xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6   xl:w-[80px] xl:h-[25px] xl:text-[15px]  xl:mt-5  2xl:w-[108px] 2xl:h-[35px] 2xl:text-[18px] shadow-lg  bg-[#FFCB00] text-white font-semibold  text-center rounded-[20px] border-[#FFCB00] border-" >Home</button>
                    </div>

                    <div className="  flex flex-col gap-4 mt-[3%]  items-center  text-center " >
                        <div className="flex  gap-5" >
                        <input type="number" ref={bus_id} placeholder="Enter Bus No" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                        <input type="text" ref={bus_name} placeholder="Enter Bus Name" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                        <input type="text" ref={duration} placeholder="Enter Bus Duration" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />
                        </div>
                        <div className="flex  gap-5">
                        <input type="text" ref={start_time} placeholder="Enter Bus Start Time" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                        <input type="text" ref={end_time} placeholder="Enter Bus Ending Time" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                        <input type="text" ref={bus_type} placeholder="Enter Bus Type" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />
                        </div>
                        <div className="flex  gap-5 ">
                        <input type="text" ref={origin} placeholder="Enter Bus Origin" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                        <input type="text" ref={destination} placeholder="Enter Bus Destination" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                        <input type="text" ref={boarding_point} placeholder="Enter Bus Boarding Point" className=" w-[230px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />
                        </div>
                        <div className="flex  gap-5">
                        <input type="text" ref={dropping_point} placeholder="Enter Bus Dropping Point" className=" w-[230px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                        <input type="number" ref={price} placeholder="Enter Bus Ticker Price" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                        <input type="number" ref={rating} placeholder="Enter Bus Rating" className=" w-[170px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />
                        </div>
                        <button onClick={add_bus} className=" w-[300px] h-[45px] mt-6 ml-[-6%] text-[#FFF] text-[22px] font-semibold bg-[#FFCB00]  rounded-[20px]"  >Add Bus</button>
                    </div>
                </div>
            </div>    
        </>
    )
}
export default  AddBus;