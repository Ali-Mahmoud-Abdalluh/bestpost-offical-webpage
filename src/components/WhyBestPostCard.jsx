import React from 'react'

const WhyBestPostCard = ({ icon, number, content }) => {
    return (
        <div className='card flex flex-col items-center text-center ss:items-start ss:text-start relative z-[4] mr-4'>
            <img src={icon} alt="icon" className='h-[96px] w-[96px] rounded-full z-[4]' />
            <h2 className='text-[24px] mt-[24px] mb-[12px] font-semibold z-[4]'>{number}</h2>
            <p className='font-normal text-[16px] ss:text-[24px] leading-snug z-[4]'>{content}</p>
            <div className='absolute top-0 right-0 left-0 bottom-0 blue__gradient z-[0]' />
        </div>
    )
}

export default WhyBestPostCard