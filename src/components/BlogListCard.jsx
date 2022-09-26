import React from 'react'
import { likes, readLaterIcon, saveToPref, watched } from '../assets'

const BlogListCard = ({ blog }) => {
    return (
        <article className=' border-[1px] rounded-[10px] border-[#0A72B9] mx-[2.5%] mt-[2.5%] overflow-hidden drop-shadow-sm lg:border-[0] lg:flex lg:ml-[0] lg:mt-[0] relative lg:py-[10px]'>
            <div className='w-[100%] h-[fit-content] lg:h-[fit-content] rounded-[10px] relative show__hover overflow-hidden'>

                <img src={blog.image} alt="blog image" className='w-[100%] relative left-[50%] -translate-x-[50%] rounded-[10px] lg:left-0 lg:translate-x-[0] ease-in z-[0] blog__listcard-img' />

                <div className='z-[3] absolute w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 flex flex-col justify-between card__hovering'>
                    <div className='z-[4] mt-[8px] ml-[8px] ease-in'>
                        <div className='rounded-[4px] bg-[#000]/70 p-[4px] w-[fit-content]'>
                            <img src={readLaterIcon} alt="read later" className='w-[20px] h-[20px] ' />
                        </div>
                        <div className='rounded-[4px] bg-[#000]/70 mt-[4px] p-[4px] w-[fit-content]'>
                            <img src={saveToPref} alt="read later" className='w-[20px] h-[20px] ' />
                        </div>
                    </div>
                    <div className='w-[100px] items-center justify-evenly flex h-[20px] bg-[#000]/70 rounded-bl-[10px] m-0'>
                        <div className='flex justify-center items-center'><img src={likes} alt="likes icons" className='w-[8px] h-[8.73px] ' />
                            <p className='ml-[2px] text-[10px] font-[400] leading-[18.74px] text-[white]'>{blog.likes}</p></div>
                        <div className='flex justify-center items-center border-l-[1px] border-[#fff] pl-[6px]'><img src={watched} alt="whatched icon" className='w-[12px] h-[8px] ' />
                            <p className='ml-[2px] text-[10px] font-[400] leading-[18.74px] text-[white]'>{blog.watched}</p></div>
                    </div>
                </div>
            </div>
            <div className='py-[2.5%] px-[2.5%] lg:py-[0]'>
                <div>
                    <h5 className='sm:font-[400] font-[800] text-[18px] leading:[20px] sm:text-[24px] sm:leading-[36px]'>{blog.title}</h5>
                    <div className='flex'>
                        <div className='w-[24px] h-[24px] rounded-full'><img src={blog.author_image} alt="author image" /></div>
                        <p className='text-[12px] font-[400] leading-[22px] mx-[10px] border-r-[1px] border-[#000]  pr-[10px]'>{blog.author}</p>
                        <small className='text-[12px] font-[400] leading-[22px]'>{blog.time}</small>
                    </div>
                </div>
                <p className='text-[14px] ss:text-[18px] leading-[27px] font-[400]'>{blog.description}</p>
            </div>
        </article>
    )
}

export default BlogListCard