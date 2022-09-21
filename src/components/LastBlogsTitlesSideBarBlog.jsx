import React from 'react'

const LastBlogsTitlesSideBarBlog = ({ team }) => {
    return (
        <div className='flex flex-col justify-start'>
            <div className='w-full border-[#CCCCCC] border-b-[3px] relative'><h2 className='font-normal text-[30px] leading-[56px] border-b-[5px] border-[#FCC320] inline-block relative top-1 capitalize'>{team.map((item) => Object.keys(item)[0])}</h2></div>
            <ul className='cursor-pointer'>
                {
                    team.map((item) => Object.values(item)[0].map((artical_title, index) => <li key={index} className="font-[400] text-[20px] leading-[37.48px] border-b-[1px] border-[#CCCCCC] text-start justify-cetner my-2 hover:text-[#FCC320] ">{artical_title}</li>))
                }
            </ul>
        </div>
    )
}

export default LastBlogsTitlesSideBarBlog