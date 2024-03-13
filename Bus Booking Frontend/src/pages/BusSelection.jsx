// eslint-disable-next-line no-unused-vars
import React from 'react'
import BusCard from '../components/BusCard';
import FilterContainer from '../components/FilterContainer';
import AdSection from '../components/AdSection';
import { IoIosArrowDropright } from "react-icons/io";
import { useLocation } from 'react-router-dom';


const BusSelection = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const origin = params.get('origin');
    const destination = params.get('destination');


    return (
        <div className='xxs:w-auto xxs:h-auto xs:w-auto xs:h-auto sm:w-auto sm:h-auto lg:w-auto lg:h-[690px] xl:w-auto xl:h-[769px] 2xl:w-auto 2xl:h-auto  bg-[#ddd8d8] '>
            <div className='xxs:w-[310px] xxs:h-[240px] xxs:rounded-b-[70px] xs:w-[365px] xs:h-[240px] xs:rounded-b-[70px] sm:w-[415px]  md:w-[760px] md:h-[60px] lg:w-[1016px] lg:h-[60px] xl:w-[1430px] xl:h-[58px] 2xl:w-full 2xl:h-[68px]  bg-[#072448] h-[80px] w-[1265px] rounded-b-[90px] z-10 header-nav fixed top-0 left-0 right-0'>
                <div className=' md:pt-1'>
                    <h3 className='xxs:text-[15px] xxs:pt-[26%] xs:text-[15px] xs:pt-[26%]  md:text-[12px] md:pt-1 xl:text-[13px] xl:pt-[3px] 2xl:text-[16px] 2xl:pt-2 text-white text-center pt-2 text-xs ' >Select your Seat</h3>
                    <div className='flex justify-center gap-20 xxs:gap-7 xs:mt-4 xs:gap-7 md:gap-20 md:mt-0  lg:mt-0 lg:gap-22 xl:gap-28 2xl:gap-32 ' >
                        <h2 className='text-white font-medium text-lg  xxs:text-[15px]  xs:text-[15px] md:text-[16px] 2xl:text-[18px]    ' >{origin}</h2>
                        <span><IoIosArrowDropright className='w-[20px] h-[20px] text-[#FFFFFF] xxs:w-[24px] xxs:h-[24px] xxs:mt-1 xs:w-[24px] xs:h-[24px] xs:mt-1  md:w-[20px] md:h-[20px] md:mt-2 lg:mt-[6px] xl:mt-1 2xl:mt-[5px] 2xl:w-[24px] 2xl:h-[24px] ' /></span>
                        <h2 className='text-white font-medium text-lg xxs:text-[15px] xs:text-[15px] md:text-[16px] 2xl:text-[18px] ' >{destination}</h2>
                    </div>
                </div>
            </div>
            {/* <AdSection /> */}
            <div>

            </div>
            <div className='flex overscroll-auto mt-[70px]' >
                <div>
                    <FilterContainer />
                </div>
                <div className="overscroll-auto  2xl:grid 2xl:grid-cols-2 2xl:gap-4 mt-10 ">
                    <BusCard />

                </div>
            </div>

        </div>
    )
}

export default BusSelection;