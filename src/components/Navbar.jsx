import { useState } from 'react'
import { close, logo, menu, demoV } from '../assets'
import { navLinks } from '../constants'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex py-2 navbar relative z-[20]">
      <img src={logo} alt="bestpost" className='h-[52px] w-[35px]' />
      <h2 className={`self-center md:hidden px-2 text-gradient font-bold text-[25px]
      sm:text-[34px]`}>
        PestBost
      </h2>
      <ul className="list-none md:flex hidden justify-evenly items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 1 }}
            key={nav.id}
            className={`font-cairo font-medium cursor-pointer text-[30px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} hover:font-semibold`}
          >
            <Link to={nav.to}>
              {nav.title}
            </Link>
          </motion.li>
        ))}
      </ul>
      <img src={demoV} alt="Demo Video" className={`hidden md:flex cursor-pointer self-center w-[44px] h-[44px]`} />
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img src={demoV} alt="Demo Video" className={`cursor-pointer self-center w-[44px] h-[44px] mr-5`} />
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)} />
        <div className={`
        ${toggle ? 'flex' : 'hidden'}
        p-6 bg-blue-gradient-btn absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-[4px] sidebar`}>
          <ul className="list-none flex-col flex justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
              >
                <Link to={`${nav.to}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar