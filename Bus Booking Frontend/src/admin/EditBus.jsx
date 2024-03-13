import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditBus = () => {
    const { id } = useParams();
    const [bus, setBus] = useState({
        bus_id: '',
        bus_name: '',
        duration: '',
        start_time: '',
        end_time: '',
        bus_type: '',
        origin: '',
        destination: '',
        boarding_point: '',
        dropping_point: '',
        price: '',
        rating: ''
        
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9000/bus/${id}`).then((posRes) => {
            const { data } = posRes;
            setBus(data);
        }, (errRes) => {
            console.log(errRes);
        })
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        //setBus({ ...bus, [name]: value });
        setBus((prevBus) => ({ ...prevBus, [name]: value }));
    };

    const update = () => {
        axios.post("http://localhost:9000/save", {
            ...bus,
            bus_id: parseInt(bus.bus_id),
            bus_name:bus.bus_name,
            duration:bus.duration,
            start_time:bus.start_time,
            end_time:bus.end_time,
            bus_type:bus.bus_type,
            origin:bus.origin,
            destination:bus.destination,
            boarding_point:bus.boarding_point,
            dropping_point:bus.dropping_point,
            price:parseInt(bus.price),
            rating:bus.rating
        })
            .then((posRes) => {
                navigate("/viewbus");
            }, (errRes) => {
                console.log(errRes);
            })
    }

    const home=()=>{
        navigate("/home");
    }

    return (
        <>
            <div className="2xl:h-[900px] bg-gradient-to-t from-[#fff1eb] from-0% to-[#ace0f9] to-100%" >
                <div className=" 2xl:pt-5 " >
                    <div className=" 2xl:w-[900px] 2xl:h-[60px]  2xl:ml-[40.5%] bg-[#7489a2] border-[#072448] border-l-[5px] rounded-l-[25px] " >
                        <h1 className=" text-[26px]  pt-2.5 2xl:ml-[6%] font-bold text-[#393939]  ">Update Bus Details</h1>
                    </div>
                    <div className=" flex 2xl:gap-8 2xl:ml-[45%] mt-2 " >
                        <button onClick={home} className=" hover:bg-gradient-to-t from-[#f5f7fa] from-0% to-[#c3cfe2] to-100% hover:text-black xxs:w-[50px] xxs:h-[18px] xxs:text-[9px]  xxs:mt-[13px]  xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6   xl:w-[80px] xl:h-[25px] xl:text-[15px]  xl:mt-5  2xl:w-[108px] 2xl:h-[35px] 2xl:text-[18px] shadow-lg  bg-[#FFCB00] text-white font-semibold  text-center rounded-[20px] border-[#FFCB00] border-" >Home</button>
                    </div>
                </div>
                <div className="  flex flex-col gap-4 mt-[3%]  items-center  text-center " >
                    <div className="flex  gap-5" >
                    <input type="number" name="bus_id" value={bus.bus_id} onChange={handleChange} placeholder="Enter Bus Id" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                    <input type="text" name="bus_name" value={bus.bus_name} onChange={handleChange} placeholder="Enter Bus Name" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                    <input type="text" name="duration" value={bus.duration} onChange={handleChange} placeholder="Enter Bus Duration" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />
                    </div>
                    <div className="flex  gap-5">
                    <input type="text" name="start_time" value={bus.start_time} onChange={handleChange} placeholder="Enter Bus Start Time" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                    <input type="text" name="end_time" value={bus.end_time} onChange={handleChange} placeholder="Enter Bus Ending Time" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                    <input type="text" name="bus_type" value={bus.bus_type} onChange={handleChange} placeholder="Enter Bus Type" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />
                    </div>
                    <div className="flex  gap-5 ">
                    <input type="text" name="origin" value={bus.origin} onChange={handleChange} placeholder="Enter Bus Origin" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                    <input type="text" name="destination" value={bus.destination} onChange={handleChange} placeholder="Enter Bus Destination" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                    <input type="text" name="boarding_point" value={bus.boarding_point} onChange={handleChange} placeholder="Enter Bus Boarding Point" className=" w-[230px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />
                    </div>
                    <div className="flex  gap-5">
                    <input type="text" name="dropping_point" value={bus.dropping_point}onChange={handleChange} placeholder="Enter Bus Dropping Point" className=" w-[230px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                    <input type="number" name="price" value={bus.price} onChange={handleChange} placeholder="Enter Bus Ticker Price" className=" w-[200px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />

                    <input type="number" name="rating" value={bus.rating} onChange={handleChange} placeholder="Enter Bus Rating" className=" w-[170px] h-[40px] border-[#607ba4] border-2 rounded-[5px] p-4" required />
                    </div>
                    <button onClick={update} className=" w-[300px] h-[45px] mt-6 ml-[-6%] text-[#FFF] text-[22px] font-semibold bg-[#FFCB00]  rounded-[20px]"  >Update</button>
                </div>
            </div>

        </>
    );
};

export default EditBus;