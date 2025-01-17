'use client'

import React from "react"
import Slider from "react-slick";
import img1 from '/src/assets/img12.jpg'
import img2 from '/src/assets/img2.jpg'
import img3 from '/src/assets/img3.jpg'
import img4 from '/src/assets/img4.jpg'
import img5 from '/src/assets/img5.jpg'
import img6 from '/src/assets/img6.jpg'
import ReviewsCard from "./reviewscard";
import sliderColor from "@material-tailwind/react/theme/components/slider/sliderColor";
import Image from "next/image";

const ReviewsData =[
    {
        id: 1,
        img: img1,
        name: 'Jaxon Steele',
    },
    {
        id: 2,
        img: img2,
        name: 'John',
    },
    {
        id: 3,
        img: img3,
        name: 'Jack',
    },
    {
        id: 4,
        img: img4,
        name: 'Michael',
    },
    {
        id: 5,
        img: img5,
        name: 'Charles',
    },
    {
        id: 6,
        img: img6,
        name: 'David Parker',
    },
]

const Reviews =() =>{

    const settings ={
        dots: true,
        infinite: true,
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            
        ]
    }
    return(
        <div style={{background: '#0f172a'}} className="text-white py-14">
            <h3 data-aos='fade-up' data-aos-delay='600' className="text-center text-lg font-bold text-orange-500 uppercase tracking-[4px]">Our Testimonials</h3>
            <h1 data-aos='fade-up' data-aos-delay='1000' className="text-center text-4xl font-bold pt-3">What Clients Say</h1>
            <div data-aos='zoom-in' className="px-0 lg:px-32 mt-10">
                <Slider {...settings}>
                    {ReviewsData.map((item)=>(
                        <ReviewsCard key={item.id} name={item.name} img={item.img}/>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Reviews























// 'use client'

// import ReviewsCard from './ReviewaCard/reviewscard';
// import './reviews.css'
// import Slider from "react-slick";
// import img1 from "/public/images/img1.jpg"
// import img2 from "/public/images/img2.jpg"
// import img3 from "/public/images/img3.jpg"
// import img4 from "/public/images/img4.jpg"
// import img5 from "/public/images/img5.jpg"
// import img6 from "/public/images/img6.jpg"


// const ReviewsData=[
//     {
//         id: 1,
//         img: img1,
//         name: 'jaxon steele',
//     },
//     {
//         id: 2,
//         img: img2,
//         name: 'Kyler Briggs',
//     },
//     {
//         id: 3,
//         img: img3,
//         name: 'Maddox',
//     },
//     {
//         id: 4,
//         img: img4,
//         name: 'Zayden Walls',
//     },
//     {
//         id: 5,
//         img: img5,
//         name: 'Kason Ryder',
//     },
//     {
//         id: 6,
//         img: img6,
//         name: 'Zander Blake',
//     },
// ]
// function Reviews(){

//     const Settings = {
//         dots: true,
//         infinite: true, // fixed
//         slidesToShow: 2,
//         slidesToScroll: 1, // fixed
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1023,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1, // fixed
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1, // fixed
//                     initialSlide: 1, // fixed
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1, // fixed
//                     initialSlide: 1, // fixed
//                 },
//             },
//         ],
//     };
    
//     return(
//         <div>
//             <h3>Our Testimonials</h3>
//             <h1>What Clients Say</h1>
//             <div>
//                 <Slider {...Settings}>
//                     {ReviewsData.map((e)=>(
//                         <ReviewsCard key={e.id} name={e.name} img={e.img}/>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     )
// }

// export default Reviews
