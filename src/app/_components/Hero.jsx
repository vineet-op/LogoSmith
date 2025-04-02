"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"

const Hero = () => {


    const router = useRouter();

    return (
        <section className="relative overflow-hidden h-screen py-20 md:py-36 bg-linear-to-r from-pink-200 via-purple-400 to-indigo-600 p-10">
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
                            <Button size="lg" onClick={() => router.push('/create')} className="text-white text-lg px-8 shadow-lg transition duration-300 ease-in-out hover:border-2 border-purple-400 ">
                                Create Your Logo
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary/30 text-lg px-8">
                                See Examples
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
                        className="relative mx-auto lg:mr-0"
                    >
                        <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-purple-700/30 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
                                <div className="relative w-full h-full p-6">
                                    <div className="absolute top-3 left-3 flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>

                                    <div className="bg-gray-800/80 rounded-xl shadow-lg p-6 mt-4 backdrop-blur-sm border border-purple-700/20">
                                        <div className="w-40 h-40 gradient-primary rounded-lg mx-auto mb-6 flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-4xl">SV</span>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="font-bold text-xl text-white">StellarVision</h3>
                                            <p className="text-sm text-purple-300/80">Technology & Innovation</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 justify-center mt-6">
                                        <div className="w-20 h-20 rounded-lg bg-purple-900/40 backdrop-blur-sm animate-pulse-slow border border-purple-700/30 shadow-lg"></div>
                                        <div className="w-20 h-20 rounded-lg bg-purple-800/40 backdrop-blur-sm animate-pulse-slow border border-purple-700/30 shadow-lg" style={{ animationDelay: "0.5s" }}></div>
                                        <div className="w-20 h-20 rounded-lg bg-purple-700/40 backdrop-blur-sm animate-pulse-slow border border-purple-700/30 shadow-lg" style={{ animationDelay: "1s" }}></div>
                                    </div>
                                </div>
                            </div>


                            <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-purple-500/10 animate-pulse-slow"></div>
                            <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-purple-700/20 animate-pulse-slow"></div>
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-40 rounded-full bg-gradient-to-b from-purple-600/30 to-transparent blur-md"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
