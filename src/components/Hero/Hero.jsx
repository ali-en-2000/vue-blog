import React from 'react'
import './Hero.css'
import img from '../../assets/bg.webp'

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
                <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز  </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero