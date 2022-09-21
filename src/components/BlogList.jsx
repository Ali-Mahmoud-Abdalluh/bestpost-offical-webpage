import React from 'react'
import { blogs_card_data, blogs_card_data2, blogs_card_data3, h_card_data, h_card_data2 } from '../constants'
import BlogHCards from './BlogHCards'
import BlogListCard from './BlogListCard'

const BlogList = () => {
    return (
        <div className='flex flex-col w-full mr-[30px]'>
            <div className='w-full border-[#CCCCCC] border-b-[3px] relative'>
                <h2 className='font-normal text-[36px] font-[400] leading-[67.46px] text-[#000000] border-b-[5px] border-[#FCC320] inline-block relative top-1 capitalize'>Latest Articles</h2>
            </div>


            {
                blogs_card_data.map((blog) => <BlogListCard key={blog.id} blog={blog} />)
            }


            <div className='w-full flex flex-row justify-between mt-[30px]'>
                {
                    h_card_data.map((blog, index) => <BlogHCards key={index} blog={blog} />)
                }
            </div>


            {
                blogs_card_data2.map((blog) => <BlogListCard key={blog.id} blog={blog} />)
            }

            <div className='w-full flex flex-row justify-between mt-[30px]'>
                {
                    h_card_data2.map((blog, index) => <BlogHCards key={index} blog={blog} />)
                }
            </div>

            {
                blogs_card_data3.map((blog) => <BlogListCard key={blog.id} blog={blog} />)
            }
            {/* more articals button */}

            <div className='flex justify-center w-full'><button className='text-[#FFFFFF] text-[30px] font-[400] leading-[56.22px] px-[32px] py-[6px] rounded-[4px] bg-blue-gradient-btn self-center my-[30px]'>
                More Articles
            </button></div>

        </div>
    )
}

export default BlogList