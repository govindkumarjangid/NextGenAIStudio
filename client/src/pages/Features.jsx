import { featuresCardsData } from "../assets/assets"
import MainFeaturedCard from "../components/features/MainFeaturedCard"
import Title from '../components/UI/Title'

const Features = () => {
  return (
    <div className="py-10 relative">
      {/* title  */}
      <Title title="UNLEASH YOUR CREATIVE" subTitle="Everything you need to create, analyze, and optimize your digital presence in one place." />

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-125 h-125
      bg-purple-500 opacity-30 blur-[100px] rounded-full" />

      <div className="absolute bottom-0 right-0  w-125 h-125 
      bg-cyan-400 opacity-30 blur-[100px] rounded-full" />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-6 mt-16 w-full max-w-7xl px-2 sm:px-6 lg:px-10 pb-20 mx-auto">
        {featuresCardsData.map((card, index) => (
          <MainFeaturedCard
            key={index}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            color={card.color}
            path={card.path}
            index={index}
          />
        ))}
      </section>
    </div>
  )
}

export default Features;