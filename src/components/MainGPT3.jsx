import React from 'react'

const MainGPT3 = ({classes , title , text}) => {
    return (
        <div className={`flex flex-col ${classes}`}>
            <h1 className='header-title font-extrabold text-lg sm:text-3xl	sm:leading-10	sm:w-96'>
                {title}
            </h1>

            <p className='cursor-pointer text-red-400 text-base leading-10 font-medium'>
                {text}
            </p>
        </div>
    )
}

export default MainGPT3