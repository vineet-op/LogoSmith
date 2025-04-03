"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"
import Image from "next/image";

const Hero = () => {


    const router = useRouter();

    return (
        <section className="relative overflow-x-hidden h-screen py-20 md:py-36 bg-linear-to-r from-pink-200 via-purple-400 to-indigo-600 p-10">
            {/* Background gradient elements */}
            <div className="absolute top-10 -left-20 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full filter blur-[100px] opacity-70" />
            <div className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-purple-400/20 rounded-full filter blur-[100px] opacity-70" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-800/10 rounded-full filter blur-[100px] opacity-50" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="inline-block px-4 py-1 rounded-full bg-white text-purple-500 text-sm font-medium mb-4 border border-purple-700/30"
                            >
                                AI-Powered Logo Creation
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
                            >
                                Create stunning logos with <span className="gradient-text font-extrabold text-purple-300">AI technology</span>
                            </motion.h1>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg text-muted-foreground max-w-md leading-relaxed"
                        >
                            Answer a few simple questions about your brand and our AI will generate beautiful, unique logos tailored to your business.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 mt-2"
                        >
                            <Button size="lg" onClick={() => router.push('/create')} className="text-white text-lg px-8 shadow-lg transition duration-300 bg-purple-500 ease-in-out hover:border-2 border-purple-400 ">
                                Create Your Logo
                            </Button>

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex items-center gap-3 text-sm text-muted-foreground mt-4"
                        >
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <div className="size-52 rounded-xl">
                                <Image src="/adidas.jpg" alt="Image 1" width={500} height={500} className="rounded-xl  " />
                            </div>
                            <div className="size-52 rounded-xl">
                                <Image src="/ghost.jpg" alt="Image 2" width={500} height={500} className="rounded-xl" />
                            </div>
                        </div>
                        <div className="flex gap-2 justify-center mt-2 items-center">
                            <div className="size-52 rounded-xl">
                                <Image src="/X.jpg" alt="Image 3" width={500} height={500} className="rounded-xl w-full lg:h-[210px] 
                                h-[185px]" />
                            </div>
                            <div className="size-52 rounded-xl">
                                <Image src="/Ikea.jpg" alt="Image 4" width={500} height={500} className="rounded-xl" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
