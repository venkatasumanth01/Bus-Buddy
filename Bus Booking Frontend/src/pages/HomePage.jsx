import { PiArrowsDownUpDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useRef,useState } from "react";
import './HomePage.css';
import React from 'react';
import Form from "./Form";
import { LuCheckCircle } from "react-icons/lu";
import { FaGripLinesVertical } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Carousel from "../components/Carousel";



const HomePage = () => {

    let navigate=useNavigate();

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [error,setError] = useState('');
    const [date,setDate]=useState('');
    


    const busselection=()=>{

        if(origin.includes("bangalore") || origin.includes("benglur") || origin.includes("benguluru") || origin.includes("bang") || origin.includes("BANG") || origin.includes("beng") || origin.includes("BENG")){
            setOrigin("Bengaluru");
        }
        else if(destination.includes("bang") || destination.includes("BANG") || destination.includes("beng") || destination.includes("BENG")){
            setDestination("Bengaluru");
        }


        if(origin.includes("hyd") || origin.includes("HYD")){
            setOrigin("Hyderabad");
        }
        else if(destination.includes("hyd") || destination.includes("HYD")){
            setDestination("Hyderabad");
        }


        if(origin == ""){
            setError("Enter Origin");
        }
        else if(origin.length<3){
            setError("Enter Valid Origin");
        }
        else if(destination == ""){
            setError("Enter Destination");
        }
        else if(destination.length<3){
            setError("Enter Valid Destination");
        }
        else if(date<1){
            setError("Select Date");
        }
        else if(origin.length<2 || destination.length<2 || origin==destination || date<1){
            setError("Enter Valid Details");
        }
        else{
            navigate(`/busselection?origin=${origin}&destination=${destination}`);
        }
    }

    const handleDateChange = (e) => {
        // Validate if the selected date is more than today's date
        const selectedDate = new Date(e.target.value);
        setDate(selectedDate);
        const today = new Date();

        if (selectedDate <= today) {
            setError('Please select a date that is after today.');
        } else {
            setError('');
        }
    };

    const exchange=()=>{
        const temp = origin;
        setOrigin(destination);
        setDestination(origin);
    }


    return (
        <>
            <header className='flex xxs:hidden xs:hidden sm:hidden md:block lg:block xl:block 2xl:block ' >
                <div className="w-[50px] h-[40px] bg-[url('./assets/Images/iconbus.png')]  bg-no-repeat bg-cover ml-3 md:w-[35px] md:h-[35px] md:mt-1 lg:w-[40px] lg:h-[40px] lg:mt-1  xl:w-[50px] xl:h-[50px] xl:mt-2  2xl:w-[45px] 2xl:h-[45px] 2xl:mt-2 2xl:ml-5 " ></div>
                <nav className="flex gap-14 ml-[70%] mt-3 text-[13px] md:gap-10 md:ml-[73%] md:mt-[-3.5%] md:text-[10px] lg:ga-12 lg:ml-[75%] lg:mt-[-3.4%] lg:text-[12px] xl:gap-14 xl:ml-[78%] xl:mt-[-2%] xl:text-[15px] 2xl:gap-16 2xl:ml-[79%] 2xl:mt-[-2%] 2xl:text-[15px] " >
                    <a href="">Home</a>
                    <a href="">Tickets</a>
                    <a href="">Profile</a>
                </nav>
            </header>
            <div className=' xxs:block xs:block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden ' >
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>
                                <li><a>Tickets</a></li>
                                <li><a>Profile</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center  ">
                        <a className="btn btn-ghost text-xl "> <span className=' sm_bus_logo ' >Bus Buddy</span></a>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="xxs:w-[320px] xxs:h-[250px] xxs:m xxs:mt-[-4%] xxs:rounded-b-[50px] xxs:z-1  xs:w-[380px] xs:h-[250px] xs:rounded-b-[40px] sm:w-[425px] sm:h-[260px] sm:rounded-b-[50px] md:w-[766px] md:h-[40px] md:ml-1 md:mt-3 lg:w-[1008px] lg:h-[40px] lg:ml-2 lg:mt-3 xl:w-[1422px] xl:h-[43px] xl:ml-2 xl:mt-1  2xl:w-[1500px] 2xl:h-[50px] 2xl:ml-3 2xl:mt-1 bg-[#324863] rounded-b-[70px]" >
                    <h4 className=" xxs:block xxs:pt-10 xxs:text-[18px] text-[#FFF] text-center  md:hidden lg:hidden xl:hidden 2xl:hidden " >Hey!</h4>
                    <h5 className=" xxs:block  xxs:text-[12px] text-[#FFF] text-center  md:hidden lg:hidden xl:hidden 2xl:hidden " >Where you want go</h5>
                    <div className=" xxs:block xxs:w-[70px] xxs:h-[70px] xxs:ml-[39%] xxs:mt-2 xs:block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden bg-[url('./assets/Images/station.png')]  bg-no-repeat bg-cover  " ></div>
                </div>
                    
                <div className="flex " >
                    <div className="xxs:w-[290px] xxs:h-[230px] xxs:ml-3.5 xxs:mt-[-20%] xxs:z-0 xs:w-[320px] xs:h-[240px] xs:ml-[8%] md:w-[260px] md:h-[190px]  md:mt-[-2.5%] md:ml-5 bg-[#54D2D2]  ml-7 mt-[-2.9%] lg:w-[310px] lg:h-[220px] lg:ml-8 xl:w-[380px] xl:h-[260px] xl:ml-10 xl:mt-1 2xl:w-[700px] 2xl:h-[330px] 2xl:ml-[3%] 2xl:mt-[-2%] 2xl:border-b-[12px]  2xl:rounded-bl-[38px] 2xl:rounded-tr-[38px] 2xl:rounded-tl-[60px] 2xl:rounded-br-[60px]  rounded-bl-[28px] rounded-tr-[28px] rounded-tl-[40px] rounded-br-[40px] border-b-8 shadow-lg  border-[#364E6B] " >
                        <div className="flex flex-col rounded-md gap-3 justify-center items-center xxs:gap-1 xxs:mt-6 md:m-5 md:gap-2.5 lg:mt-5 lg:gap-3.5  xl:m-6 xl:gap-5 2xl:gap-10 2xl:mt-[13%] " >
                            <input required value={origin} onChange={(e) => setOrigin(e.target.value)} type="text" name="Boarding" id="boarding" placeholder="Boading From" className="xxs:w-[240px] xxs:h-[35px] md:w-[200px] md:h-[30px] lg:w-[240px]  lg:h-[38px] xl:w-[300px] xl:h-[47px] xl:text-[16px] 2xl:w-[360px] 2xl:h-[48px] 2xl:text-[18px] 2xl:pl-6 2xl:mt-[-5%] 2xl:rounded-[17px] z-0  w-[280px] h-[35px] bg-[#F3EEFF] text-[#524277] rounded-[5px] pl-3 invalid:border-pink-500 focus:invalid:border-pink-500 text-[12px] z-1  " />
                            <div onClick={exchange} className="xxs:w-[35px] xxs:h-[35px] xxs:ml-[65%] xxs:mt-[-4%]  md:w-[30px] md:h-[30px] md:ml-[65%] md:mt-[-11%] xl:w-[44px] xl:h-[40px] 2xl:w-[45px] 2xl:h-[45px] 2xl:mt-[-12%] 2xl:ml-[67%] w-[40px] h-[40] rounded-[40px] bg-[#072448] z-0    " ><PiArrowsDownUpDuotone className=" text-[#FFFFFF]  w-[25px] h-[25px]  xxs:w-[19px] xxs:h-[19px] xxs:ml-2 md:w-[18px] md:h-[18x] md:ml-[5px] md:mt-[2.5px] xl:w-[25px] xl:h-[25px] xl:m-2 2xl:w-[26px] 2xl:h-[26px] 2xl:m-2.5  m-1.5 " /></div>
                            <input value={destination} onChange={(e) => setDestination(e.target.value)} type="text" name="Boarding" id="boarding" placeholder="Drop At" className=" xxs:w-[240px] xxs:h-[35px] xxs:mt-[-4%] md:w-[200px] md:h-[30px] md:mt-[-9%] lg:w-[240px] lg:h-[38px] xl:w-[300px] xl:h-[47px] xl:text-[16px] 2xl:w-[360px] 2xl:h-[48px] 2xl:text-[18px] 2xl:pl-6 2xl:rounded-[17px] 2xl:mt-[-12%] w-[280px] h-[35px] bg-[#F3EEFF] rounded-[5px] pl-3 invalid:border-pink-500 focus:invalid:border-pink-500 text-[12px] z-1  " />
                            <input onChange={handleDateChange} type="date" id="date" placeholder='Date' required className="  text-[10px]  xxs:w-[130px] xxs:h-[25px] xxs:mt-3 md:w-[90px] md:h-[25px] md:mt-[1%] xl:mt-[-%] xl:w-[120px] xl:h-[30px] xl:text-[14px] 2xl:w-[180px] 2xl:h-[38px] 2xl:text-[18px]  2xl:mt-[-5%] 2xl:pl-5 w-[80px] h-[35px] bg-[#54D2D2] border-[1px] text-[#FFF] rounded-[5px] pl-2 invalid:border-pink-500 focus:invalid:border-pink-500  " />
                            <button onClick={busselection} className="  xxs:w-[160px] xxs:h-[30px] xxs:mt-3 md:w-[150px] md:h-[25px] md:mt-[1.5%] md:text-[14px] lg:w-[160px] lg:h-[32px] lg:text-[15px] xl:w-[200px] xl:h-[40px] xl:text-[18px] xl:mt-[-2%] 2xl:w-[240px] 2xl:h-[38px] 2xl:text-[22px] 2xl:mt-[-4%]  bg-[#FFCB00] rounded-[20px] text-[#FFFFFF] font-medium text-center " >Find Buses</button>
                            <h6 className="font-bold text-[16px] mt-[-8%] ml-[10px] text-[#0e0505] ">{error}</h6>
                        </div>
                    </div>
                    <div className="xxs:hidden md:block  md:w-[420px] md:h-[270px] md:ml-[5%] md:mt-2 lg:block lg:w-[560px] lg:h-[340px] lg:ml-[9%] xl:block xl:w-[850px] xl:h-[540px] xl:ml-[9%] 2xl:block 2xl:w-[1400px] 2xl:h-[550px]   bg-[url('./assets/Images/bus-station.jpg')] fill-[#54D2D2]   bg-no-repeat bg-cover " ></div>
                </div>
                <div className=" xxs:hidden md:block md:w-[700px] md:h-[250px] md:ml-9 md:mt-[16%] lg:block lg:w-[900px] lg:h-[320px] lg:ml-[6%] xl:block xl:w-[1300px] xl:h-[400px] xl:ml-[5%] xl:mt-[10%] 2xl:block 2xl:w-[1200px] 2xl:h-[400px] 2xl:ml-[11%] 2xl:border-l-[20px] 2xl:border-r-[20px] border-[#364E6B] bg-[url('./assets/Images/street.png')]  bg-no-repeat bg-cover object-fill rounded-[40px] box-shadow-lg  border-2 box-border " >
                    <h3 className=" 2xl:mt-[4%] 2xl:ml-[8%] text-[26px] text-[#000000] font-semibold  enjoy " >ENJOY THE APP</h3>
                    <div className="  2xl:w-[350px] 2xl:h-[170px] 2xl:mt-[3%] 2xl:ml-[5%] 2xl:border-l-[10px]  border-[#364E6B] bg-[url('./assets/Images/bg.png')]  bg-no-repeat bg-cover rounded-[30px]  border-3  rating-card " >
                    <div className=" pt-6 pl-6 text-[#FFFF] font-bold " >
                        <div className="flex  gap-2 " >
                            <LuCheckCircle /> 
                            <h4>Quick access</h4>
                        </div>
                        <div className="flex  gap-2  " >
                            <LuCheckCircle />
                            <h4>Superior live tracking</h4>
                        </div>
                        <div className="flex gap-[5%] mt-4 font-medium " >
                            <div>
                                <div className="flex gap-2  " >
                                    <h4>4.5</h4>
                                    <FaStar className=" w-[20px] h-[20px]  " />
                                </div>
                                <h4>Android</h4>
                            </div>
                            <FaGripLinesVertical className=" w-[30px] h-[50px] " />
                            <div>
                                <div className="flex gap-2 " >
                                    <h4>4.4 </h4>
                                    <FaStar className="  w-[20px] h-[20px]  " />
                                </div>
                                <h4>IOS</h4>
                            </div>
                        </div>
                        <div className="   " ></div>
                    </div>  
                    
                </div>
                </div>

                <div className=" 2xl:h-[500px] " >
                    <Carousel />
                </div>
                
                
            </div>
            <footer className="footer footer-center p-10  bg-[#486080] text-[#FFF] rounded-t-[50px] ">
                <aside>
                <div className=" xxs:w-[25px] xxs:h-[25px] md:w-[30px] md:h-[30px]  2xl:w-[50px] 2xl:h-[50px]  bg-[url('./assets/Images/iconbus.png')]  bg-no-repeat bg-cover " ></div>
                    <p className="font-bold xxs:text-[10px] md:text-[10px] 2xl:text-[18px] ">Bus Buddy Industries Pvt Ltd.  </p>
                    <p className="xxs:text-[10px] md:text-[8px] 2xl:text-[16px]" >Providing reliable bus travels</p>
                    <p className=" xxs:text-[6px] md:text-[6.5px] 2xl:text-[15px] 2xl:mt-4 " >Copyright © 2024 - All right reserved</p>
                </aside> 
                <nav>
                    <div className="grid grid-flow-col gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
           

           
        </>
    )
}
export default HomePage;