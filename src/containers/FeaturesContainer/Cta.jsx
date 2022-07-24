import React from 'react'

const Cta = () => {
    return (
        <div className='dark-bg py-8 px-2'>
            
            
            <div className='flex flex-col md:flex-row py-3 gap-y-5 items-center justify-between     cta-bg container mx-auto rounded-md px-16 h-max md:h-44'>
                <div className='text-center md:text-left'>
                    <span className='font-medium text-xs text-black leading-7'>Request Early Access to Get Started</span>
                    <h3 className='break-words my-4 md:my-0	 font-extrabold text-base lg:text-2xl	md:leading-10 text-black'>Register today & start exploring the endless possiblities.</h3>
                </div>

                <button className='bg-black text-sm font-bold px-6 py-3 rounded-full'>Get Started</button>
            </div>
        </div>
    )
}

export default Cta