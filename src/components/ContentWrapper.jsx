import React from 'react'
import { Header } from './Header'
import  TopBar  from './TopBar'
import '../assets/css/contentWrapper.css'
import lastDataWrapper from './lastDataWrapper'
export const ContentWrapper = () => {
    return (
        <div className='contentWrapper'>
            <Header />
            <TopBar />
            <lastDataWrapper/>
          
        </div>
    )
}
