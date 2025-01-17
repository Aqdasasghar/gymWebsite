'use client'

import React from "react"
// import './blogs.css'
import { FaHeading } from "react-icons/fa"
import BlogsCards from "./BlogsCards"
import BlogImg1 from '/src/assets/blogimg1.avif'
import BlogImg2 from '/src/assets/blogimg2.avif'
import BlogImg3 from '/src/assets/blogimg3.avif'

const BlogsData = [
    {
        id: 1,
        img: BlogImg1,
        title: 'yoga & pilates',
        heading: 'Do Your Self Realizations Quickly Fade',
        duration:'400' 
    },
    {
        id: 2,
        img: BlogImg2,
        title: 'Trainers & Equipment',
        heading: 'Little Things Do Make A Difference',
        duration: '800'
    },
    {
        id: 3,
        img: BlogImg3,
        title: 'PowerLifting',
        heading: 'Are You Famous Or Focused',
        duration: '1200',
    },
]

const Blogs = () =>{
    return (
        <div style={{background: '#1E293B'}} className="min-h-screen flex flex-col justify-center items-center text-white py-8 overflow-hidden">
            <h3 data-aos='fade-up' className="text-center text-lg font-bold text-orange-500 uppercase tracking-[4px]">Daily Blogs</h3>
            <h1 data-aos='fade-up' className="text-center text-4xl font-bold pt-3 ">Our Latest News</h1>

            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {BlogsData.map((ele)=>(
                    <BlogsCards key={ele.id} img={ele.img} title={ele.title} heading={ele.heading} duration={ele.duration}/>
                ))}
            </div>
        </div>
    )
}

export default Blogs