'use client'

import React from "react"
import { FaStar } from "react-icons/fa"
import Image from "next/image"
import './reviews.css'

const ReviewsCard = ({id, img, name}) =>{
    return(
        <div key={id} style={{background:'#2F3A46'}}>
            <div className="flex items-center">
                <div className="w=3/4 py-3 space-y-3 px-3">
                    <div>
                        <h1 className="text-xl font-semibold">{name}</h1>
                        <h3 className="text-orange-400 uppercase text-xs font-semibold tracking-[2px]">client</h3>
                    </div>
                    <p className=" xyz text-sm italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis consectetur risus sit amet iaculis. Ut finibus hendrerit eros eu imperdiet. Aliquam pellentesque interdum diam.</p>
                    <div className="flex text-orange-500">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
                <div className="w-2/4 md:w-1/4">
                <div className="image2">
                    <Image src={img} alt={'img'} className="rounded-md image1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsCard

















// 'use client'

// import Image from "next/image"

// const { FaStar } = require("react-icons/fa")

// function ReviewsCard({id, name, img}) {
//     return (
//         <div key={id}>
//             <div>
//                 <div>
//                     <div>
//                         <h1>{name}</h1>
//                         <h3>Client</h3>
//                     </div>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     <div>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                     </div>
//                 </div>
//                 <div>
//                     <Image src={img} alt="img" className="rounded-md h-full"/>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ReviewsCard