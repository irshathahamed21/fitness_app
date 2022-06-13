import React from 'react'
import {Stack} from "@mui/material"
import logo from "../assets/images/Logo.png"


const Navbar = () => {
  return (
    <Stack direction = "row">
      <Link to = "/">
        <img src = {logo} alt = "logo" />
      </Link>
      <Stack direction = "row" >
        <Link to = "/" 
        style = {{textDecoration:"none", color: '#3A1212', borderBottom: '3px solid #FF2625' }} >Home</Link>
        <a href = "#exercises" style={{ textDecoration: 'none', color: '#3A1212' }} >Exercises </a>
      </Stack>

    </Stack>
  )
}

export default Navbar