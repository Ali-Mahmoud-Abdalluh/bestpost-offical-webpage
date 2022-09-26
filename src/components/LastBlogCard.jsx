
const LastBlogCard = ({ blog }) => {
    return (
        <div className='card flex flex-col items-center text-center overflow-hidden ss:items-start ss:text-start relative z-[1] rounded-[10px]'>
            <img src={blog.smallImage} alt="blog image" className={`card-image w-full h-full z-[0]  rounded-[10px] ease-out duration-300 `} />
            <div className='h-[50%] w-full absolute left-0 right-0 bottom-0        bg-gradient-to-b from-transparent to-[#0A345C] z-[2] rounded-[10px] pb-[45px]' />
            <div className='absolute bottom-[24px] min-w-full  p-[24px] z-[10] items-start rounded-[10px]'>
                <h2 className='rounded-[4px] inline-block py-[3px] px-[16px] bg-[#FCC320] font-bold font-[18px] leading-[33px]'>{blog.category}</h2>
                <p className='mt-[6px] font-normal text-[#ffffff] font-[24px] leading-[36px] '>{blog.shortDescription}</p>
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 min-w-full min-h-full z-[20]" />
        </div>
    )
}

export default LastBlogCard