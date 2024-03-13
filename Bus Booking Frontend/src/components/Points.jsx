import { LuArrowDownFromLine } from "react-icons/lu";
import { LuArrowRightFromLine } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";
import Form from "../pages/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Points=( props )=> {

  const { clickedButtons, price, name } = props;
  const [boarding, setBoarding] = useState('');
  const [dropping, setDropping] = useState('');
  const [error,setError] = useState('');
  let navigate=useNavigate();

  const selectedButtons = Object.entries(clickedButtons)
    .filter(([buttonName, isClicked]) => isClicked)
    .map(([buttonName]) => buttonName);

  const bus=name;
  const bus_price=parseInt(price);
  const total=parseInt(selectedButtons.length);
  const final_price=bus_price*total;

  

  const proceed=()=>{
    if(total==0){
        setError("Please select your seat");
    }
    else if(boarding.length<2 || dropping.length<2 || boarding==dropping){
      setError("Enter Valid Details");
    }
    else{
      navigate(`/form?total=${total}&price=${final_price}&bus_name=${bus}&origin=${props.origin}&destination=${props.destination}`);
    }
}

  return (
    <>
      <div className="h-[344px] w-[390px] bg-[#9aa9ba] rounded-t-[60px] mt-5 ml-5">
          <br /><br />
          <div className="flex h-[43px] w-[330px] bg-white ml-[30px] rounded-md">
            <div>
              <LuArrowRightFromLine className="w-[24px] h-[24px] ml-7 mt-3 " />
            </div>
              <input type="text" value={boarding} onChange={(e) => setBoarding(e.target.value)} placeholder="    Enter Boarding Point    " className="ml-3" />
          </div>

          <br />
          <div className="flex h-[43px] w-[330px] bg-white ml-[30px] rounded-md">
            <div>
            <LuArrowDownFromLine className="w-[24px] h-[24px] ml-7 mt-3 " />
            </div>   
            <input type="text"  value={dropping} onChange={(e) => setDropping(e.target.value)} placeholder="    Enter Dropping Point    " className="ml-3" />           
          </div>

          <br /> <br />
          <div className="ml-[30px] w-[330px] flex space-x-[140px] font-normal">
            <div>
                <p>Seat Numbers <br /> 
                <div className="clicked-button font-bold">
                {selectedButtons.length > 0 && (
                  <div>
                    {selectedButtons.join(', ')}
                  </div>
                    )}
              </div>
              </p>
                
            </div>
            <div>
                <p>Total Fare <br /> </p>
                 <div className="flex font-bold"> 
                    <div className="mt-1"><FaRupeeSign /></div>
                    <div>{final_price}</div>
                 </div>
            </div>
          </div>

          <br />
          <button onClick={proceed} className="bg-[#FFCB00] rounded-md h-[40px] w-[300px] ml-10 font-normal text-[white]">Proceed</button>
          <h3 className="font-semibold text-[15px] ml-[125px]">{error}</h3>
      </div>
    </>
  )
}

export default Points;