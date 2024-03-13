import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signin from "./Signin";

const LandingPage = () => {

  let navigate=useNavigate();

  const signin=()=>{
    navigate("/signin");
  }

  const login=()=>{
    navigate("/login");
  }

  const admin=()=>{
    navigate("/home");
  }

  return (
    <>
      <div className=" " >
        <div className="flex  " >
          <div className="xxs:w-[36px] xxs:h-[36px] xxs:mx-2 xs:w-[37px] xs:h-[37px] xs:mx-3 xs:my-2  sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] lg:ml-5   xl:w-[40px] xl:h-[40px]    mt-1 2xl:w-[50px] 2xl:h-[50px]  bg-[url('./assets/Images/iconbus.png')]  bg-no-repeat bg-cover " ></div>
          <div className="flex gap-5 lg:ml-[80%] xl:ml-[80%] 2xl:ml-[71%] " >
            <button onClick={signin} className=" xxs:w-[50px] xxs:h-[18px] xxs:text-[9px]  xxs:mt-[13px]  xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6   xl:w-[80px] xl:h-[25px] xl:text-[15px]  xl:mt-5  2xl:w-[98px] 2xl:h-[28px] 2xl:text-[17px] shadow-lg  bg-[#FFCB00] text-white  text-center rounded-[20px] border-[#FFCB00] border-1  "  >SignUp</button>
            <button onClick={login} className=" xxs:w-[50px] xxs:h-[18px] xxs:text-[9px]  xxs:mt-[13px]  xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6   xl:w-[80px] xl:h-[25px] xl:text-[15px]  xl:mt-5  2xl:w-[98px] 2xl:h-[28px] 2xl:text-[17px] shadow-lg   bg-[#FFCB00] text-white  text-center rounded-[20px] border-[#FFCB00] border-1 "  >LogIn</button>
            <button onClick={admin} className=" xxs:w-[50px] xxs:h-[18px] xxs:text-[9px]  xxs:mt-[13px]  xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6   xl:w-[80px] xl:h-[25px] xl:text-[15px]  xl:mt-5  2xl:w-[98px] 2xl:h-[28px] 2xl:text-[17px] shadow-lg   bg-[#FFCB00] text-white  text-center rounded-[20px] border-[#FFCB00] border-1 "  >Admin</button>
          </div>
        </div>
        <div className="  md:w-[600px] md:h-[310px] md:mt-[10%] md:ml-[6%] lg:w-[1220px]  2xl:w-[1550px] 2xl:h-[800px] 2xl:ml-[-4%] 2xl:mt-[-2%]  bg-[url('./assets/Images/Landingpage.jpg')]  bg-no-repeat bg-cover " ></div>
        <div className=" xxs:w-[240px] xxs:h-[140px] xxs:mx-11 xxs:my-[70%] xs:w-[240px] xs:h-[148px] xs:mx-12 xs:my-[70%] xxs:bg-[url('./assets/images/bus.png')] xs:bg-[url('./assets/images/bus.png')] md:hidden xl:hidden 2xl:hidden  bg-no-repeat bg-cover " ></div>

      </div>

    </>
  )
}
export default LandingPage;