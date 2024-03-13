import Points from "./Points";
import { useState } from "react";

 const SeatSelection = (props) => {

    const seatStyle = {
        backgroundImage: 'url("src/assets/images/SeatsLayout.png")',
        backgroundSize: 'cover', // You can customize other background properties here
        width: '', // Set width as per your requirement
        height: '', // Set height as per your requirement
      };

      const lowersleepStyle = {
        backgroundImage: 'url("src/assets/images/lowerdeck.png")',
        backgroundSize: 'cover', // You can customize other background properties here
        width: '', // Set width as per your requirement
        height: '', // Set height as per your requirement
      };

      const uppersleepStyle = {
        backgroundImage: 'url("src/assets/images/upperdeck.png")',
        backgroundSize: 'cover', // You can customize other background properties here
        width: '', // Set width as per your requirement
        height: '', // Set height as per your requirement
      };

      const [clickedButtons, setClickedButtons] = useState({
        3: false,
        5: false,
        10: false,
      });
    
      
      const handleButtonClick = (buttonName) => {
        
        setClickedButtons((prevClickedButtons) => ({
          ...prevClickedButtons,
          [buttonName]: !prevClickedButtons[buttonName],
        }));
      };
    
    
    const bus_type=props.bus_type;
    const bus_price=props.price;
    const bus_name=props.bus_name;


    
    if(bus_type=="seater"){
        
        return ( 
            
            <div className="w-[1000px] h-[450px] shadow-lg  m-4 ml-20" >
                <div className="flex justify-first  gap-20 m-4 ml-20 mt-10" >
                <div className="flex gap-3 " >
                        <div className="w-[33px] h-[26px] rounded-[8px]  "><img src="src\assets\images\seaticon.png" alt="i" /></div>
                        <h3 className="" >Booked</h3>
                    </div>
                    <div className="flex gap-3 " >
                        <div className="w-[33px] h-[26px] rounded-[8px]  "> <img src="src\assets\images\sleepicon.png" alt="i" /></div>
                        <h3 className="" >Booked</h3>
                    </div>
                    <div className="flex gap-3" >
                        <div className="w-[33px] h-[26px] bg-[#DAD9DB] rounded-[8px]" />
                        <h3 className="" >Available</h3>
                    </div>
                    <div className="flex gap-3" >
                        <div className="w-[33px] h-[26px] bg-[#F8AA4B] rounded-[8px]" />
                        <h3 className="" >Your Seat</h3>
                    </div>
                    
    
                </div>
                <div className="flex gap-5 ml-5" >
                    <div className="shadow-lg w-[250.88px] h-[366.63px] bg-auto bg-no-repeat bg-center style rounded-[14px] pt-12" style={seatStyle}>
                        
                        <button
                            onClick={() => handleButtonClick('3')}
                            className={`ml-[152px] mt-[22px] w-[33px] h-[30px] rounded-[8px] ${clickedButtons[3] ? 'bg-[#F8AA4B]' : 'bg-[#DAD9DB]'}`}
                        ></button> <br />

                        <button
                            onClick={() => handleButtonClick('5')}
                            className={`ml-[25px] mt-[3px] w-[33px] h-[30px] rounded-[8px] ${clickedButtons[5] ? 'bg-[#F8AA4B]' : 'bg-[#DAD9DB]'}`}
                        ></button> <br />
                            
                        <button
                            onClick={() => handleButtonClick('10')}
                            className={`ml-[150px] w-[33px] h-[30px] rounded-[8px] ${clickedButtons[10] ? 'bg-[#F8AA4B]' : 'bg-[#DAD9DB]'}`}
                        ></button> 
                    </div>
    
    
                    <div className="shadow-lg w-[252.88px] h-[366.63px] bg-auto bg-no-repeat bg-center style rounded-[14px] pt-12" style={uppersleepStyle}>
                    
                    </div>
                    <div>
                        <Points clickedButtons={clickedButtons} price={bus_price} name={bus_name} origin={props.origin} destination={props.destination}/>
                    </div>
                    
                </div>
                
    
            </div>
            
        )

    } 
    else{
        return ( 
            <div className="w-[1000px] h-[430px] shadow-lg  m-4 ml-20" >
                <div className="flex justify-first  gap-20 m-4 ml-20 mt-10 " >
                    <div className="flex gap-3 " >
                        <div className="w-[33px] h-[26px] rounded-[8px]  "> <img src="src\assets\images\sleepicon.png" alt="i" /></div>
                        <h3 className="" >Booked</h3>
                    </div>
                    <div className="flex gap-3" >
                        <div className="w-[33px] h-[26px] bg-[#DAD9DB] rounded-[8px]" />
                        <h3 className="" >Available</h3>
                    </div>
                    <div className="flex gap-3" >
                        <div className="w-[33px] h-[26px] bg-[#F8AA4B] rounded-[8px]" />
                        <h3 className="" >Your Seat</h3>
                    </div>

                </div>
                <div className="flex gap-5 ml-5" >
                    <div className="shadow-lg w-[250.88px] h-[366.63px] bg-auto bg-no-repeat bg-center style rounded-[14px] pt-12" style={lowersleepStyle} >
                        <button
                            onClick={() => handleButtonClick('1')}
                            className={`ml-[29px] mt-[-10px] w-[30px] h-[83px] rounded-[8px] ${clickedButtons[1] ? 'bg-[#F8AA4B]' : 'bg-[#DAD9DB]'}`}
                        ></button>

                        <button
                            onClick={() => handleButtonClick('2')}
                            className={`ml-[10px] mt-[-10px] w-[30px] h-[83px] rounded-[8px] ${clickedButtons[2] ? 'bg-[#F8AA4B]' : 'bg-[#DAD9DB]'}`}
                        ></button>
                    </div>


                    <div className="shadow-lg w-[252.88px] h-[366.63px] bg-auto bg-no-repeat bg-center style rounded-[14px] pt-12" style={uppersleepStyle}>
                    
                    </div>
                    <div>
                        <Points clickedButtons={clickedButtons} price={bus_price} name={bus_name} origin={props.origin} destination={props.destination}/>
                    </div>
        
                </div>

            </div>
        )
    }
}
export default SeatSelection;
