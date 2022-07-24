import React from 'react'

const Avatars = ({avatarImgs}) => {
    const groups = avatarImgs.map((src , index) => {
        return <img className='w-9 h-9 rounded-full' key={index} src={src} alt={`people${index}`}/>
    })

    return (
        <>
            {groups}
        </>
    )
}

export default Avatars