"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import React from "react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();

    return (
        <main>
            <div className="relative flex h-screen w-screen justify-center overflow-hidden rounded-lg bg-black p-20 md:shadow-xl">
                <DotPattern className="absolute inset-0 opacity-20" />
                <div className="flex flex-col items-center gap-4 z-10">
                    <h1 className="text-white text-6xl  font-bold pt-44 text-center font-mono">
                        LogoSmith AI
                    </h1>
                    <AnimatedShinyText
                        shimmerWidth={100}
                        className="inline-flex items-center justify-center px-4  py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                    >
                        <div className="whitespace-nowrap text-lg  px-0.5 text-neutral-100 font-mono text-center">✨ Unleash your brand's identity with custom AI logos.</div>
                    </AnimatedShinyText>

                    <Button
                        aria-label="Create a logo"
                        onClick={() => router.push("/create")}
                        className="py-5 bg-purple-400 font-mono hover:bg-purple-300 w-44 lg:w-full text-black mt-10 text-md "
                    >
                        Create
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-0 text-white w-full flex justify-center items-center text-center cursor-pointer ">
                <a href="https://www.github.com/vineet-op" className="font-extralight text-base hover:text-purple-300">Created with patience 😴 @Vineet</a>
            </div>
        </main>
    );
};

export default Hero;
