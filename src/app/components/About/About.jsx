"use client"
import React from 'react'
import CTA from '../CTA/CTA'
import Link from 'next/link'
// Framer Motion
import { motion } from 'framer-motion'
const About = () => {
    const skills = [
        "Html",
        "CSS",
        "Bootstrap",
        "Tailwind",
        "Javascript",
        "React",
        "Next",
        "Git",
        "Github",
        "Responsive Design",
        "Terminal",
        "PSD/XD",
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
    const scaleAnimationBtn = {
        initial: {
            y: '35%',
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 1.4,
            }
        }
    }
    return (
        <section id='about' className=' py-[50px] lg:py-[90px] xl:py-[115px] bg-[#fafafa]'>
            <div className="container">
                <div className="grid grid-cols-12 gap-y-10">
                    <div className="col-span-12">
                        <motion.h2 variants={scaleAnimationHeading} initial="initial" whileInView="animate" className="text-center text-[39px] font-bold sourceSans uppercase tracking-widest mb-8 relative text-[#111] before:content-[''] before:absolute before:bottom-[-20px] before:left-[50%] before:translate-x-[-50%] before:h-[5px] before:w-[30px] before:bg-[#7843E9] before:rounded-2xl">About Me</motion.h2>
                        <motion.p variants={scaleAnimationPara} initial="initial" whileInView="animate" className='text-[#333] text-center text-[16px] xl:text-[20px] leading-normal sourceSans lg:w-10/12 xl:w-8/12 xl:px-7 mx-auto mt-5 lg:mb-10 lg:mt-10 xl:mb-20'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</motion.p>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <motion.h3 variants={scaleAnimationHeading} initial="initial" whileInView="animate" className='sourceSans text-[30px] font-[700] mb-3 xl:mb-5'>Get to know me!</motion.h3>
                        <motion.p variants={scaleAnimationPara} initial="initial" whileInView="animate" className='text-[#666] text-[16px] xl:text-[18px] leading-normal sourceSans lg:w-11/12 2xl:pr-6 mb-3 xl:mb-5'>I&apos;m a <b>Frontend Focused Web Developer</b> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b> section.</motion.p>
                        <motion.p variants={scaleAnimationPara} initial="initial" whileInView="animate" className='text-[#666] text-[16px] xl:text-[18px] leading-normal sourceSans lg:w-11/12 2xl:pr-6 mb-3 xl:mb-5'>I also like sharing content related to the stuff that I have learned over the years in <b>Web Development</b> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <Link href="https://www.linkedin.com/in/sikander-rasheed-31436b240/" className='text-[#7843E9] font-bold underline'>Linkedin</Link> .</motion.p>
                        <motion.p variants={scaleAnimationPara} initial="initial" whileInView="animate" className='text-[#666] text-[16px] xl:text-[18px] leading-normal sourceSans lg:w-11/12 2xl:pr-6 mb-3 xl:mb-5'>I&apos;m open to <b>Job</b> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to <b>contact</b> me.</motion.p>
                        <motion.div className="btn pt-5" variants={scaleAnimationBtn} initial="initial" whileInView="animate">
                            <CTA text="Contact" href='tel:3180154438' clasName='bg-[#7843E9] text-white rounded-[5px] !px-[45px] !text-[17px]' />
                        </motion.div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <motion.h3 variants={scaleAnimationHeading} initial="initial" whileInView="animate" className='sourceSans text-[30px] font-[700] mb-3 xl:mb-5'>My Skills</motion.h3>
                        <ul className='flex items-center gap-4 flex-wrap 2xl:w-10/12'>
                            {skills.map((data, index) => (
                                <motion.li key={index} variants={scaleAnimationPara} initial="initial" whileInView="animate">
                                    <p className='text-[#666] text-[16px] font-[600] sourceSans bg-[#99999933] rounded-[5px] py-[10px] px-5'>{data}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
