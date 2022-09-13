import React from 'react'
import styles from '../style'
import { hero_image } from '../assets'
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`relative flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-cario font-bold ss:font-semibold ss:text-[72px] text-[52px] text-[#061F37] ss:leading-[100px] leading-[75px] text-center sm:text-start z-[1]">
          The world of strength and creativity
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 z-[1]`}>
        This text is an example that can be replaced in the same space This text is an example that can be replaced in the same space.
      </p>

      <div className='w-[100%] ss:w-[800px] h-[667px] blue__gradient absolute rounded-full z-[0] rotate-45 ss:-left-[100px] absolute' />
    </div>
    <div className={`flex flex-1 self-end md:my-0 my-10 relative `}>
      <img src={hero_image} alt="draw" className='w-[100%] h-[100%] relative z-[2]' />
      <div className='absolute z-[1] w-[100%] h-[144px]  rounded-full -bottom-[40px] blue__gradient' /><div className='absolute z-[1] w-[372px] h-[372px] rounded-full -right-[180px] top-0 blue__gradient' />
    </div>
  </section>
)

export default Hero