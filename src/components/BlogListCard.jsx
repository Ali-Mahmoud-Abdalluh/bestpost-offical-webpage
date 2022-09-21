import React from 'react'
import { likes, readLaterIcon, saveToPref, watched } from '../assets'

const BlogListCard = ({ blog }) => {
    return (
        <div className='flex flex-row mt-[30px] rounded-[6px]'>
            <div className='min-w-[270px] min-h-[165px] relative mr-[30px]
            z-[1] card overflow-hidden rounded-[6px]'>
                <img src={blog.image} alt="artical small image" className='card-image duration-300 ease-in-out rounded-[6px] min-w-full min-h-full relative top-0 bottom-0 right-0 left-0 z-[2]' />
                <div className='absolute z-[3] min-w-full min-h-full top-0 bottom-0 left-0 right-0 flex flex-col justify-between hidden ease-in-out hidden-part'>
                    <div className='flex flex-col m-[8px]'>
                        <img src={readLaterIcon} alt="read later icon" className='p-[4px] rounded-[4px] bg-[black]/70 w-[20px] h-[20px] mb-[4px] cursor-pointer' />
                        <img src={saveToPref} alt="save to prefared icon" className='p-[4px] rounded-[4px] bg-[black]/70 w-[20px] h-[20px] cursor-pointer' />
                    </div>
                    <div className='w-[110px] h-[20px] px-[10px] rounded-bl-[6px] bg-[black]/70 flex flex-row items-center text-center '>
                        <img src={likes} alt="likes icon" className='w-[9px] h-[9px] ' />
                        <p className='text-[10px] font-[400] leading-[18.74px] text-[#FFFFFF] self-end pl-[2px] pr-[12px] border-r-[1px] mr-[6px] '>{blog.likes}</p>
                        <img src={watched} alt="watched icon" className='w-[12px] h-[9px]' />
                        <p className='text-[10px] font-[400] leading-[18.74px] text-[#FFFFFF] self-end'>{blog.watched}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between items-start'>
                <h2 className='text-[24px] font-[400] leading-[36px] text-[#061F37]'>
                    {blog.title}
                </h2>
                <div className='flex flex-row'>
                    <img src={blog.author_image} alt="author small image" className='h-[24px] w-[24px] rounded-full mr-[10px] bg-[#FCC320]' />
                    <p className='font-[400] text-[12px] leading-[22.49px] pr-[10px] mr-[10px] border-r-[1px] border-[#666666] capitalize '>
                        {blog.author}
                    </p>
                    <p className='font-[400] text-[12px] leading-[22.49px]capitalize'>
                        {blog.time}
                    </p>

                </div>
                <p className='text-[18px] font-[400] leading-[27px] text-[#7A7A7A]'>
                    {blog.description}
                </p>
            </div>
        </div>
    )
}

export default BlogListCard