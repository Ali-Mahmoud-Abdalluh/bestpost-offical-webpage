import React from 'react'

const OutlineButton = ({ value }) => {
    return (
        <button className="border-2 outline-btn-gradient px-[23px] py-[6px] h-[68px] rounded-[4px] text-gradient text-[30px]">{value}</button>
    )
}

export default OutlineButton