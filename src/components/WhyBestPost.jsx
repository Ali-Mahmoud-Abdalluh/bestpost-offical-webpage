import styles from "../style"
import { whybestpost } from "../constants"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import loadable from '@loadable/component'

const WhyBestPostCard = loadable(() => import('./WhyBestPostCard'))


const Portfolio = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <section className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} flex-col relative `}>
            {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" /> */}
            <div className="w-full flex justify-between items-center sm:mb-8 mb-1 relative z-[1]">
                <h2 className={`${styles.heading2} font-[48px] text-center`}>Why BestPost?</h2>
            </div>
            <div className="w-full py-4 ">
                <motion.div ref={carousel} className="carousel rounded-[10px]">
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel ">
                        {
                            whybestpost.map((reason) => (
                                <motion.div key={reason.number} className="ss:min-w-[50%] 
                                md:min-w-[32%]
                                min-w-[99%] bg-white  p-[20px] rounded-[10px] my-4  ">
                                    <WhyBestPostCard number={reason.number} content={reason.content} icon={reason.icon} />
                                    <div className="h-[full] w-[10px]" />
                                </motion.div>
                            ))
                        }
                        {
                            whybestpost.map((reason) => {
                                <div key={reason.number} className="w-[10px] h-[10px] bg-red-500 rounded-full"></div>
                            })
                        }
                    </motion.div>
                </motion.div>
            </div>
        </section >
    )
}

export default Portfolio