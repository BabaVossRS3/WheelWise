import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to WheelWise, your go-to destination for premium rims and wheels! We are dedicated to providing automotive enthusiasts with a diverse selection of stylish and high-performance wheels that enhance both the look and functionality of your vehicle.</p>
          <p>We pride ourselves on quality and craftsmanship, collaborating with top manufacturers to deliver durable and eye-catching designs. Thank you for choosing WheelWise; we’re excited to help you elevate your driving experience!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p className="">At WheelWise, we believe that the right wheels can transform your ride. Our mission is to offer exceptional products and outstanding customer service, ensuring you find the perfect fit for your style and needs. Our expert team is here to guide you every step of the way.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance</b>
            <p className='text-gray-600'>At WheelWise, quality assurance is our top priority. We partner with trusted manufacturers and conduct rigorous inspections to ensure that every rim and wheel meets high standards of performance and durability. Your satisfaction and safety drive us to deliver only the best products for your vehicle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convinience</b>
            <p className='text-gray-600'>At WheelWise, we prioritize convenience for our customers. Our user-friendly website allows you to easily browse and compare a wide selection of rims and wheels. With fast shipping and hassle-free returns, we make it simple for you to find the perfect fit for your vehicle without the stress. Your satisfaction is our commitment, ensuring a seamless shopping experience from start to finish.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>At WheelWise, we pride ourselves on providing exceptional customer service. Our knowledgeable team is dedicated to assisting you every step of the way, whether you have questions about products or need personalized recommendations. We strive to create a welcoming and supportive environment, ensuring that your experience is smooth and enjoyable. Your satisfaction is our priority, and we are here to help you find the perfect wheels for your ride!</p>
        </div>
      </div>

      <NewsletterBox/>


    </div>
  )
}

export default About
