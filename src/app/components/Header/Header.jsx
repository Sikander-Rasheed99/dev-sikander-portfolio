"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
// Icons
import { FaAlignRight } from "react-icons/fa";
// Images
import LogoImage from "media/my-image.png"
import Link from 'next/link'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navToggle = () => {
        setIsOpen(!isOpen);
    }

    const lists = [
        {
            text: "Home",
            href: "#banner"
        },
        {
            text: "About",
            href: "#about"
        },
        {
            text: "Projects",
            href: "#projects"
        },
        {
            text: "Contact",
            href: "#contact"
        },
    ]
    return (
        <>
            <motion.header initial={{ opacity: 0, y: "-20%", }} animate={{ opacity: 1, y: "0" }} transition={{
                duration: 1,
                delay: 0.5,
            }} className='pt-5 pb-5 bg-white relative'>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="logo">
                            <Link href="#href" className="logo flex items-center gap-x-2 group">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#7843E9] flex items-center justify-center" >
                                    <Image src={LogoImage} alt='Sikander Rasheed' className='object-cover pt-4 pl-1' />
                                </div>
                                <p className='text-[18px] font-[700] sourceSans tracking-[0.7px] uppercase group-hover:text-[#7843E9] group-hover:duration-700 duration-700 ease-in-out'>Sikander R.</p>
                            </Link>
                        </div>
                        <div className="lists md:block hidden">
                            <ul className='flex items-center justify-between gap-10 lg:gap-16'>
                                {lists.map((data, index) => (
                                    <li key={index}>
                                        <Link href={data.href} className='text-[16px] text-[#333] sourceSans font-[700] uppercase tracking-[0.7px] hover:text-[#7843E9] hover:duration-700 duration-700 ease-in-out'>
                                            {data.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hamburger md:hidden block">
                            <button onClick={navToggle}>
                                {isOpen ?
                                    <>
                                        <span className='bg-black h-[4px] w-[40px] rounded-sm absolute right-[10px] top-[50%] translate-y-[-50%] rotate-[45deg] duration-700 ease-in-out'></span>
                                        <span className='bg-black h-[4px] w-[40px] rounded-sm absolute right-[10px] top-[50%] translate-y-[-50%] rotate-[-45deg] duration-700 ease-in-out'></span>
                                    </> :
                                    <>
                                        <span className='bg-black h-[4px] w-[40px] rounded-sm absolute right-[20px] top-[40%] duration-700 ease-in-out'></span>
                                        <span className='bg-black h-[4px] w-[30px] rounded-sm absolute right-[20px] top-[50%] duration-700 ease-in-out'></span>
                                        <span className='bg-black h-[4px] w-[40px] rounded-sm absolute right-[20px] top-[60%] duration-700 ease-in-out'></span>
                                    </>}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>
            {/* Mobile Menus */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-col bg-white overflow-hidden shadow-xl'
                    >
                        <div className="container">
                            {lists.map((data, index) => (
                                <li key={index} className='[&:not(:last-child)]:border-b-2 border-dashed [&:not(:last-child)]:border-b-black h-[80px] flex items-center'>
                                    <Link href={data.href} className='text-[18px] text-[#333] sourceSans font-[700] uppercase tracking-[0.7px] hover:text-[#7843E9] hover:duration-700 duration-700 ease-in-out'>
                                        {data.text}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </motion.ul>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header
