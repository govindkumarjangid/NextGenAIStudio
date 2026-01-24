import { featuresCardsData } from "../assets/assets"
import MainFeaturedCard from "../components/features/MainFeaturedCard"
import Title from '../components/UI/Title'

const Features = () => {
  return (
    <div className="mx-auto py-10 ">
      <Title title="UNLEASH YOUR CREATIVE" subTitle="Everything you need to create, analyze, and optimize your digital presence in one place." />
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
          />
        ))}
      </section>
    </div>
  )
}

export default Features;