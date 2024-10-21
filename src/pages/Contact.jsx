import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
          <div className="flex flex-col justify-center items-start gap-6">
              <p className="font-semibold text-xl text-gray-600">Our Store</p>
              <p className="text-gray-500">12243 Athens, <br />Kolonaki, Greece</p>
              <p className="text-gray-500">Tel: (+30) 210-566-4358 <br />example@gmail.com</p>
              <p className="font-semibold text-xl text-gray-600">Join the Crew</p>
              <p className="text-gray-500 w-1/2">If you are interested of being part of our big team , don't hesitate we will be glad to work with you.</p>
              <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transtion all duration-500">Explore Jobs</button>
          </div> 
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact