import React from 'react'
import styles from "./style"
import loadable from '@loadable/component'

const Navbar = loadable(() => import('./components/Navbar'))
const Stats = loadable(() => import('./components/Stats'))
const Services = loadable(() => import('./components/Services'))
const Hero = loadable(() => import('./components/Hero'))
const WhyBestPost = loadable(() => import('./components/WhyBestPost'))
const Footer = loadable(() => import('./components/Footer'))

const App = () => (
  <div className="bg-primary w-full overflow-hidden relative scrollbar-hide" >
    <div className={`border-b-2 top-0 z-[40] ${styles.paddingX} ${styles.flexCenter} sticky top-0  relative z-[2] `}>
      <div className={` ${styles.boxWidth}`}>
        <Navbar />
      </div>
      <div className='absolute h-[100%] w-[100%] blueorange__gradient m-auto left-0 right-0 top-0 bottom-0 -z-[1]' />
    </div>
    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Stats />
      </div>
    </div>

    <div className={`relative ${styles.flexStart} px:0 md:px-10 bg-blue-gradient`}>
      <div className={`${styles.boxWidth} relative z-[0]`}>
        <Services />
        <WhyBestPost />
        <div className='absolute h-[100%] w-[100%] blueorange__gradient m-auto left-0 right-0 top-0 bottom-0 -z-[1]' />
      </div>
    </div>
    <div className={`relative ${styles.flexStart} px:0 md:px-10 bg-[#082A4A]`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <div className='bg-[#061F37] w-full flex items-center justify-center h-[48px] xs:text-[16px] text-[14px] font-cairo font-[400] text-white'>@2022 جميع الحقوق محفوظة لدي بيست بوست</div>
      </div>
    </div>
  </div>
)

export default App