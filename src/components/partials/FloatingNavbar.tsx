import React from 'react'
import { LiaHomeSolid, LiaUserAltSolid, LiaGraduationCapSolid, LiaUserMdSolid, LiaCodeSolid,LiaSuitcaseSolid } from 'react-icons/lia'
import {Link} from "react-router-dom"
function FloatingNavbar() {
  return (
    <React.Fragment>
        <div className='flex flex-col w-10 h-fit rounded-full fixed inset-y-56 z-50 right-6 bg-white/10'>
            <Link to={''} className='w-full h-10 flex items-center justify-center center rounded-full'>
                <LiaHomeSolid/>
            </Link>
            <Link to={'about'} className='w-full h-10 flex items-center justify-center center rounded-full'>
                <LiaUserAltSolid/>
            </Link>
            <Link to={'education'} className='w-full h-10 flex items-center justify-center center rounded-full'>
                <LiaGraduationCapSolid/>
            </Link>
            <Link to={'jobs'} className='w-full h-10 flex items-center justify-center center rounded-full'>
                <LiaUserMdSolid/>
            </Link>
            <Link to={'skills'} className='w-full h-10 flex items-center justify-center center rounded-full'>
                <LiaCodeSolid/>
            </Link>
            <Link to={'project'} className='w-full h-10 flex items-center justify-center center rounded-full'>
                <LiaSuitcaseSolid/>
            </Link>
        </div>
    </React.Fragment>
  )
}

export default FloatingNavbar