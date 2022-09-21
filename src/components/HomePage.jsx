import styles from "../style"
import loadable from '@loadable/component'
const Navbar = loadable(() => import('./Navbar'))
const Stats = loadable(() => import('./Stats'))
const Services = loadable(() => import('./Services'))
const Hero = loadable(() => import('./Hero'))
const WhyBestPost = loadable(() => import('./WhyBestPost'))
const Footer = loadable(() => import('./Footer'))

const HomePage = () => {
    return (
        <div className="bg-primary w-full overflow-hidden relative scrollbar-hide" >

            {/* nav bar */}
            <div className={`border-b-2 top-0 z-[40] ${styles.paddingX} ${styles.flexCenter} sticky top-0  relative z-[2] h-[80px] `}>
                <div className={` ${styles.boxWidth}`}>
                    <Navbar />
                </div>
                <div className='absolute h-[100%] w-[100%] blueorange__gradient m-auto left-0 right-0 top-0 bottom-0 -z-[1]' />
            </div>

            {/* hero section and stats section */}
            <div className={`${styles.flexStart} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                    <Stats />
                </div>
            </div>

            {/* Services, why best post  Section */}
            <div className={`relative ${styles.flexStart} px:0 md:px-10 bg-blue-gradient`}>
                <div className={`${styles.boxWidth} relative z-[0]`}>
                    <Services />
                    <WhyBestPost />
                    <div className='absolute h-[100%] w-[100%] blueorange__gradient m-auto left-0 right-0 top-0 bottom-0 -z-[1]' />
                </div>
            </div>

            {/* Footer Section */}
            <div className={`relative ${styles.flexStart} px:0 md:px-10 bg-[#082A4A]`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>

            {/* Copyrights Section */}
            <div className={`${styles.flexStart} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <div className='bg-[#061F37] w-full flex items-center justify-center h-[48px] xs:text-[16px] text-[14px] font-cairo font-[400] text-white'>@2022 جميع الحقوق محفوظة لدي بيست بوست</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage