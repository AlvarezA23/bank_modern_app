import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {

const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={ logo } alt="logo" className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>

        {navLinks.map((link, index) => (
          <li key={link.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}>
            <a href={`#${link.id}`}> {link.title} </a>
          </li>
        ))}
       
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={ toggle ? close : menu } alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prevState) => !prevState)} />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex justify-end items-center flex-1 flex-col'>
            {navLinks.map((link, index) => (

              <li key={link.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}>
                <a href={`#${link.id}`}> {link.title} </a>
              </li>

            ))}
          </ul>
          </div>
      </div>

    </nav>
  )
}

export default Navbar