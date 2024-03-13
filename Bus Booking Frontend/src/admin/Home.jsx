import {useNavigate} from "react-router-dom";
const Home = ()=>{

    const navigate = useNavigate();

        const add_bus=()=>{
            navigate("/addBus");
        }

        const view_bus=()=>{
            navigate("/viewBus");
        }

        const view_tickets=()=>{
            navigate("/viewTickets");
        }


           


    return(
        <>
            <div className=" " >
                <div className=" 2xl:w-[820px] 2xl:h-[60px] 2xl:mt-10 2xl:ml-2.5 bg-[#7489a2] border-[#072448] border-r-[5px] rounded-r-[25px] " >
                    <h1 className=" text-[26px]  pt-2.5 2xl:ml-[68%] font-bold text-[#393939]  ">Admin Dashboard</h1>
                </div>
                <div className=" flex 2xl:gap-8 2xl:ml-[35%] mt-10 " >
                    <button onClick={add_bus} className=" hover:bg-gradient-to-t from-[#f5f7fa] from-0% to-[#c3cfe2] to-100% hover:text-black xxs:w-[50px] xxs:h-[18px] xxs:text-[9px]  xxs:mt-[13px]  xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6   xl:w-[80px] xl:h-[25px] xl:text-[15px]  xl:mt-5  2xl:w-[108px] 2xl:h-[35px] 2xl:text-[18px] shadow-lg  bg-[#FFCB00] text-white font-semibold  text-center rounded-[20px] border-[#FFCB00] border-" >Add Bus</button>
                    <button onClick={view_bus} className="hover:bg-gradient-to-t from-[#f5f7fa] from-0% to-[#c3cfe2] to-100% hover:text-black xxs:w-[50px] xxs:h-[18px] xxs:text-[9px]  xxs:mt-[13px]  xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6   xl:w-[80px] xl:h-[25px] xl:text-[15px]  xl:mt-5  2xl:w-[108px] 2xl:h-[35px] 2xl:text-[18px] shadow-lg  bg-[#FFCB00] text-white font-semibold text-center rounded-[20px] border-[#FFCB00] border-3" >View Bus</button>
                    <button onClick={view_tickets} className="hover:bg-gradient-to-t from-[#f5f7fa] from-0% to-[#c3cfe2] to-100% hover:text-black xxs:w-[50px] xxs:h-[18px] xxs:text-[9px]  xxs:mt-[13px]  xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6   xl:w-[80px] xl:h-[25px] xl:text-[15px]  xl:mt-5  2xl:w-[120px] 2xl:h-[35px] 2xl:text-[17px] shadow-lg  bg-[#FFCB00] text-white font-semibold text-center rounded-[20px] border-[#FFCB00] border-3" >View Tickets</button>
                </div>
                <div className=" 2xl:w-[500px] 2xl:h-[600px] 2xl:ml-[28%] bg-[url('./assets/Images/admin.jpg')]  bg-no-repeat bg-cover " ></div>
            </div>
        </>
    )
}
export default Home;