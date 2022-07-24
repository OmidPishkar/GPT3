import React from 'react'
import Text from './Text'
import Title from './Title'

const FeatureColumn = ({text , title}) => {
    return (
        <div className='flex flex-col gap-y-7 w-full md:w-1/4'>
            <Title title={title}/>
            <Text paraph={text}/>
        </div>
    )
}

export default FeatureColumn