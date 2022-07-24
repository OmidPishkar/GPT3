import React from 'react'
import FeatureRow from '../../components/Feature/FeatureRow'
import FeatureColumn from '../../components/Feature/FeatureColumn'
import MainGPT3 from '../../components/MainGPT3'

const WhatGPT3 = () => {
    return (
        <div className='dark-bg py-10'>
            <div className='container mx-auto wgpt3 py-12 px-8 rounded-md'>
                <FeatureRow
                    classes='lg'
                    title='Whats GPT3?'
                    text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'                    
                />

                <MainGPT3
                    classes='justify-between items-center my-24 sm:flex-row text-center sm:text-left'
                    title='The possibilities are beyond your imagination'
                    text='Explore The Library'
                />

                <div className='flex flex-col md:flex-row items-center gap-y-16 md:gap-0 justify-between md:items-start'>
                    <FeatureColumn
                        title='Chatbot'
                        text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
                    />
                    <FeatureColumn
                        title='Knowledgebase'
                        text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
                    />
                    <FeatureColumn
                        title='Education'
                        text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
                    />
                </div>

            </div>
        </div>
    )
}

export default WhatGPT3