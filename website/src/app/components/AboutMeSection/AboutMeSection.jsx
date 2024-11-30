import React from 'react'
import Image from 'next/image'
import Profile from '../../../../public/Profile.JPG'

function AboutMeSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 mt-24 xl:mt-32">
      {/* Left side - Text */}
      <div className="w-full md:w-1/2 pr-4 ml-8 md:ml-16 lg:ml-30 2xl:ml-36">
        <h1 className="text-3xl font-bold mb-2 text-center md:text-left lg:text-5xl xl:text-5xl">About Me</h1>
        
        <div className="border border-2 w-1/3 mb-6 mx-auto md:ml-0 md:w-2/5"/>

        <p className="text-center text-lg text-white md:text-left lg:text-2xl xl:text-2xl 2xl:text-3xl">
          Hi, I&apos;m <strong>Saranyu Takayama</strong>, a third-year student at 
          <strong> Huachiew Chalermprakiet University (Thailand)</strong>. I&apos;m pursuing a Bachelor of Science in 
          <strong> Artificial Intelligence</strong> under the Faculty of Science. 
          I am passionate about exploring cutting-edge AI technologies and applying them 
          to solve real-world problems. With a drive for innovation, I am continuously 
          learning to shape the future through <strong>Artificial intelligence, IOT, Web Development</strong>.
        </p>
      </div>
      
      {/* Right side - Image */}
      <div className="w-full md:w-1/2 flex justify-center relative hidden md:flex">
        {/* Circle background */}
        <div className="absolute rounded-full bg-white w-[330px] h-[330px] -mt-4"></div>

        {/* Profile image */}
        <Image 
          src={Profile} 
          alt="Profile Image" 
          className="rounded-full relative z-10 aspect-square object-cover" 
          width={300} 
          height={300} 
        />
      </div>
    </div>
  )
}

export default AboutMeSection;
