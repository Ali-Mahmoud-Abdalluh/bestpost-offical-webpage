import { useState } from 'react'
import { motion } from "framer-motion"
import {
    arrowDown,
    footerlogo,
    lang,
    changeArrow,
    logo_bottom,
} from '../assets'
import { allServices, aboutCompany, socialMediaLinks } from '../constants'
import loadable from '@loadable/component'

const EmailNews = loadable(() => import('./EmailNews'))
const ServicesLinks = loadable(() => import('./ServicesLinks'))

const Footer = () => {
    const [servisesDropDown, setServisesDropDown] = useState(false);
    const [aboutCompanyDropDown, setAboutCompanyDropDown] = useState(false);
    return (
        <footer className='bg-[#082A4A] w-full flex flex-col justify-center'>
            <EmailNews />
            <div className='flex-col flex gap-2 sm:flex-row sm:justify-between lg:justify-auto'>
                <div className='flex flex-col gap-2 lg:flex-row lg:justify-between w-[100%]'>
                    <div className='flex-wrap flex-1 lg:flex-0 lg:justify-between'>
                        <h2 className={`mx-2 sm:border-0 text-white text-[20px] font-bold leading-[67px] rounded-[4px] px-2 border-2 sm:text-start flex justify-between`} onClick={() => { setServisesDropDown(!servisesDropDown) }}>Our Services<span className='self-center px-2 sm:hidden'><img src={arrowDown} className="w-[32px] h-[32px]" alt="arrow down" /></span></h2>
                        <div className={`${servisesDropDown ? 'flex' : "hidden"}  grid sm:grid gap-1 sm:grid-cols-2 lg:gap-x-10
                        `}>
                            {allServices.map((service) => (
                                <ServicesLinks key={service.name} link={service.link} name={service.name} condition={false} />
                            ))}
                        </div>
                    </div>
                    <div className='hidden min-h-[320px] w-[2px] rounded-full bg-white my-[50px] lg:flex lg:ml-[60px]' />
                    <div className='min-w-full h-[1px]  px-[50px] rounded-full bg-white my-[2px] lg:hidden' />
                    <div className='flex-wrap flex-1 lg:flex-0'>
                        <h2 className={`mx-2 text-white text-[20px] font-bold leading-[67px] lg:leading-[67px] sm:leading-[30px] rounded-[4px] px-2 border-2 sm:text-start flex justify-between sm:border-0 sm:pointer-default sm:my-0`} onClick={() => { setAboutCompanyDropDown(!aboutCompanyDropDown) }}>About Company<span className='self-center px-2 sm:hidden'><img src={arrowDown} className="w-[32px] h-[32px]" alt="arrow down" /></span></h2>
                        <div className={`${aboutCompanyDropDown ? 'flex' : "hidden"} sm:grid grid grid-cols-1 
                        gap-x-3 gap-y-2 sm:grid-cols-2 lg:flex lg:flex-col`}>
                            {aboutCompany.map((item) => (
                                <ServicesLinks key={item.name} link={item.link} name={item.name} condition={true} />
                            ))}
                        </div>
                    </div>
                    <iframe className='max-w-full sm:max-w-[370px] w-full max-h-[370px] min-h-[350px] sm:min-w-[350px]  rounded-[10px] self-end
                sm:self-start sm:mt-5 hidden lg:flex' title='google map location: Sadat City - Aser Mall - Next to the sixth district post office' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1349.9225604474625!2d30.523723062797014!3d30.37025755355411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458bfd21787a33b%3A0xd832146ba1c61a63!2z2KfYs9ixINmF2YjZhA!5e1!3m2!1sar!2seg!4v1662926467698!5m2!1sar!2seg" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <iframe className='max-w-full sm:max-w-[370px] inline-block w-full max-h-[370px] min-h-[350px] sm:min-w-[350px]  rounded-[10px] self-end
                sm:self-center sm:mt-5 lg:hidden' title='google map location: Sadat City - Aser Mall - Next to the sixth district post office' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1349.9225604474625!2d30.523723062797014!3d30.37025755355411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458bfd21787a33b%3A0xd832146ba1c61a63!2z2KfYs9ixINmF2YjZhA!5e1!3m2!1sar!2seg!4v1662926467698!5m2!1sar!2seg" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='justify-center flex gap-x-4 my-[48px]'>
                <img src={footerlogo} alt="logo" className='hidden xs:flex w-[197.79px] h-[64px]' />
                <img src={logo_bottom} alt="logo" className='w-[42px] h-[64px] xs:hidden' />
                <div className='flex flex-row justify-between items-center py-[4px] border-2 rounded-[4px] border-white p-[14.5px] cursor-pointer'>
                    <img src={lang} alt="language icon" className='w-[24px] h-[24px]' />
                    <p className='leading-[45px] text-[24px] font-normal text-white ml-[12px] mr-[24px]'>English</p>
                    <img src={changeArrow} alt="change language icon" className='w-[12px] h-[25px]' />
                </div>
            </div>

            <div className='flex flex-col xs:flex-row  items-center justify-between mb-[68px] gap-y-5'>
                <div className='sm:min-w-[270px] min-w-[60px]  w-auto h-[2px] bg-gray-400 '></div>
                <div className='flex-row flex justify-evenly w-full '>
                    {
                        socialMediaLinks.map((link) => (
                            <motion.a whileHover={{ scale: 1.4 }} initial={{ scale: 1 }} href={link.link} key={link.platform} target="_blank"><img src={link.icon} alt={`${link.platform} icon`} className="w-[32px] h-[32px] sm:h-[48px] sm:w-[48px] rounded-full" /></motion.a>
                        ))
                    }
                </div>
                <div className='sm:min-w-[270px] min-w-[60px] h-[2px] bg-gray-400'></div>
            </div>
        </footer >
    )
}

export default Footer