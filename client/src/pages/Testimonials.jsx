import React from 'react'
import { testimonialCardsData } from '../assets/assets'
import TestimonialCard from '../components/testimonial/TestimonialCard'
import Title from '../components/UI/Title'

const Testimonials = () => {
  return (
    <section className="w-full mx-auto max-w-6xl overflow-hidden pt-10 relative">

      <Title title="What Our Users Say" subTitle="Hear from our satisfied users who have transformed their digital presence with NextGen AI Studio." />

      <div className="relative pt-10">

        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-[#020617] via-transparent to-transparent" />

        <div className="marquee-inner flex min-w-[200%] pt-10">
          {[...testimonialCardsData, ...testimonialCardsData].map((card, index) => (
            <TestimonialCard key={index} card={card} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-[#020617] via-transparent to-transparent" />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-[#020617] via-transparent to-transparent" />

        <div className="marquee-inner marquee-reverse flex min-w-[200%] pt-10 pb-10">
          {[...testimonialCardsData, ...testimonialCardsData].map((card, index) => (
            <TestimonialCard key={index} card={card} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-[#020617] via-transparent to-transparent" />
      </div>

    </section>
  )
}

export default Testimonials;