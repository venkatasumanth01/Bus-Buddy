import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

 const AdminBusSection = () => {
    return (
        <>
            <div>
                <div className="  md:w-[730px] md:h-[70px] md:ml-4 md:mt-8 2xl:w-[1200px] 2xl:h-[100px] 2xl:ml-[5%] bg-[#A9B9CA] rounded-[10px] " >
                    <div className=" flex gap-12 ml-2 " >
                        <div className=" flex flex-col " >
                            <p>Bus ID</p>
                            <p>123</p>
                        </div>
                        <div className=" flex flex-col " >
                            <p>Bus Name</p>
                            <p>Orange Travels</p>
                        </div>
                        <div className=" flex flex-col " >
                            <p>Bus Type</p>
                            <p>Slepper</p>
                        </div>
                        <div className=" flex flex-col " >
                            <p>From</p>
                            <p>Hyderbad</p>
                        </div>
                        <div className=" flex flex-col " >
                            <p>To</p>
                            <p>Bangalore</p>
                        </div>
                        <button><RiDeleteBin6Line /></button>
                        <button> <FiEdit2 /></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminBusSection;
