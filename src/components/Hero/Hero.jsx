import React from 'react'
import './Hero.css'
import img from '../../assets/hero_img.jpg'

const Hero = () => {
  return (
    <div className="hero" >
        <div className="container">
        <div className="row " >
            <div className="col-12 col-md-6">
                <img src={img} alt="" />
            </div>
            <div className="col-12 col-md-6">
                <h2 className="mb-5" > به بلاگ برنامه نویسی ما خوش آمدید </h2>
                <p> ما در این جا تجربیات و چالش هایی که در زمینه برنامه نویسی داشتیم رو به اشتراک می گذاریم </p>
                <p> امیدوارم این مطالب برای شما مفید باشه </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero