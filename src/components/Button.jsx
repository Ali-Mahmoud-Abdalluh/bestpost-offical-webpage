import React from 'react'

const Button = ({ value }) => {
    return (
        <button type='Button' className='px-[20px] py-[10px] sm:py-[20px] sm:px-[40px] bg-blue-gradient-btn text-white rounded-[4px] text-[24px]  sm:text-[30px]'>{value}</button>
    )
}

export default Button