"use client"
import React from 'react'
import Link from 'next/link'
// Icons
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa'
// Framer Motion
import { delay, motion } from 'framer-motion'

const Footer = () => {
    const social_icons = [
        {
            href: "https://www.linkedin.com/in/sikander-rasheed-31436b240/",
            icon: <FaLinkedinIn className='text-[25px]' />,
        },
        {
            href: "https://github.com/Sikander-Rasheed99",
            icon: <FaGithub className='text-[25px]' />,
        },
        {
            href: "tel:3180154438",
            icon: <FaPhone className='text-[20px]' />,
        },
        {
            href: "mailto:sikanderb069@gmail.com",
            icon: <FaEnvelope className='text-[22px]' />,
        },
    ]
    const scaleAnimationHeading = {
        initial: {
            y: "-35%",
            opacity: 0,
        },
        animate: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 1.4,
            }
        }
    }
    const scaleAnimationPara = {
        initial: {
            y: "35%",
            opacity: 0,
        },
        animate: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 1.4,
            }
        }
    }
    const socialIconAnimation = {
        initial: {
            y: '100%',
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            }
        }
    }
    const staggerAnimation = {
        animate: {
            transition: {
                staggerChildren: 0.3,
            }
        }
    }
    return (
        <>
            <section className='bg-[#000]'>
                <div className="container">
                    <div className="grid grid-cols-12 border-b border-b-[#444] py-[50px] lg:py-[90px]">
                        <div className="col-span-12">
                            <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-10 sm:gap-0">
                                <div className="txt">
                                    <motion.h2 variants={scaleAnimationHeading} initial="initial" whileInView="animate" className='text-[18px] font-[700] sourceSans text-white tracking-[0.7px] uppercase hover:text-[#cecece] hover:duration-700 duration-700 ease-in-out mb-3'>Sikander Rasheed.</motion.h2>
                                    <motion.p variants={scaleAnimationPara} initial="initial" whileInView="animate" className='text-white text-[13px] lg:text-[16px] leading-normal sourceSans lg:w-7/12 lg:pr-10'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</motion.p>
                                </div>
                                <div className="socials">
                                    <motion.h3 variants={scaleAnimationHeading} initial="initial" whileInView="animate" className='text-[18px] font-[700] text-white tracking-[0.7px] uppercase hover:text-[#cecece] hover:duration-700 duration-700 ease-in-out mb-3'>Social</motion.h3>
                                    <motion.div variants={staggerAnimation} initial="initial" whileInView="animate" className="flex items-center sm:justify-center gap-5">
                                        {social_icons.map((data, index) => (
                                            <motion.div key={index} variants={socialIconAnimation}>
                                                <Link href={data.href} className='block rounded-lg text-white'>
                                                    {data.icon}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Copy Right */}
            <footer className='py-[30px] bg-black'>
                <motion.p variants={scaleAnimationPara} initial="initial" whileInView="animate" className='text-center text-sm text-[#eee] text-[12px] sourceSans'>© Copyright 2024 . Made by <Link href="#banner" className='underline font-bold'>Sikander R.</Link></motion.p>
            </footer>
        </>
    )
}

export default Footer
