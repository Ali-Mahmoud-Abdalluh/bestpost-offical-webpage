import React from 'react'
import { last_blogs } from '../constants'
import LastBlogCard from './LastBlogCard'
import styles from '../style'
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from 'react'

const BlogScrollSection = () => {
    const [cWidth, setCWidth] = useState(0)
    const carousel2 = useRef(null);
    useEffect(() => {
        setCWidth(carousel2.current.scrollWidth - carousel2.current.offsetWidth)
    }, [])

    return (
        <section className={`${styles.flexCenter} flex-col relative `}>
            <div className="w-full py-4 ">
                <motion.div ref={carousel2} className="carousel rounded-[10px]">
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -cWidth }} className="inner-carousel gap-4 flex flex-row items-center rounded-[10px]">
                        {
                            last_blogs.map((blog) => (
                                <motion.div key={blog.id} className={`ss:min-w-[50%] 
                                md:min-w-[32%]
                                min-w-[99%] bg-white rounded-[10px] my-4 max-h-[513px]`}>
                                    <LastBlogCard blog={blog} />
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </motion.div>
            </div>
        </section >
    )
}

export default BlogScrollSection