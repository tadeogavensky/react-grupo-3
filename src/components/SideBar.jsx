import React from 'react'
import { SearchProductContent } from './SearchProductContent'
import logo from '../assets/img/logo.svg'
import '../assets/css/sideBar.css'
export const SideBar = () => {
    return (
        <div className='sideBar'>
            <img src={logo} alt="" />

          {/*   <SearchProductContent/> */}
        </div>
    )
}
