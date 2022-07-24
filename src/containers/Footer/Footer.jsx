import React from 'react'
import footerLogo from '../../assets/footerLogo.png'

const Footer = () => {
    return (
        <div className='footer-bg pt-36 pb-8'>
            <div className='container mx-auto'>
                <div className='w-full flex mb-36 flex-col justify-center items-center gap-y-16'>
                    <h1 className='header-title text-3xl md:text-6xl font-extrabold max-w-5xl text-center'>
                        Do you want to step in to the future before others
                    </h1>   
                    <button className='text-lg border-2 border-solid border-white px-7 py-4 hover:bg-white hover:text-black'>
                        Request Early Access
                    </button>
                </div>

                <div className='w-full flex gap-12 flex-col sm:flex-row  justify-between flex-wrap '>
                    <div className='w-full sm:w-max flex justify-center sm:justify-start items-center sm:items-start'>
                        <img src={footerLogo}/>
                    </div>
                    <div className='w-full sm:w-max'>
                        <ul className='flex flex-col gap-y-2'>
                            <li className='text-xl sm:text-base font-bold mb-4 mx-auto sm:mx-0'>Links</li>
                            <li className='cursor-pointer w-max mx-auto sm:mx-0'>Overons</li>
                            <li className='cursor-pointer w-max mx-auto sm:mx-0'>Social Media</li>
                            <li className='cursor-pointer w-max mx-auto sm:mx-0'>Counters</li>
                            <li className='cursor-pointer w-max mx-auto sm:mx-0'>Contact</li>
                        </ul>
                    </div>
                    <div className='w-full sm:w-max'>
                        <ul className='flex flex-col gap-y-2'>
                            <li className='text-xl sm:text-base font-bold mb-4 mx-auto sm:mx-0'>Company</li>
                            <li className='cursor-pointer w-max mx-auto sm:mx-0'>Terms & Conditions</li>
                            <li className='cursor-pointer w-max mx-auto sm:mx-0'>Privacy Policy</li>
                            <li className='cursor-pointer w-max mx-auto sm:mx-0'>Contact</li>
                        </ul>
                    </div>
                    <div className='w-full sm:w-max'>
                        <ul className='flex flex-col gap-y-2 '>
                            <li className='text-xl sm:text-base font-bold sm:mb-4 mx-auto sm:mx-0'>Get in touch</li>
                            <li className='cursor-pointer w-max mx-auto sm:mx-0'>Crechterwoord K12 182 DK Alknjkcb</li>
                            <li className='cursor-pointer w-max mx-auto sm:mx-0'>085-132567</li>
                            <li className='cursor-pointer w-max mx-auto sm:mx-0'>omidjr17@gmail.com</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer