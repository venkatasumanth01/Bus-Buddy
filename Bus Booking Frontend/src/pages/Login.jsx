import axios from "axios";
import { useRef,useState } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Login = () => {

    const [msg,setMsg] = useState("");
    const [suc,setSuc] = useState("");

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const data = params.get('data');

    const email=useRef(null);
    const pass=useRef(null);

    let navigate=useNavigate();

    const submit=()=>{

      if(email.current.value == "" || email.current.value.length < 8 ){
          setMsg("Enter Valid Email");
      }
      else if(pass.current.value == "" || pass.current.value < 5 ){
        setMsg("Enter Valid Password");
    }
      else{
          axios.post("http://localhost:8000/login",{
              "email":email.current.value,
              "password":pass.current.value}).then(
              (posRes)=>{
              const {data}=posRes;
              if(data=="Login Success"){
                  navigate("/homepage");
              }
              else{
                  setMsg("Wrong Credentials");
              }
              },(errRes)=>{
                  console.log(errRes);
              }   
          )
      }
    }

    const signin=()=>{
      navigate("/signin");
    }

  return (
    <>
      <div className=" xxs:bg-gradient-to-b from-[#43B9B9] via-[#47B4BA] to-[#072448]   xxs:bg-cover xs:w-[375px] sm:w-[700px] md:w-[768px]  lg:w-[1024px] xl:w-[1440px] 2xl:w-[1530px] h-[800px] md:bg-[url('./assets/Images/loginbackground.png')] lg:bg-[url('./assets/Images/loginbackground.png')] xl:bg-[url('./assets/Images/loginbackground.png')]  2xl:bg-[url('./assets/Images/loginbackground.png')] bg-no-repeat bg-cover  ">
        <div className="flex" >
          <div className=" xxs:w-[36px] xxs:h-[36px] xxs:mx-2 xs:w-[37px] xs:h-[37px] xs:mx-3 xs:my-2  sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] lg:ml-5   xl:w-[40px] xl:h-[40px]   ml-2 mt-1 2xl:w-[50px] 2xl:h-[50px] 2xl:ml-6  bg-[url('./assets/Images/iconbus.png')]  bg-no-repeat bg-cover " ></div>
          
        </div>
        <div className=" xxs:w-[210px] xxs:h-[270px] xxs:mt-40 xxs:ml-[17%] xs:w-[235px] xs:h-[300px] xs:mt-20 xs:ml-[19%] sm:mt-20 sm:ml-[22%] md:w-[235px] md:ml-[35%] md:mt-[17%]  lg:mt-20 lg:ml-[37%] xl:mt-20 xl:ml-[41%] xl:w-[280px]  2xl:mt-40 2xl:ml-[35%] 2xl:w-[420px] 2xl:h-[330px]   w-[362px] h-[447px]  bg-[url('./assets/Images/bg.png')]  bg-no-repeat bg-cover  rounded-[5px] shadow-sm drop-shadow-sm  " style={{ zIndex: 0 }} >
          <div className=" xxs:w-[200px] xxs:h-[35px] xxs:ml-[2.5%]   xs:w-[225px] xs:h-[40px] md:w-[225px] md:ml-[2.5%] lg:w-[223px] xl:w-[267px]  2xl:w-[420px] 2xl:ml-[-0.5px] w-[363px] h-[50px]  border-black border-2 bg-[#eef0f2]  shadow-sm drop-shadow-sm rounded-[5px] object-cover mt-10  "  >
            <h1 className="flex justify-center xxs:text-[13px] xs:text-[18px] text-[22px] text-[#072448] pt-2 font-semibold  " >LOGIN</h1>
          </div>
          
          <div className=" flex flex-col gap-2 ml-8 mt-1 pt-8 xl:ml-[8%] xxs:ml-[7%] xxs:mt-[15%] xs:mt-[15%] xs:ml-[8%] md:ml-[9%] md:mt-[15%] lg:ml-5 xl:mt-[15%] 2xl:mt-[1%]  " >
            <h1 className="font-bold ml-[120px]">{data}</h1>            
            <input ref={email} type="email" name="email" id="email" placeholder='Email' required className="xxs:w-[180px] xxs:h-[30px] xs:w-[195px] xs:h-[30px] xl:w-[235px] xl:h-[28px] 2xl:w-[350px] 2xl:h-[40px] 2xl:text-[16px]  w-[280px] h-[35px] bg-[#F3EEFF] rounded-[5px] pl-3 invalid:border-pink-500 focus:invalid:border-pink-500 text-[12px] " />
            <input ref={pass} type="password" name="password" id="pwd" placeholder='Password' required className="xxs:w-[180px] xxs:h-[30px] xs:w-[195px] xs:h-[30px] xl:w-[235px] xl:h-[28px] 2xl:w-[350px] 2xl:h-[40px] 2xl:text-[16px]  w-[280px] h-[35px] bg-[#F3EEFF] rounded-[5px] pl-3 invalid:border-pink-500 focus:invalid:border-pink-500 text-[12px]  " />
            <div className="flex gap-1">
                <p className="font-semibold ml-8">Don't have an account ?</p>
                <button onClick={signin} className="font-bold text-[white]"> SignIn Here</button>
            </div>
          </div>
          <button onClick={submit} className=" xxs:mt-7 xxs:ml-12 xxs:w-[110px] xxs:h-[23px] xs:mt-7 2xl:w-[155px] 2xl:h-[29px] xs:ml-[27%] md:ml-[26%] xl:ml-[30%] 2xl:ml-[33%] 2xl:text-[16px] w-[149px] h-[27px] bg-[#FFCB00] rounded-[20px] text-white text-[13px] text-center ml-[55px] mt-6  font-semibold  " >SUBMIT</button>
          <h6 className="ml-[35%] mt-2  font-bold ">{msg}</h6>
        </div>
      </div>

    </>
  )
}

export default Login;
