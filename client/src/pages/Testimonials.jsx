import { testimonialCardsData } from '../assets/assets'
import TestimonialCard from '../components/testimonial/TestimonialCard'
import Symbol from '../components/UI/Symbol'
import Title from '../components/UI/Title'

const Testimonials = () => {
  return (
    <section className="w-full mx-auto max-w-277 pt-10 relative overflow-hidden">

      {/* title  */}
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <Symbol title="TESTIMONIALS" />
        <Title title="What Our Users Say" subTitle="Hear from our satisfied users who have transformed their digital presence with NextGen AI Studio." />
      </div>

      <div className="relative pt-10">
        {/* Left blur */}
        <div className="absolute left-0 top-0 bottom-0 w-5 bg-linear-to-r from-transparent to-transparent z-10 pointer-events-none backdrop-blur-md" />

        {/* Right blur */}
        <div className="absolute right-0 top-0 bottom-0 w-5 bg-linear-to-l from-transparent   to-transparent z-10 pointer-events-none backdrop-blur-md" />

        <div className="marquee-inner flex min-w-[200%] pt-10">
          {[...testimonialCardsData, ...testimonialCardsData].map((card, index) => (
            <TestimonialCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Left blur */}
        <div className="absolute left-0 top-0 bottom-0 w-5 bg-linear-to-r from-transparent to-transparent z-10 pointer-events-none backdrop-blur-md" />

        {/* Right blur */}
        <div className="absolute right-0 top-0 bottom-0 w-5 bg-linear-to-l from-transparent to-transparent z-10 pointer-events-none backdrop-blur-md" />
        <div className="marquee-inner flex min-w-[200%] pt-10">
          {[...testimonialCardsData, ...testimonialCardsData].map((card, index) => (
            <TestimonialCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Testimonials;