"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CTA from '../CTA/CTA'
// Icons
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
// Framer Motion
import { animate, motion } from 'framer-motion'

const Hero = () => {
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
    const scaleAnimationBtn = {
        initial: {
            // scale: 0.8,
            y: '35%',
            opacity: 0,
        },
        animate: {
            // scale: 1,
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 1.4,
            }
        }
    }
    const scaleAnimation = {
        initial: {
            scale: 0.6,
            opacity: 0,
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.4,
            }
        }
    }
    const socialIconAnimation = {
        initial: {
            x: '-100%',
            opacity: 0,
        },
        animate: {
            x: 0,
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
    const social_icons = [
        {
            href: "https://www.linkedin.com/in/sikander-rasheed-31436b240/",
            icon: <FaLinkedin className='text-[30px]' />,
        },
        {
            href: "https://github.com/Sikander-Rasheed99",
            icon: <FaGithub className='text-[30px]' />,
        },
        {
            href: "tel:3180154438",
            icon: <FaPhone className='text-[23px]' />,
        },
        {
            href: "mailto:sikanderb069@gmail.com",
            icon: <FaEnvelope className='text-[25px]' />,
        },
    ]
    const textSlider = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 55,
            }
        }
    }
    return (
        <section id='banner' className='relative bg-[#f5f5f5cc] py-[90px] lg:py-[120px] xl:py-[180px] flex items-center justify-center overflow-hidden'>
            <Image src="https://www.rammaheshwari.com/assets/svg/common-bg.svg" alt='Background Image' fill={true} className='z-[-1] object-cover object-center' />
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt text-center">
                            <motion.h1 variants={scaleAnimationHeading} initial="initial" whileInView="animate" className='text-3xl sm:text-4xl lg:text-6xl tracking-wider font-[800] text-[#111] uppercase sourceSans'>
                                Hey, I&apos;m Sikander Rasheed
                            </motion.h1>
                            <motion.p variants={scaleAnimationPara} initial="initial" whileInView="animate" className='text-[#333] text-[16px] sm:text-[18px] lg:text-[22px] leading-normal sourceSans lg:w-10/12 xl:w-7/12 mx-auto my-5 lg:my-10'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</motion.p>
                        </div>
                        <motion.div variants={scaleAnimationBtn} initial="initial" whileInView="animate" className="btn flex items-center justify-center">
                            <CTA href='#projects' text="Projects" clasName='bg-[#7843E9] text-white rounded-[5px]' />
                        </motion.div>
                        <motion.a variants={scaleAnimation} initial="initial" whileInView="animate" href="#about" className='absolute bottom-[10px] left-[50%] translate-x-[-50%]'>
                            <div className="mouse relative w-[25px] h-[40px] border-2 border-[#333] rounded-[60px] overflow-hidden before:content-[''] before:absolute before:top-[7px] before:left-[50%] before:translate-x-[-50%] before:bg-[#333] before:w-[5px] before:h-[5px] before:rounded-full before:opacity-[1]">
                            </div>
                        </motion.a>
                    </div>
                </div>
            </div>
            <motion.div variants={staggerAnimation} initial="initial" whileInView="animate" className="social_icons bg-white h-max py-[20px] px-[6px] rounded-r-lg shadow-lg absolute left-0 hidden md:flex flex-col items-center gap-4">
                {social_icons.map((data, index) => (
                    <motion.div key={index} variants={socialIconAnimation}>
                        <a href={data.href} className='p-[10px] w-full h-full block rounded-lg hover:bg-[#7843e933] hover:duration-700 duration-700 ease-in-out'>
                            {data.icon}
                        </a>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div variants={textSlider} initial="initial" animate="animate" className='w-full absolute bottom-[-35px] z-0 opacity-5 md:block hidden'>
                <h2 className='text-[15px] lg:text-[25vh] font-bold sourceSans whitespace-nowrap'>Sikander Rasheed. Frontend Web Developer</h2>
            </motion.div>
        </section>
    )
}

export default Hero
