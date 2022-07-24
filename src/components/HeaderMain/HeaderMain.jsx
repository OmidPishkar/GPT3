import React from 'react'
import ai from '../../assets/ai.png'
import Avatars from '../Avatars'

import people1 from '../../assets/people1.png'
import people2 from '../../assets/people2.png'
import people3 from '../../assets/people3.png'
import people4 from '../../assets/people4.png'
import people5 from '../../assets/people5.png'
import people6 from '../../assets/people6.png'

const avatarGroup = [people1 , people2 , people3 , people4 , people5 , people6]

const HeaderMain = () => {
    return (
        <div className='container mx-auto mt-8'>
            <div className='flex flex-col-reverse gap-y-4 items-center md:flex-row'>
                
                <div className='w-full md:w-1/2'>
                    <h1 className='header-title text-center  md:text-left text-3xl sm:text-6xl md:text-4xl leading-snug lg:text-5xl xl:text-6xl  font-bold mb-4'>
                        Lets Build Something amazing with GPT-3 OpenAI
                    </h1>

                    <p className='font-normal leading-7 text-base sm:text-xl text-blue-300 md:mb-20 text-center md:text-left mb-6'>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>

                    <form className='flex flex-col sm:flex-row justify-center md:justify-start px-2 py-1'>
                        <input placeholder='Your Email Address' type='text'
                            className='outline-none text-center sm:text-left rounded-tl-md rounded-tr-md sm:rounded-tr-none sm:rounded-bl-md border border-solid border-red-500 sm:border-transparent px-5 py-3 font-normal	text-xl	leading-7 header-input'
                        />
                        <button className='rounded-br-md sm:rounded-tr-md rounded-tr-none rounded-bl-md sm:rounded-bl-none   bg-red-500 px-5 py-3 border border-solid border-red-500'>Get Started</button>
                    </form>

                    <div className='flex flex-col lg:flex-row items-center gap-x-4 mt-6'>
                        <div className="flex -space-x-4">
                            <Avatars 
                                avatarImgs={avatarGroup}
                            />
                            <a className="flex justify-center items-center w-9 h-9 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600" href="#home">+1.6K</a>
                        </div>

                        <p className='text-xs font-medium my-2 md:my-0 text-center md:text-left md:leading-9'>
                            1,600 people requested access a visit in last 24 hours
                        </p>
                    </div>

                </div>

                <div className='w-full md:w-1/2'>
                    <img src={ai} alt="AI" className='w-full h-full'/>
                </div>

            </div>
        </div>
    )
}

export default HeaderMain