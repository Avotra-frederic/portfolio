import React from 'react'
import NavbarTop from '../partials/NavbarTop'
import {Outlet} from "react-router-dom"
import FloatingNavbar from '../partials/FloatingNavbar'

function Base() {
  return (
    <React.Fragment>
        <NavbarTop/>
        <FloatingNavbar/>
        <Outlet/>
    </React.Fragment>
  )
}

export default Base