import Ticket from "../components/Ticket";
import { useLocation } from "react-router-dom";


const TicketsPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const ticket_id = params.get('id');
    return (
        <>
            <header className='flex xxs:hidden xs:hidden sm:hidden md:block lg:block xl:block 2xl:block ' >
                <div className="w-[50px] h-[40px] bg-[url('./assets/Images/iconbus.png')]  bg-no-repeat bg-cover ml-3 md:w-[35px] md:h-[35px] md:mt-1 lg:w-[40px] lg:h-[40px] lg:mt-1  xl:w-[50px] xl:h-[50px] xl:mt-2  2xl:w-[45px] 2xl:h-[45px] 2xl:mt-2 2xl:ml-5 " ></div>
                <nav className="flex gap-14 ml-[70%] mt-3 text-[13px] font-semibold md:gap-10 md:ml-[73%] md:mt-[-3.5%] md:text-[10px] lg:ga-12 lg:ml-[75%] lg:mt-[-3.4%] lg:text-[12px] xl:gap-14 xl:ml-[78%] xl:mt-[-2%] xl:text-[15px] 2xl:gap-16 2xl:ml-[78%] 2xl:mt-[-1.6%] 2xl:text-[17px] " >
                    <a href="http://localhost:5173/homepage">Home</a>
                    <a href="http://localhost:5173/homepage">Tickets</a>
                    <a href="http://localhost:5173/homepage">Profile</a>
                </nav>
            </header>
            <div className=' xxs:w-[320px] xxs:h-[250px] xxs:m xxs:mt-[-4%] xxs:rounded-b-[50px] xxs:z-1  xs:w-[380px] xs:h-[250px] xs:rounded-b-[40px] sm:w-[425px] sm:h-[260px] sm:rounded-b-[50px] md:w-[760px] md:h-[40px] md:ml-1 md:mt-3 lg:w-[1008px] lg:h-[40px] lg:ml-2 lg:mt-3 xl:w-[1422px] xl:h-[43px] xl:ml-2 xl:mt-1  2xl:w-[1515px] 2xl:h-[60px] 2xl:ml-3 2xl:mt-1 bg-[#939FAB] rounded-b-[70px] ' ></div>
            <div>
                <Ticket id={ticket_id} />
            </div>
        </>
    )
}
export default TicketsPage;
