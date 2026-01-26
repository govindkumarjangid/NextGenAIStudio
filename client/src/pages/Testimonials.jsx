import { testimonialCardsData } from '../assets/assets'
import TestimonialCard from '../components/testimonial/TestimonialCard'
import Title from '../components/UI/Title'
import { motion } from 'motion/react'

const Testimonials = () => {
  return (
    <section className="w-full mx-auto max-w-6xl overflow-hidden pt-10 relative ">

      <Title title="What Our Users Say" subTitle="Hear from our satisfied users who have transformed their digital presence with NextGen AI Studio." />

      <div className="relative pt-10">

        <div className="marquee-inner flex min-w-[200%] pt-10">
          {[...testimonialCardsData, ...testimonialCardsData].map((card, index) => (
            <TestimonialCard key={index} card={card} />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="marquee-inner marquee-reverse flex min-w-[200%] pt-10 pb-10">
          {[...testimonialCardsData, ...testimonialCardsData].map((card, index) => (
            <motion.div>
              <TestimonialCard key={index} card={card} />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Testimonials;