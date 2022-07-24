import React from 'react'

const Card = ({height , src , date , title}) => {
    return (
        <div style={ {height: height } } className="max-w-lg lg:max-w-sm bg-slate-800 rounded-lg pb-2">
            <a href="#blog" className='h-96'>
                <img className="rounded-t-lg" src={src} alt="blog"/>
            </a>
            <div className="p-5 flex flex-col justify-evenly w-full ">
                <a href="#blog">
                    <h5 className="mb-2 text-base font-bold tracking-tight ">{date}</h5>
                </a>
                <p className="mb-3 font-2xl font-bold ">{title}</p>
                <a href="#blog" className="inline-flex items-center py-2 px-3 text-xs dark-bg w-max rounded-md font-medium text-center ">
                    Read Full Article
                </a>
            </div>
        </div>
    )
}

export default Card