import CTASection from "../components/home/CTAsection"
import Hero from "../components/home/Hero"
import Features from "./Features"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home