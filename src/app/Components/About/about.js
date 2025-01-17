'use client'

import Image from "next/image"
import "./about.css"

function About () {
    return(
        <div style={{ backgroundColor: "#1E293B ", color: "white", padding: "10px 0" }}>
            <div className="min-h-screen container flex flex-col md:flex-row justify-center items-center gap-10">
                {/* content section  */}
                <div className="w-full md:w-2/4 space-y-6 ">
                    <h3 data-aos='fade-up' className="text-xl font-bold text-orange-500 uppercase tracking-[4px]">About IronHub</h3>
                    <h1 data-aos='fade-up' className="text-5xl font-bold">Welcome to Us</h1>
                    <p data-aos='fade-up' className="text-orange-400 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
                    <p data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    <span data-aos='fade-up' className="text-orange-400 font-bold">Read more...</span>
                </div>
                {/* Image section */}
                <div data-aos='fade-up'>
                    <div>
                        <Image src={"/images/about1.jpg"} alt="img" width={455} height={455}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About