import React from 'react'
import Title from './Title'
import Text from './Text'

const FeatureRow = ({title , text , classes}) => {
    return (
        <div className={`flex justify-between lg:items-center  flex-col  gap-y-5  ${classes}:flex-row ${classes}:text-left ${classes}:gap-y-0`}>
            <Title title={title}/>
            <Text paraph={text}/>
        </div>
    )
}

export default FeatureRow