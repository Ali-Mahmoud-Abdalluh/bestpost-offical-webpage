import styles from "../style"
import { whybestpost } from "../constants"
import loadable from '@loadable/component'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const WhyBestPostCard = loadable(() => import('./WhyBestPostCard'))


const Portfolio = () => {
    return (
        <section className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} flex-col relative `}>
            <div className="w-full flex justify-between items-center sm:mb-8 mb-1 relative z-[1]">
                <h2 className={`${styles.heading2} font-[48px] text-center`}>Why BestPost?</h2>
            </div>
            <div className="w-full">
                <Swiper
                    className="pb-[50px] px-[50px]"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                        whybestpost.map(
                            (reason) =>
                                <SwiperSlide key={reason.number}><WhyBestPostCard number={reason.number} content={reason.content} icon={reason.icon} /></SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section >
    )
}

export default Portfolio