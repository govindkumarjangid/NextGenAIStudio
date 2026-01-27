import CTASection from "../components/home/CTAsection"
import Hero from "../components/home/Hero"
import TiltedImage from "../components/UI/TiltImage"
import Features from "./Features"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <div>
      <Hero />
      <TiltedImage/>
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home