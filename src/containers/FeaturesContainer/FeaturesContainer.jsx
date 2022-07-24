import React from 'react'
import FeatureRow from '../../components/Feature/FeatureRow'
import MainGPT3 from '../../components/MainGPT3'

const FeaturesContainer = () => {
    return (
        <div className='dark-bg py-8 text-white pt-16 pb-8'>
            <div className='container mx-auto'>
                <div className='w-full flex items-center flex-col lg:items-start lg:flex-row'>

                    <div className='w-1/2 pr-5 mb-12 lg:mb-0'>
                        <MainGPT3
                            classes='gap-y-12 text-center lg:text-left'
                            title='The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.'
                            text='Request Early Access to Get Started'
                        />
                    </div>

                    <div className='w-1/2 py-4  flex flex-col gap-y-12 all-features'>
                        <FeatureRow
                            title='Improving end distrusts instantly '
                            text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
                            classes='lg'
                        />
                        <FeatureRow
                            title='Become the tended active'
                            text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
                            classes='lg'
                        />
                        <FeatureRow
                            title='Message or am nothing'
                            text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
                            classes='lg'
                        />
                        <FeatureRow
                            title='Really boy law county'
                            text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
                            classes='lg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesContainer