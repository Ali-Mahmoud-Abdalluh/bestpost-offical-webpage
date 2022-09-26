import { last_blogs } from '../constants'
import LastBlogCard from './LastBlogCard'
import styles from '../style'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';


const BlogScrollSection = () => {

    return (
        <section className={`${styles.flexCenter} flex-col relative `}>
            <div className="w-full py-4 ">
                <Swiper
                    className="pb-[50px] px-[50px]"
                    modules={[Navigation, Scrollbar, A11y, Pagination, FreeMode]}
                    spaceBetween={50}
                    freeMode='true'
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                        last_blogs.map(
                            (blog, index) =>
                                <SwiperSlide key={index}>
                                    <LastBlogCard blog={blog} />
                                </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section >
    )
}

export default BlogScrollSection