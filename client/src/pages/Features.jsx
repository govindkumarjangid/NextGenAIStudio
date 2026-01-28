import { featuresCardsData } from "../assets/assets"
import MainFeaturedCard from "../components/features/MainFeaturedCard"
import Symbol from "../components/UI/Symbol"
import Title from '../components/UI/Title'

const Features = () => {
  return (
    <div className="py-10 relative">

     <div className="flex flex-col justify-center items-center text-center gap-4">
       <Symbol title="FEATURES" />
      {/* title  */}
      <Title title="UNLEASH YOUR CREATIVE" subTitle="Everything you need to create, analyze, and optimize your digital presence in one place." />
     </div>

      {/* Background Glow Effects */}

      {/* <div className="fixed top-0 left-0 w-125 h-125
      bg-purple-500 opacity-40 blur-[150px] rounded-full" />

      <div className="fixed bottom-0 right-0  w-125 h-125
      bg-cyan-400 opacity-40 blur-[150px] rounded-full" /> */}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6 mt-16 w-full max-w-7xl px-2 sm:px-6 lg:px-20 pb-20 mx-auto">
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