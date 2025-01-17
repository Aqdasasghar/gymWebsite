'use client'

import React from "react"
import Image from "next/image"
// import './Blogs.css'


const BlogsCards = ({id, img, title, heading, duration}) =>{
    return(
        <div data-aos='fade-up' data-aos-duration={duration} className="group bg-gray-900 cursor-pointer hover:bg-orange-500 transition-all " key={id}>
            <div>
                <Image className="cs4" src={img} alt="img"/>
            </div>
            <div className="p-6 space-y-2 border-b-2 border-orange-500">
                <h3 className="text-orange-500 font-bold uppercase text-sm group-hover:text-black ">{title}</h3>
                <h1 className="font-semibold">{heading}</h1>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default BlogsCards