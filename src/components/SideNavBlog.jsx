import React from 'react'
import { important_categories, latest_designs_blogs, latest_laser_engraving_blogs } from '../constants'
import LastBlogsTitlesSideBarBlog from './LastBlogsTitlesSideBarBlog'
import { latest_marketing_blogs } from '../constants'

const SideNavBlog = () => {
    return (
        <div className='w-[370px] ml-2'>


            {/* impotant categories */}
            <div className='flex flex-col justify-start'>
                <div className='w-full border-[#CCCCCC] border-b-[3px] relative'><h2 className='font-normal text-[30px] leading-[56px] border-b-[5px] border-[#FCC320] inline-block relative top-1'>Important categories</h2></div>
                <ul className='list-square list-inside cursor-pointer'>
                    {
                        important_categories.map((item) => <li key={item} className='text-[20px] leading-[37px] font-normal hover:text-[#FCC320] list-square'>{item}</li>)
                    }
                </ul>
            </div>


            {/* Ads Area 300 x 600 */}
            <div className='w-full h-[600px] flex flex-col justify-center items-center bg-[#D9D9D9] rounded-[6px] my-[30px] text-center '>
                <h1 className='font-[700] text-[#666666] text-[30px] leading-[56.22px]'>AD<br />300x600</h1>
            </div>

            {/* Last Blogs For 1 Team */}
            <LastBlogsTitlesSideBarBlog team={latest_marketing_blogs} />

            {/* Ads Area 300 x 250 */}
            <div className='w-full h-[250px] flex flex-col justify-center items-center bg-[#D9D9D9] rounded-[6px] my-[30px] text-center'>
                <h1 className='font-[700] text-[#666666] text-[30px] leading-[56.22px]'>AD<br />300x250</h1>
            </div>

            {/* Subscribe to the mailing list to receive the most important articles Section */}
            <div className='bg-[#082A4A] py-[38px] px-[24px] rounded-[6px] mb-[30px]'>
                <h2 className='capitalize text-[24px] font-[700] leading-[45px] text-[#FFFFFF] '>Subscribe to the mailing list to receive the most important articles</h2>
                <form>
                    <input type="text" placeholder='Your Email Address' className='text-[18px] font-[400] leading-[33.73px] text-[#666666] px-[11.62px] py-[6px] rounded-[6px] w-full my-[12px] focus:outline-none' required />
                    <button type='submit' className='w-full text-[24px] font-[400] leading-[45px] bg-[#FCC320] rounded-[6px] text-center hover:font-[600]'>Subscribe</button>
                </form>
            </div>

            {/* Last Blogs For 2 Teams */}
            <LastBlogsTitlesSideBarBlog team={latest_designs_blogs} />
            <div className='w-full h-[30px]' />
            <LastBlogsTitlesSideBarBlog team={latest_laser_engraving_blogs} />

            {/* Ads Area 300 x 250 */}
            <div className='w-full h-[250px] flex flex-col justify-center text-center items-center bg-[#D9D9D9] rounded-[6px] my-[30px]'>
                <h1 className='font-[700] text-[#666666] text-[30px] leading-[56.22px]'>AD<br />300x250</h1>
            </div>
        </div>
    )
}

export default SideNavBlog