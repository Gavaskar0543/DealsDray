import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaRegClock } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { TiWeatherSunny } from "react-icons/ti";
import { BsFillCloudMoonFill } from "react-icons/bs";

export default function Navbar() {
  const d = new Date();
  const [isDark,setDark] = useState(false);
  const [time,setTime] = useState(new Date());
  useEffect(()=>{
    let intervalId = setInterval(()=>{
      setTime(new Date());
    },1000);

    //clear intervalid while unmount
 return  () => clearInterval(intervalId)
  },[])
  return (
    <NavBar>
        <div>
           
            <p>DealsDray</p>
        </div>
        <div>
            <ul type="none">
                <li><FaRegClock/> <span>{time.getHours() }:{time.getMinutes()}:{time.getSeconds()
}</span></li>
                {/* {isDark ? (
                  <TiWeatherSunny/>
                ) : (
                  <BsFillCloudMoonFill/>
                )}
                */}
                <li><TbLogout/></li>
            </ul>
        </div>
    </NavBar>
  )
}
const NavBar = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
background-color:black;
color:white;
font-weight:600;

ul li{
 display:inline-block;
margin-left:18px;
margin-right:7px;
}
`