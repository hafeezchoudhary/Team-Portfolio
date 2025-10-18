"use client";
import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiSend, FiPhone } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const data = {
            name: form.current.name.value,
            email: form.current.email.value,
            about_text: form.current.about_text.value,
            message_text: form.current.message_text.value
        };

        try {
            const res = await fetch("api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if (res.ok) {
                form.current.reset();
                toast.success(result.message || "Message sent successfully! ✅");
            } else {
                toast.error(result.error || "Failed to send message!");
            }
        } catch (err) {
            console.error("Backend send error:", err);
            toast.error("Failed to send message, try again!");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <div id="contact" className="scroll-mt-20 flex flex-col items-center min-h-screen px-4 py-10 bg-[#060a16]">
                <ToastContainer position='top-right' theme='dark' autoClose={2000} />
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto px-2">
                        Ready to start your next project? Let's discuss how we can help you build secure, innovative solutions that exceed your expectations.
                    </p>
                </div>

                <div className="py-16 px-4 text-white">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Left Side */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold">Let's Connect</h2>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-[#11161E] ">
                                    <MdEmail className="text-xl text-[#2BC4F3]" />
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p style={{ color: "#9CA3AF" }}>ss23if022@gmail.com</p>
                                </div>
                            </div>
                            {/* <div className="flex items-center gap-3">
                                <div className="p-3 rounded-lg bg-[#11161E]">
                                    <FiPhone className="text-xl text-[#2BC4F3]" />
                                </div>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p className='text-[#9CA3AF]'>null</p>
                                </div>
                            </div> */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-[#11161E]">
                                    <MdLocationOn className="text-xl text-[#2BC4F3]" />
                                </div>
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className='text-[#9CA3AF]'>Mumbai, IND</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-xl space-y-2" style={{ backgroundColor: "#121820" }}>
                                <div className="flex items-center gap-3">
                                    <BiMessageSquareDetail className="text-2xl" style={{ color: "#2BC4F3" }} />
                                    <p className="font-semibold">Quick Response</p>
                                </div>
                                <p className='text-[#9CA3AF]'>
                                    We typically respond to all inquiries within 24 hours during business days.
                                </p>
                                <div className="flex gap-10 text-sm mt-3">
                                    <div>
                                        <p className="font-semibold">Response Time</p>
                                        <p className='text-[#9CA3AF]'>&lt; 24 hours</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Availability</p>
                                        <p className='text-[#9CA3AF]'>Mon - Fri, 9AM - 6PM PST</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 rounded-xl space-y-2" style={{ backgroundColor: "#121820" }}>
                                <div className="flex items-center gap-3">
                                    <PiNotePencilBold className="text-2xl" style={{ color: "#2BC4F3" }} />
                                    <p className="font-semibold">Note : </p>
                                </div>
                                <p className='text-red-400'>
                                    phone number is not available right now, but you can reach out via email or the contact form on the side.
                                    {/* <p className='text-[#9CA3AF]'>We look forward to hearing from you!</p> */}
                                </p>
                                
                            </div>
                            
                        </div>

                        {/* Right Side */}
                        <div className="p-6 rounded-xl" style={{ backgroundColor: "#121820" }}>
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form ref={form} onSubmit={sendEmail} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        required
                                        type="text"
                                        name='name'
                                        placeholder="Your full name"
                                        className="w-full p-3 rounded-md focus:outline-none bg-[#0B0F18] text-white" />
                                    <input
                                        required
                                        type="email"
                                        name='email'
                                        placeholder="your.email@example.com"
                                        className="w-full p-3 rounded-md focus:outline-none bg-[#0B0F18] text-white" />
                                </div>
                                <input
                                    required
                                    type='text'
                                    name='about_text'
                                    placeholder="What's this about?"
                                    className="w-full p-3 rounded-md focus:outline-none bg-[#0B0F18] text-white" />
                                <textarea
                                    required
                                    name='message_text'
                                    placeholder="Tell us about your project or question..."
                                    rows="4"
                                    className="w-full p-3 rounded-md focus:outline-none bg-[#0B0F18] text-white">
                                </textarea>
                                <button
                                    disabled={isSending}
                                    type="submit"
                                    className={`flex items-center justify-center gap-2 w-full font-semibold py-3 rounded-lg transition-colors ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-[#2BC4F3] text-black"}`}
                                >
                                    {isSending ? "Sending..." : (<><FiSend /> Send Message</>)}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
