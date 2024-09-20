"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Framer Motion
import { motion } from 'framer-motion'
// Images
import Project1 from "media/project-1.png"
import Project2 from "media/project-2.png"
import Project3 from "media/project-3.png"
import Project4 from "media/project-4.png"
import Project5 from "media/project-5.png"
import Project6 from "media/project-6.png"
import Project7 from "media/project-7.png"
import Project8 from "media/project-8.png"
import Project9 from "media/project-9.png"
import Project10 from "media/project-10.png"
import Project11 from "media/project-11.png"
import Project12 from "media/project-12.png"

const Projects = () => {
    const project = [
        {
            href: 'https://swyftpos.com/',
            title: "SwyftPOS",
            desc: "SwyftPOS is a payment solutions website that modernizes transactions for businesses. ",
            projectImage: Project1
        },
        {
            href: 'https://infinity-animations.vercel.app/',
            title: "Infinity Animations",
            desc: "Infinity Animations is a creative platform for stunning animations and designs, built using frontend tools for streamlined design and responsiveness.",
            projectImage: Project3
        },
        {
            href: 'bitwits.vercel.app',
            title: "Bitswits",
            desc: "BitsWits offers innovative digital solutions, delivering efficient and high-quality user experiences with modern web technologies and design.",
            projectImage: Project4
        },
        {
            href: 'bookwritingexpert-nine.vercel.app',
            title: "BookWriting Experts",
            desc: "Book Writing Experts offers professional writing, editing, and publishing services to help authors turn ideas into polished, published works efficiently.",
            projectImage: Project5
        },
        {
            href: 'https://sikander-rasheed99.github.io/54_Health/home.html',
            title: "54 Health",
            desc: "54 Health Web is a dedicated platform for patients seeking high-quality medical care. It connects you directly with experienced doctors.",
            projectImage: Project2
        },
        {
            href: 'https://animating-studio-delta.vercel.app/',
            title: "Animating Studio",
            desc: "Animating Studio Delta provides dynamic, high-quality animations to enhance brand storytelling and visual engagement.",
            projectImage: Project6
        },
        {
            href: 'https://creative-logodesigns.vercel.app/',
            title: "Creative Logo Designs",
            desc: "Creative Logo Designs offers professional, high-quality logos to enhance business brand identity, with a range of creative options to suit client needs.",
            projectImage: Project7
        },
        {
            href: 'https://web-designhub.vercel.app/',
            title: "Web DesignHub",
            desc: "Web Design Hub offers expert web design services, creating modern, user-friendly websites to boost business online presence.",
            projectImage: Project8
        },
        {
            href: 'https://crystallite-clone.vercel.app/',
            title: "Crystallite",
            desc: "Crystallite Clone showcases a modern business website replica, featuring sleek design and professional elements for strong online presence.",
            projectImage: Project9
        },
        {
            href: 'https://expert-academic.netlify.app/',
            title: "Expert Acedmic",
            desc: "Expert Academic offers professional academic writing and research services, helping students and researchers achieve top-quality work.",
            projectImage: Project10
        },
        {
            href: 'https://sikander-rasheed.netlify.app/project/coffee-shop-website/',
            title: "Koppee | Coffee",
            desc: "This Coffee Shop website showcases a modern, user-friendly design for a café, featuring an appealing layout and easy navigation to enhance the customer experience.",
            projectImage: Project11
        },
        {
            href: 'https://sikander-rasheed.netlify.app/project/dental-clinic-website/',
            title: "DentCare Website",
            desc: "This Dental Clinic website features a clean, professional design with easy navigation, providing essential information and services to enhance patient experience and trust.",
            projectImage: Project12
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
    const [initialProjects, setInitialProjects] = useState(4);
    const [initialText, setInitialText] = useState("View More")

    const viewMoreToggler = () => {
        if (initialProjects < project.length) {
            setInitialProjects(prev => prev + 2);
            setInitialText("Loading....");

            setTimeout(() => {
                if (initialProjects + 2 >= project.length) {
                    setInitialText("No More Projects");
                } else {
                    setInitialText("View More")
                }

            }, 500);
        } else {
            setInitialText("No More Projects")
        }
    }
    return (
        <section id='projects' className='py-[50px] lg:py-[90px] xl:py-[115px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <motion.h2 variants={scaleAnimationHeading} initial="initial" whileInView="animate" className="text-center text-[39px] font-bold sourceSans uppercase tracking-widest mb-8 relative text-[#111] before:content-[''] before:absolute before:bottom-[-20px] before:left-[50%] before:translate-x-[-50%] before:h-[5px] before:w-[30px] before:bg-[#7843E9] before:rounded-2xl">Projects</motion.h2>
                        <motion.p variants={scaleAnimationPara} initial="initial" whileInView="animate" className="text-[#333] text-center text-[16px] xl:text-[20px] leading-normal sourceSans lg:w-10/12 xl:w-8/12 xl:px-7 mx-auto mt-5 mb-10 lg:mt-10 xl:mb-20">Here you will find some of the personal and clients projects that I created with each project containing its own case study</motion.p>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-4 lg:gap-10 [&:not(:last-child)]:mb-8 sm:[&:not(:last-child)]:mb-12 md:[&:not(:last-child)]:mb-20 lg:[&:not(:last-child)]:mb-28">
                    {project.slice(0, initialProjects).map((data, index) => (
                        <motion.div key={index} variants={scaleAnimationHeading} initial="initial" whileInView="animate">
                            <div className="relative overflow-hidden group">
                                <Image src={data.projectImage} alt='Project' />
                                <div className='scale-0 opacity-0 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] group-hover:scale-100  group-hover:opacity-100 group-hover:duration-700 ease-in-out duration-700 w-full h-full '>
                                    <div className="txt text-center relative z-10 flex flex-col items-center justify-center h-full">
                                        <p className='text-white text-[13px] lg:text-[16px] leading-snug sourceSans mb-3 xl:mb-7 w-8/12'>{data.desc}</p>
                                        <Link href={data.href} className='text-white text-[13px] lg:text-[16px] font-medium leading-snug sourceSans mb-3 xl:mb-7 flex items-center gap-x-2'>
                                            View Site
                                            <div className="icon hover:translate-x-[10px] hover:duration-700 duration-700 ease-in-out">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="overlay absolute bg-black/70 top-[43%] left-[51.6%] translate-x-[-52%] translate-y-[-45%] w-[76%] h-[80%] mx-auto z-0"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <button onClick={viewMoreToggler} className='py-[15px] px-[50px] sm:px-[80px] tracking-wider text-[16px] md:text-[20px] block font-[700] shadow-xl duration-700 ease-in-out hover:translate-y-[-3px] sourceSans uppercase bg-[#7843E9] text-white rounded-[5px] mx-auto w-max'>{initialText}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
