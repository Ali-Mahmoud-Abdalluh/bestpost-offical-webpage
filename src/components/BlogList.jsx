import { useState, useRef, useEffect } from 'react'
import { blogs_card_data, blogs_card_data2, blogs_card_data3, h_card_data, h_card_data2, important_categories } from '../constants'
import BlogHCards from './BlogHCards'
import BlogListCard from './BlogListCard'
import { Navigation, FreeMode, Mousewheel } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';

const BlogList = () => {
    const [active, setActive] = useState(important_categories[0]);
    return (
        <div className='flex flex-col w-full mr-[30px] col-span-2 relative
         change_swiper_styles'>
            <Swiper
                className='w-[100%] lg:hidden'
                modules={[Mousewheel]}
                simulateTouch={'true'}
                direction={'horizontal'}
                slidesPerView={'auto'}
                spaceBetween={10}
                noSwiping={true}
                noSwipingClass={'swiper-no-swiping'}
            >

                <ul className='flex whitespace-nowrap'>
                    {
                        important_categories.map(
                            (category) =>
                                <SwiperSlide key={category}>
                                    <li >
                                        <div className={`py-[5px] px-[10px] w-[fit-content] rounded-[6px] mr-[5px] text-center border-[1px] ${category === active ? 'bg-[#0A72B9] text-[white]' : 'bg-transparent text-[#0A72B9]'} whitespace-nowrap `} onClick={() => { setActive(category) }}>
                                            {category}
                                        </div>
                                    </li>
                                </SwiperSlide>
                        )
                    }
                </ul>


            </Swiper>



            <div className='w-full border-[#CCCCCC] sm:border-b-[3px] border-b-[1px] relative'>
                <h2 className='sm:text-[36px] text-[24px] sm:font-[400] font-semibold sm:leading-[67.46px] leading-[46px] text-[#000000] sm:border-b-[5px] border-b-[3px] border-[#FCC320] inline-block relative sm:top-1 top-[2px] capitalize'>Latest Articles</h2>
            </div>

            <div className='grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-1'>

                {
                    blogs_card_data.map((blog) => <BlogListCard key={blog.id} blog={blog} />)
                }


            </div>

            <div className='grid grid-cols-1 ss:grid-cols-2'>
                {
                    h_card_data.map((blog, index) => <BlogHCards key={index} blog={blog} />)
                }
            </div>

            <div className='grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-1'>
                {
                    blogs_card_data2.map((blog) => <BlogListCard key={blog.id} blog={blog} />)
                }
            </div>

            <div className='grid grid-cols-1 ss:grid-cols-2'>
                {
                    h_card_data2.map((blog, index) => <BlogHCards key={index} blog={blog} />)
                }
            </div>

            <div className='grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-1'>
                {
                    blogs_card_data3.map((blog) => <BlogListCard key={blog.id} blog={blog} />)
                }
            </div>
            {/* more articals button */}

            <div className='flex justify-center w-full'>
                <button className='text-[#FFFFFF] sm:text-[30px] font-[400] sm:leading-[56.22px] leading-[22.49px] sm:px-[32px] px-[16px] py-[5px] text-[12px] sm:py-[6px] sm:rounded-[4px] rounded-[6px] bg-blue-gradient-btn self-center my-[30px]'>
                    More Articles
                </button>
            </div>

        </div >
    )
}

export default BlogList