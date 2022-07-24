import React from 'react'
import Card from '../../components/Card'

import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import blog4 from '../../assets/blog4.png'
import blog5 from '../../assets/blog5.png'

const Blog = () => {
    return (
        <div className='dark-bg pb-8 pt-28'>
            <div className='container mx-auto'>
                <h1 className='header-title font-extrabold text-lg sm:text-6xl	leading-loose  mb-16'>
                    A lot is happening,<br/>We are blogging about it.
                </h1>
                
                <div className='cards-container w-full flex flex-col items-center gap-1 justify-between flex-wrap'>
                    <Card
                        height='696.16px'
                        src={blog1}
                        date={'Sep 26, 2021'}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                    <Card
                        height='323.84px'
                        src={blog2}
                        date={'Sep 26, 2021'}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                    <Card
                        height='323.84px'
                        src={blog3}
                        date={'Sep 26, 2021'}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                    <Card
                        height='323.84px'
                        src={blog4}
                        date={'Sep 26, 2021'}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                    <Card
                        height='323.84px'
                        src={blog5}
                        date={'Sep 26, 2021'}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                </div>

            </div>
        </div>
    )
}

export default Blog