import React , {useState} from 'react'
import logo from '../../assets/logo.png'
import { RiMenu3Line , RiCloseLine } from "react-icons/ri";
import NavbarButtons from '../NavbarButtons/NavbarButtons';
import NavbarItems from '../NavbarItems/NavbarItems';


const Navbar = () => {
    const [toggleMenu , setToggleMenu] = useState(false)
    return (
        <div className='container mx-auto flex justify-between items-center pt-8 relative'>
            <div className='flex items-center gap-x-24'>
                <a href='#home'>
                    <img src={logo} alt='logo'/>
                </a>
                <ul className='hidden lg:flex items-center gap-x-12'>
                    <NavbarItems/>
                </ul>
            </div>

            <div className='navbar-buttons hidden sm:flex gap-x-2 items-center'>
                <NavbarButtons/>
            </div>
            
            <div className='block lg:hidden'>
                {toggleMenu ?
                    <RiCloseLine size={24} onClick={() => setToggleMenu(false)}/> :
                    <RiMenu3Line size={24} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className='bg-zinc-800 rounded-lg px-6 py-3 slide-top absolute top-44 right-4'>
                        <ul className='flex flex-col items-center gap-y-4'>
                            <NavbarItems/>
                        </ul>

                        <div className='navbar-buttons sm:hidden flex flex-col gap-y-4 mt-4 items-center'>
                            <NavbarButtons/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar