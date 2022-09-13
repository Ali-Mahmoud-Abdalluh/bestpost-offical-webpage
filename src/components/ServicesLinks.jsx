import React from 'react'

const ServicesLinks = ({ link, name, condition }) => {
    return (
        <a href={link} className={`text-[16px] leading-[20px] text-white hover:bg-sky-500 px-2 p-1 sm:max-w-[250px] sm:min-w-[200px] rounded-[4px] ${condition ? "" : "self-center"}`}>{name}</a>
    )
}

export default ServicesLinks