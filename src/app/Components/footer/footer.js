'use client'

import React from "react"
import './footer.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from "react-icons/md"
import { IoMdCall } from 'react-icons/io'
import { FaInternetExplorer } from 'react-icons/fa'

const Footer = () =>{
    return(
        <footer style={{background:'#0f172a'}} className="text-white pt-8 md:pt-0">
            <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-24 p-8 md:px-32 px-5">
                <div className="w-full md:w-1/4 space-y-4 ">
                    <span className="text-3xl font-bold">Iron</span>
                    <span className="text-3xl font-bold text-orange-500">Hub</span>
                    <p text-sm>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="w-full md:w-1/4">
                    <h1 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Quick Contacts</h1>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt size={23}/>
                            <p className="text-sm">567 Cummerate Mission, Los Angeles USA 4502</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdEmail size={23}/>
                            <p className="text-sm">ironhub@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <IoMdCall size={23}/>
                            <p className="text-sm">+923251507557</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaInternetExplorer size={23}/>
                            <p className="text-sm">www.ironhub.com</p>  
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium text-2xl pb-4 pt-5 ms:pt-0">Popular Tags</h1>
                    <div className="space-y-5">
                        <h3 style={{outline: "2px solid #64748b"}} className="font-medium ring-2 text-center uppercase hover:bg-orange-500 transition-all cursor-pointer">Workout</h3>
                    </div>
                    <div className="space-y-5">
                        <h3 style={{outline: "2px solid #64748b"}} className="mt-4 font-medium ring-2 text-center uppercase hover:bg-orange-500 transition-all cursor-pointer">Trainer</h3>
                    </div>
                    <div className="space-y-5">
                        <h3 style={{outline: "2px solid #64748b"}} className="mt-4 font-medium ring-2 text-center uppercase hover:bg-orange-500 transition-all cursor-pointer">Nutrition</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer