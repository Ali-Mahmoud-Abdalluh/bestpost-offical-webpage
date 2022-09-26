import styles from "../style"
import loadable from '@loadable/component'
import { blogCoverImage } from "../assets"

const SideNavBlog = loadable(() => import('./SideNavBlog'))
const Navbar = loadable(() => import('./Navbar'))
const Footer = loadable(() => import('./Footer'))
const Search = loadable(() => import('./Search'))
const BlogScrollSection = loadable(() => import("./BlogScrollSection"))
const BlogList = loadable(() => import('./BlogList'))

const BlogPage = () => {
    return (
        <div className="bg-primary w-full overflow-hidden relative scrollbar-hide justify-center flex-col flex" >
            {/* Nav bar  */}
            <div className={`border-b-2 top-0 z-[40] ${styles.paddingX} ${styles.flexCenter} sticky top-0  relative z-[1000] h-[80px] `}>
                <div className={`${styles.boxWidth} relative `}>
                    <Navbar />
                </div>
                <div className='absolute h-[100%] w-[100%] blueorange__gradient m-auto left-0 right-0 top-0 bottom-0 -z-[1]' />
            </div>

            {/* Search Box */}
            <div className="absolute top-0 left-[50%] -translate-x-2/4 mt-[80px] z-[60]">
                <Search />
            </div>

            {/* Blog Hero section */}
            <div className={`${styles.flexStart} bg-primary z-[1]`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="w-full h-[600px]">
                        <img src={blogCoverImage} alt="cover image" className="w-full h-full" />
                    </div>
                </div>
            </div>

            {/* Last Blogs */}
            <div className={`relative ${styles.flexStart} px:0 md:px-10 bg-[#ffffff]`}>
                <div className={`${styles.boxWidth} relative z-[0]`}>
                    <BlogScrollSection />
                </div>
            </div>

            {/* blog List and sidebar*/}
            <div className={`relative ${styles.flexStart} px:0 md:px-10 bg-[#ffffff]`}>
                <div className={`${styles.boxWidth} relative z-[0] grid grid-cols-2 lg:grid-cols-3 gap-10`}>
                    <BlogList />
                    <SideNavBlog />
                </div>
            </div>


            {/* Footer Section */}
            <div className={`relative ${styles.flexStart} px:0 md:px-10 bg-[#082A4A] z-[1]`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>

            {/* Copyrights Section */}
            <div className={`${styles.flexStart} bg-primary z-[1]`}>
                <div className={`${styles.boxWidth}`}>
                    <div className='bg-[#061F37] w-full flex items-center justify-center h-[48px] xs:text-[16px] text-[14px] font-cairo font-[400] text-white'>@2022 جميع الحقوق محفوظة لدي بيست بوست</div>
                </div>
            </div>

        </div>
    )
}

export default BlogPage