import React from 'react'
import styles from '../style'
import { email } from '../assets'

const EmailNews = () => {
    return (
        <div className={`flex flex-col text-white items-center bg-sky-900 rounded-[10px] p-4 m-4 md:mx-0 sm:flex-row  ss:gap-4 justify-center sm:py-[60px] lg:mt-20`}>
            <p className='text-[20px] sm:text-[25px] sm:font-semibold md:text-[30px] md:font-medium font-bold text-center'>Subscribe to the newsletter</p>
            <form className=''>
                <div className='flex flex-col-reverse gap-4 my-2 xs:flex-row-reverse sm:flex-row'>
                    <button className='xs:w-[30%] bg-white text-[#061F37] rounded-[4px] text-[20px] md:text-[30px] py-[6px] px-[15px] md:px-[30px] text-center leading-[36px]  '>Subscribe</button>
                    <div className='relative'>
                        <img src={email} alt="mail icon" className='absolute w-[24px] h-[24px] top-[50%]
                    translate-y-[-50%] ml-2 sm:ml-3 md:ml-4' />
                        <input type="email" className='py-[14px] bg-sky-800 pl-[40px] rounded-[4px] md:px-[50px] sm:px-[45px]
                        w-full border-2 border-gray-400 md:text-[25px]' placeholder='Type your email here' required />
                    </div>
                </div>
            </form>
        </div >
    )
}

export default EmailNews