import { CiSearch } from "react-icons/ci";
import { FaBottleWater } from "react-icons/fa6";
import { BiSolidBlanket } from "react-icons/bi";
import { TbBatteryCharging2 } from "react-icons/tb";
import { MdMovie } from "react-icons/md";
import { MdGpsFixed } from "react-icons/md";
import { MdOutlineSos } from "react-icons/md";
import { FaToilet } from "react-icons/fa";
const FilterContainer = () => {
    return (
        <div className=" 2xl:h-[850px] " >
            <div className='filter-section ' >
                <div className="  ">
                    <div>
                        <h4 className="ml-5 pt-6 text-[#1a1919] font-bold " >BUS TYPES</h4>
                        <div className="flex flex-col m-5 font-medium " >
                            <div>
                                <input type="checkbox" name="Seater" id="seater" /><label htmlFor="seater" className="m-2 font-medium  " >SEATER</label>
                            </div>
                            <div>
                                <input type="checkbox" name="sleeper" id="sleeper" /><label htmlFor="sleeper" className="m-2 font-medium " >SLEPPER</label>
                            </div>
                            <div>
                                <input type="checkbox" name="ac" id="ac" /><label htmlFor="ac" className="m-2 font-medium " >AC</label>
                            </div>
                            <div>
                                <input type="checkbox" name="non_ac" id="non_ac" /><label htmlFor="non_ac" className="m-2 font-medium " >NON AC</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="ml-5 pt-6 text-[#1a1919] font-bold " > BOARDING POINT</h4>
                        <div className="flex flex-col m-3 relative " >

                            <input type="text" id="boarding_point" />
                            <div className="absolute  " >
                                <CiSearch className="w-[30px] h-[30px] pb-2 pt-1  " />
                            </div>

                        </div>
                        <h4 className="ml-5 pt-2 text-[#1a1919] font-bold " >DROP POINT</h4>
                        <div className="flex flex-col m-3 relative " >

                            <input type="text" id="drop_point" />
                            <div className="absolute  " >
                                <CiSearch className="w-[30px] h-[30px] pb-2 pt-1 " />
                            </div>
                        </div>
                    </div>
                    <div  >
                        <h4 className="ml-5 pt-6 text-[#1a1919] font-bold  " >AMENITIES</h4>
                        <div className="flex flex-col  m-5 gap-3 2xl:gap-4 " >
                            <div className="w-[60px] h-[25px] aminities flex  gap-1 font-bold  " > <CiSearch className="w-[20px] h-[20px] pb-1  " /> WIFI</div>
                            <div className="w-[120px] h-[25px]  aminities flex gap-1 font-bold text-[12px] " > <FaBottleWater className="w-[20px] h-[20px] pb-1 " /> Water Bottle</div>
                            <div className="w-[82px] h-[25px]  aminities flex gap-2 font-bold text-[12px] " > <BiSolidBlanket className="w-[35px] h-[35px] pb-4  " /> Blanket</div>
                            <div className="w-[130px] h-[30px]  aminities flex gap-1 font-bold text-[12px] " > <TbBatteryCharging2 className="w-[20px] h-[20px] pb-1 " /> Charging Port</div>
                            <div className="w-[70px] h-[25px]  aminities flex gap-1 font-bold text-[12px] " > <MdMovie className="w-[40px] h-[40px] pb-6 " />Movie</div>
                            <div className="w-[118px] h-[25px] aminities flex gap-1 font-bold text-[12px] " > <MdGpsFixed className="w-[20px] h-[20px] pb-1 " /> Track By Bus</div>
                            <div className="w-[70px] h-[25px]  aminities flex gap-1 font-bold text-[12px]" ><MdOutlineSos className="w-[35px] h-[35px] pb-4 " />  SOS</div>
                            <div className="w-[70px] h-[25px]  aminities flex gap-1  font-bold text-[12px]" > <FaToilet className="w-[20px] h-[20px] pb-1 " /> Toilet</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FilterContainer;