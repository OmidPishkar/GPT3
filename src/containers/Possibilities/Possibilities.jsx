import React from 'react'
import possibility from '../../assets/VAR.png'

const Possibilities = () => {
    return (
        <div className='dark-bg py-8'>
            <div className='container mx-auto px-1'>
                <div className='w-full flex flex-col lg:flex-row items-center gap-y-12 lg:items-end'>

                    <div className='w-full lg:w-1/2 pb-4 lg:pb-0 border-b-2 lg:border-b-0 border-solid border-teal-800'>
                        <img src={possibility} className='possibil-img'/>
                    </div>
                
                    <div className='w-full lg:w-1/2 lg:pl-5'>
                        <p className='mb-6 font-medium text-blue-300	 text-sm lg:text-base	leading-7'>
                            Request Early Access to Get Started
                        </p>

                        <h1 className='mb-9 header-title font-extrabold text-2xl lg:text-3xl	leading-10	sm:w-96'>
                            The possibilities are beyond your imagination
                        </h1>

                        <p className='mb-6 font-medium text-blue-300	text-sm lg:text-base	leading-7'>
                            Yet bed any for travelling assistance indulgence unpleasing.<br/> Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                        </p>

                        <p className='cursor-pointer text-red-400 text-base leading-10 font-medium'>
                            Request Early Access to Get Started
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Possibilities