import React from 'react'
import google from '../../assets/google.png'
import dropbox from '../../assets/dropbox.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/Bitmap.png'
import shopify from '../../assets/shopify.png'


const Brands = () => {
    return (
        <div className='py-12 dark-bg'>
            <div className='container mx-auto flex justify-center items-center flex-wrap gap-12'>
                <img alt='brand' className='cursor-pointer' width='95px' height='24px' src={google}/>
                <img alt='brand' className='cursor-pointer' width='95px' height='24px' src={dropbox}/>
                <img alt='brand' className='cursor-pointer' width='95px' height='24px' src={slack}/>
                <img alt='brand' className='cursor-pointer' width='95px' height='24px' src={atlassian}/>
                <img alt='brand' className='cursor-pointer' width='95px' height='24px' src={shopify}/>
            </div>
        </div>
    )
}

export default Brands