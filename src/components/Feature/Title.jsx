import React from 'react'

const Title = ({title}) => {
    return (
        <div>
            <div className='title-divider'></div>
            <h1 className='text-left font-extrabold text-2xl leading-6'>{title}</h1>
        </div>
    )
}

export default Title