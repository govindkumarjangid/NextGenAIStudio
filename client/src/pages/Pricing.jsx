import Title from "../components/UI/Title";
import Symbol from "../components/UI/Symbol";
import { plans } from "../assets/assets";
import PricingCard from "../components/pricing/PricingCard";

const Pricing = () => {
  return (
       <div className="py-10 relative">

     <div className="flex flex-col justify-center items-center text-center gap-4">
       <Symbol title="PRICING" />
      {/* title  */}
      <Title title="Our Pricing Plans" subTitle="Choose the plan that best fits your needs and start transforming your digital presence today." />
     </div>

     {/* Background Glow Effects */}
      {/* <div className="absolute top-0 left-0 w-125 h-125
      bg-purple-500 opacity-30 blur-[100px] rounded-full" />

      <div className="absolute bottom-0 right-0  w-125 h-125
      bg-cyan-400 opacity-30 blur-[100px] rounded-full" /> */}


      {/* Pricing Cards */}
       <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto mt-20 mb-10 px-4">
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} i={i} />
        ))}
      </div>
      </div>
  )
}

export default Pricing;