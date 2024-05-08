import React from 'react'
import styled from 'styled-components'
export default function Navbar() {
  return (
    <NavBar>
        <div>
            <p>DealsDray</p>
        </div>
        <div>
            <ul type="none">
                <li>Time</li>
                <li>Them</li>
                <li>logout</li>
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
margin-left:14px;
margin-right:7px;
}
`