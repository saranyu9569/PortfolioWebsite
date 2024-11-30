"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function ParallaxText({ children }) {
  return (
    <div className="overflow-hidden whitespace-nowrap relative pl-1/3">
      <motion.div
        className="inline-block text-6xl font-bold"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          },
        }}
      >
        {children.repeat(10)}
      </motion.div>
    </div>
  );
}

export default function Banner() {
  return (
    <div className="py-8 relative">
      <div className="absolute top-0 left-0 w-3/4 ml-20 sm:ml-24 md:ml-24 lg:w-2/3 h-full bg-white z-10 ml-15 rounded-md pt-10"> {/*White box */}
        <div className="text-black text-6xl font-bold p-10 pt-24">
          <Typewriter
            words={["Hello", "ようこそ", "สวัสดีครับ"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
          <h1 className="pt-8 text-3xl">Welcome to my Portfolio!</h1>
        </div>
      </div>
      <section className="space-y-10 mb-10 ml-1/3 mt-6">
        <ParallaxText baseVelocity={-10}> Saranyu Takayama</ParallaxText>
        <ParallaxText baseVelocity={2}> ศรัณยู ทาคายามะ</ParallaxText>
        <ParallaxText baseVelocity={5}>　サラニュ 高山</ParallaxText>
      </section>
    </div>
  );
}
