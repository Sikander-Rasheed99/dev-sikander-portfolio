"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// Framer Motion
import { motion, AnimatePresence } from 'framer-motion'

const Contact = () => {
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
            y: "-50%",
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

    //========== Form
    const [ip, setIP] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('Submit');
    const [isDisabled, setIsDisabled] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    //========== Fetch IP data from the API
    const getIPData = async () => {
        try {
            const response = await fetch('https://ipinfo.io/?token=229b1c3fa2e54c');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setIP(data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };
    useEffect(() => {
        getIPData();
    }, []);

    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const formValidateHandle = () => {
        let errors = {};
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
        if (!data.phone.trim()) {
            errors.phone = "Phone number is required";
        } else if (!data.phone.match(phoneRegex)) {
            errors.phone = "Valid phone number is required";
        }
        return errors;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");
        setIsDisabled(true);
        const errors = formValidateHandle();
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            const currentdate = new Date().toLocaleString();
            const dataToSend = {
                ...data,
                IP: `${ip.country} - ${ip.city}`,
                currentdate: currentdate,
            };
            const JSONdata = JSON.stringify(dataToSend);
            try {
                //========== API call to your server which sends the email
                const res = await fetch('/api/email/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSONdata
                });

                if (!res.ok) {
                    throw new Error("Email failed to send");
                }

                setFormStatus("Submit");
                setIsDisabled(false);
                // Reset the form fields
                setData({ name: "", phone: "", email: "", message: "" });
                // Show the thank you popup
                setShowThankYou(true);
            } catch (error) {
                console.error('Error during form submission:', error);
                setFormStatus("Failed, try again");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Submit");
            setIsDisabled(false);
        }
    };

    return (
        <section id='contact' className='relative bg-[#f5f5f5cc] py-[50px] lg:py-[90px] xl:py-[115px]'>
            <Image src="https://www.rammaheshwari.com/assets/svg/common-bg.svg" alt='Background Image' fill={true} className='z-[-1] object-cover object-center' />
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt">
                            <motion.h2 variants={scaleAnimationHeading} initial="initial" whileInView="animate" className="text-center text-[39px] font-bold sourceSans uppercase tracking-widest mb-8 relative text-[#111] before:content-[''] before:absolute before:bottom-[-20px] before:left-[50%] before:translate-x-[-50%] before:h-[5px] before:w-[30px] before:bg-[#7843E9] before:rounded-2xl">Contact</motion.h2>
                            <motion.p variants={scaleAnimationPara} initial="initial" whileInView="animate" className="text-[#333] text-center text-[16px] xl:text-[20px] leading-normal sourceSans lg:w-10/12 xl:w-8/12 xl:px-7 mx-auto mt-5 mb-5 md:mb-10 lg:mt-10 xl:mb-20">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</motion.p>
                        </div>
                        <div className="form lg:w-9/12 xl:w-8/12 mx-auto md:px-6 sm:px-10 py-8 rounded-[5px]">
                            <form onSubmit={handleFormSubmit}>
                                <div className="name mb-5 relative sm:mb-10">
                                    <motion.label variants={scaleAnimationPara} initial="initial" whileInView="animate" htmlFor="name" className='block text-[#666] text-[15px] tracking-wider font-[700] sourceSans mb-2'>Name</motion.label>
                                    <motion.input variants={scaleAnimationHeading} initial="initial" whileInView="animate" type="text" name='name' value={data.name} autoComplete='off' placeholder='Enter Your Name' className='w-full text-[#333] h-[60px] border border-[#ebebeb] bg-white shadow-sm rounded-[5px] text-[16px] font-[600] sourceSans px-[14px] focus:outline-none' onChange={handleDataChange} required />
                                    {errors.name && (
                                        <span className="text-[12px] block p-2 font-sans font-medium text-accent absolute left-0 bottom-[-33%]">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>
                                <div className="email relative mb-5 sm:mb-10">
                                    <motion.label variants={scaleAnimationPara} initial="initial" whileInView="animate" htmlFor="email" className='block text-[#666] text-[15px] tracking-wider font-[700] sourceSans mb-2'>Email</motion.label>
                                    <motion.input variants={scaleAnimationHeading} initial="initial" whileInView="animate" type="email" name='email' value={data.email} autoComplete='off' placeholder='Enter Your Email' className='w-full text-[#333] h-[60px] border border-[#ebebeb] bg-white shadow-sm rounded-[5px] text-[16px] font-[600] sourceSans px-[14px] focus:outline-none' onChange={handleDataChange} required />
                                    {errors.email && (
                                        <span className="text-[12px] block p-2 font-sans font-medium text-accent absolute left-0 bottom-[-33%]">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                                <div className="phone relative mb-5 sm:mb-10">
                                    <motion.label variants={scaleAnimationPara} initial="initial" whileInView="animate" htmlFor="phone" className='block text-[#666] text-[15px] tracking-wider font-[700] sourceSans mb-2'>Phone Number</motion.label>
                                    <motion.input variants={scaleAnimationHeading} initial="initial" whileInView="animate" type="tel" name='phone' value={data.phone} autoComplete='off' placeholder='Enter Your Phone Number' className='w-full text-[#333] h-[60px] border border-[#ebebeb] bg-white shadow-sm rounded-[5px] text-[16px] font-[600] sourceSans px-[14px] focus:outline-none' onChange={handleDataChange} required />
                                    {errors.phone && (
                                        <span className="text-[12px] block p-2 font-sans font-medium text-accent absolute left-0 bottom-[-33%]">
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>
                                <div className="message mb-5 sm:mb-10">
                                    <motion.label variants={scaleAnimationPara} initial="initial" whileInView="animate" htmlFor="message" className='block text-[#666] text-[15px] tracking-wider font-[700] sourceSans mb-2'>Message</motion.label>
                                    <motion.textarea variants={scaleAnimationHeading} initial="initial" whileInView="animate" name='message' value={data.message} placeholder='Enter Your Message' rows={10} cols={30} onChange={handleDataChange} className='w-full text-[#333] border border-[#ebebeb] bg-white shadow-sm rounded-[5px] text-[16px] font-[600] sourceSans px-[14px] pt-[14px] focus:outline-none resize-none' ></motion.textarea>
                                </div>
                                <div className="btn">
                                    <motion.button disabled={isDisabled} variants={scaleAnimationBtn} initial="initial" whileInView="animate" type='submit' className='py-[15px] px-[50px] sm:px-[70px] w-full sm:w-max tracking-wider text-[16px] font-[700] shadow-xl duration-700 ease-in-out hover:translate-y-[-3px] sourceSans uppercase bg-[#7843E9] text-white rounded-[5px] ml-auto block sm:mb-3 disabled:opacity-60 disabled:cursor-not-allowed'>
                                        {formStatus}
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Thank You Popup ===== */}
            <AnimatePresence>
                {showThankYou && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-5"
                        onClick={() => setShowThankYou(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 30 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="bg-white rounded-[12px] shadow-2xl max-w-[420px] w-full text-center px-8 py-10 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowThankYou(false)}
                                className="absolute top-4 right-4 text-[#999] hover:text-[#333] text-[22px] leading-none"
                                aria-label="Close"
                            >
                                &times;
                            </button>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 15 }}
                                className="w-[70px] h-[70px] rounded-full bg-[#7843E9]/10 flex items-center justify-center mx-auto mb-6"
                            >
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 6L9 17l-5-5" stroke="#7843E9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.div>

                            <h3 className="text-[24px] font-bold sourceSans text-[#111] mb-3 uppercase tracking-wide">Thank You!</h3>
                            <p className="text-[#555] text-[15px] leading-relaxed sourceSans mb-7">
                                Your message has been sent successfully. I appreciate you reaching out and will get back to you as soon as possible.
                            </p>

                            <button
                                onClick={() => setShowThankYou(false)}
                                className="py-[12px] px-[40px] tracking-wider text-[15px] font-[700] sourceSans uppercase bg-[#7843E9] text-white rounded-[5px] hover:translate-y-[-2px] duration-300 ease-in-out"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Contact