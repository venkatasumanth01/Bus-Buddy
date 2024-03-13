import { useLocation } from "react-router-dom";
import AdSection from "../components/AdSection";
import React, { useEffect, useState } from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 const Form = () => {

    const navigate=useNavigate();
    const [Error,setError]=useState('');

    const [uniqueId, setUniqueId] = useState('');
    useEffect(() => {
        // Generate a unique 6-digit ID
        const id = Math.floor(100000 + Math.random() * 900000);
        setUniqueId(id.toString());
    
        // Cleanup function (optional) - clear the ID when the component is unmounted
        return () => {
          setUniqueId('');
        };
      }, []);

      const name=useRef(null);
      const mobile=useRef(null);
      const email=useRef(null);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const total = params.get('total');
    const final_price = params.get('price');
    const bus=params.get('bus_name');
    const origin=params.get('origin');
    const destination=params.get('destination'); 

    

    
    const [isProcessing, setProcessing] = useState(false);

    const ticket=()=>{

        if(name.current.value == "" ){
            setError("Enter Name");
        }
        else if(name.current.value.length < 3 ){
            setError("Enter Valid Name");
        }
        else if(mobile.current.value.length == "" ){
            setError("Enter Mobile");
        }
        else if(parseInt(mobile.current.value) < 11111111 ){
            setError("Enter Valid Mobile");
        }
        else if(mobile.current.value.length < 3 ){
            setError("Enter Valid Mobile");
        }
        else if(email.current.value.length == "" ){
            setError("Enter Email");
        }
        else if(email.current.value.length < 8 ){
            setError("Enter Valid Email");
        }
        else if(name.current.value.length<2 || mobile.current.value.length<8 || email.current.value.length<8 || name.current.value==email.current.value){
            setError("Enter Valid Details");
        }
        else{
            axios.post("http://localhost:9090/save",{
            "ticket_id": uniqueId,
            "bus_name": bus,
            "origin": origin,
            "destination": destination,
            "user_name": name.current.value,
            "user_mobile": mobile.current.value,
            "user_email": email.current.value,
            "total_tickets": total
            }).then((posRes)=>{
                navigate(`/ticketspage?id=${uniqueId}`);
            },(errRes)=>{
                console.log(errRes);
                setError("Booking Failed");
            }); 
        }  
        setProcessing(false);     
    }

    const handleClick = () => {
        // Set the button state to processing
        setProcessing(true);
    
        // Simulate a delay for 2 seconds before executing the ticket function
        setTimeout(() => {
          ticket();
        }, 2000);
      };

    return (
        <>
            <div className="">
               
                <div className="  xl:w-auto h-[55px] bg-[#f6f6f6] rounded-b-[60px] 2xl:w-auto lg:w-auto md:w-auto sm:w-auto xs:h-[40px]   " >
                    <div className="flex justify-center bg-[url('./assets/Images/bgblue.jpg')] opacity-90 bg-no-repeat bg-cover" >
                        <div className="m-20 bg-[#DADEE4] h-[630px] xs:h-[540px]  " >
                            <div className=" bg-[#072448] text-white  h-[75px] xs:w-[380px] xs:h-[47px]  sm:w-[400px] md:w-[460px] lg:w-[550px]  xl:w-[580px] 2xl:w-[650px] flex flex-col justify-center items-center " >
                                <h1 className="text-[15px] font-medium xs:text-[20px] ml-[-30px]" >{bus}</h1>
                            </div>
                            <p className="ml-4 mt-2"><span className="text-[red] font-semibold">NOTE : </span>Children aged 4 and above need a separate ticket.</p>

                            <div className="flex ml-[200px] mt-5 font-bold text-[20px]">
                                <h1>{origin}</h1> <span><IoIosArrowDropright className='w-[20px] h-[20px] text-[#0d0404] mt-[5px] ml-1 mr-1 ' /></span><h1>{destination}</h1>
                            </div>

                            <div className="mt-3 m-5">
                                <h4 className="xs:text-[20px] ml-4 mt-2 font-bold " >Traveller Information</h4>

                                <div className="ml-5 mt-2">      
                                    <h1>Booking ID : {uniqueId}</h1>   
                                    <h5 className="mb-1 font-semibold xs:text-[14px] mt-4" >Contact Details</h5>
                                    <input type="text"  ref={name} placeholder="Name" id="age" className=" mb-2 xs:w-[220px] sm:w-[120px] md:w-[260px] lg:w-[300px] xs:h-[30px] h-[40px] bg-[#ffffff] rounded-[5px] p-4 " required /><br />
                                    <input type="number" ref={mobile} placeholder="Mobile" id="age" className=" mb-2 xs:w-[220px] sm:w-[120px] md:w-[260px] lg:w-[300px] xs:h-[30px] h-[40px] bg-[#ffffff] rounded-[5px] p-4 " required /><br />
                                    <input type="email" ref={email} id="email" placeholder="Email" className=" xs:w-[220px] sm:w-[120px] md:w-[260px] lg:w-[300px] xs:h-[30px] h-[40px] bg-[#ffffff] rounded-[5px] p-4 " required />
                                    <div className="flex text-center xs:w-[240px] sm:w-[180px] md:w-[250px] md:mt-6 md:ml-[13%] lg:w-[400px]  xs:mt-6 xs:ml-10  lg:mt-5 lg:ml-5 xl:mt-4 2xl:mt-7 2xl:ml-[11%]  h-[40px]  ml-[15%]">
                                        <h1 className="mt-1 ml-5 font-bold">Total Selected Seats = {total}</h1>
                                        <h1 className="mt-1 ml-5 font-bold">Total Price = {final_price}</h1>
                                    </div>
                                    {/* <button onClick={ticket} className=" bg-[#FFCB00] rounded-[15px] text-white text-[18px] font-medium text-center xs:w-[240px] sm:w-[180px] md:w-[250px] md:mt-6 md:ml-[13%] lg:w-[400px]  xs:mt-2 xs:ml-10  lg:mt-2 lg:ml-5 xl:mt-2 2xl:mt-2 2xl:ml-[11%]  h-[40px]  ml-[15%] " >Proceed to Book</button> */}
                                    <button
                                        onClick={handleClick}
                                        className={`bg-[#FFCB00] rounded-[15px] text-white text-[18px] font-medium text-center xs:w-[240px] sm:w-[180px] md:w-[250px] md:mt-6 md:ml-[13%] lg:w-[400px] xs:mt-2 xs:ml-10 lg:mt-2 lg:ml-5 xl:mt-2 2xl:mt-2 2xl:ml-[11%] h-[40px] ml-[15%]`}
                                        disabled={isProcessing} // Disable the button while processing
                                        >
                                        {isProcessing ? (
                                            // Render a processing spin icon (adjust the icon or loader as needed)
                                            <div className="spinner">Processing...</div>
                                        ) : (
                                            // Render the "Proceed to Book" text
                                            'Proceed to Book'
                                        )}
                                    </button>
                                    
                                    <h1 className="font-bold ml-[200px] mt-2">{Error}</h1>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Form;
