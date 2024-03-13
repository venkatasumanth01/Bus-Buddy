import AdminBusSection from "./AdminBusSection";
import Home from "./Home";


const AdminPage = () => {
  return (
    <>
      <div>
        <div className="flex" >
          <div className=" xxs:w-[36px] xxs:h-[36px] xxs:mx-2 xs:w-[37px] xs:h-[37px] xs:mx-3 xs:my-2  sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] lg:ml-5   xl:w-[40px] xl:h-[40px]   ml-2 mt-1 2xl:w-[50px] 2xl:h-[50px]  bg-[url('./assets/Images/iconbus.png')]  bg-no-repeat bg-cover " ></div>
          <div className=" flex xxs:ml-[58%] xs:ml-[59%] md:ml-[78%] lg:ml-[81%] xl:ml-[85%] 2xl:ml-[83%] " >
            <button className=" xxs:w-[50px] xxs:h-[18px] xxs:text-[9px] ml-1 xxs:mt-[13px] xxs:ml-4 xs:w-[60px] xs:h-[20px] xs:text-[12px] xs:my-5  sm:w-[20px] sm:h-[8px]  md:w-[60px] md:h-[20px] md:text-[12px] lg:w-[74px] lg:h-[24px] lg:text-[14px] lg:mt-6  lg:ml- xl:w-[80px] xl:h-[25px] xl:text-[15px] xl:ml-6 xl:mt-5  2xl:w-[98px] 2xl:h-[30px] 2xl:text-[18px]   bg-[#FFCB00] text-white  text-center rounded-[20px] border-[#FFCB00] border-1 " >Home</button>
          </div>
        </div>
        <div className=' xxs:w-[320px] xxs:h-[250px] xxs:m xxs:mt-[-4%] xxs:rounded-b-[50px] xxs:z-1  xs:w-[380px] xs:h-[250px] xs:rounded-b-[40px] sm:w-[425px] sm:h-[260px] sm:rounded-b-[50px] md:w-[760px] md:h-[40px] md:ml-1 md:mt-[-1.5%] lg:w-[1008px] lg:h-[40px] lg:ml-2 lg:mt-[-10px] xl:w-[1422px] xl:h-[43px] xl:ml-2 xl:mt-[-1%]  2xl:w-[1520px] 2xl:h-[50px] 2xl:ml-3 2xl:mt-[-12px] bg-[#324863] rounded-b-[70px] ' ></div>

        {/* <button>Add Bus</button>
        <button>View Bus</button>
        <button>View Tickets</button> */}

        <Home/>


      </div>
    </>
  )
}
export default AdminPage;