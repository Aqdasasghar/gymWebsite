"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ThemeProvider, Button } from "@material-tailwind/react";
import Image from "next/image";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/about";
import Reviews from "./Reviews/reviews";
import Pricing from "./Components/pricing/Pricing";
import Blogs from "./Components/blogs/blogs";
import Footer from "./Components/footer/footer";

export default function Home() {
  useEffect(() =>{
    AOS.init({
      offset:100,
      duration:600,
      easing:"ease-out-sine",
      delay:100,
    });
    AOS.refresh();
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Hero/>
      <About/>
      <Reviews/>
      <Pricing/>
      <Blogs/>
      </div>
  );
}
