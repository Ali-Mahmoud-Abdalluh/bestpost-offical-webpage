import React from 'react'
import { arrow } from '../assets'
import styles from '../style'

const ServicesCard = ({ title, description, icon }) => (
    <figure className={`${styles.marginY} flex flex-col sm:flex-row sm:max-w-[50%] md:max-w-[40%]`}>
        <figcaption className="flex items-center flex-col  sm:flex-row flex-1">
            <img src={icon} alt="icon" className=" flex self-center w-[96px] h-[96px] self-start rounded-full object-cover" />
            <div className={`${styles.padding / 2} text-center flex flex-col justify-center sm:text-start`}>
                <div className={`${styles.heading4}`}>
                    {title}
                </div>
                <div className={`w-full sm:w-[250px] mt-0.5 sm:ml-1 px-2`}>{description}
                </div>
                <img src={arrow} alt="Navigate the servcie" className='w-[24px] h-[12px] 
                self-center sm:self-start sm:my-5 sm:mx-4 rotate-180 m-1' />
            </div>

        </figcaption>
    </figure>
)

export default ServicesCard