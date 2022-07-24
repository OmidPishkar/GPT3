import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeaderMain from '../../components/HeaderMain/HeaderMain'

const Header = () => {
    return (
        <header className='header'>
            <Navbar/>
            <HeaderMain/>
        </header>
    )
}

export default Header