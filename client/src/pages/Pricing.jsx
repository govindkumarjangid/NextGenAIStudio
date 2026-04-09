import Title from "../components/UI/Title";
import Symbol from "../components/UI/Symbol";
import { plans } from "../assets/assets";
import PricingCard from "../components/pricing/PricingCard";

const Pricing = () => {
  return (
       <section className="py-14 sm:py-18 relative overflow-hidden">

     <div className="relative z-10 flex flex-col justify-center items-center text-center gap-4 px-4">
       <Symbol title="PRICING" />
      {/* title  */}
      <Title title="Simple Pricing, Serious Output" subTitle="Choose a plan that matches your growth stage and unlock the full power of NextGen AI Studio." />

      <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-200/90">
        <span className="px-3 py-1 rounded-full border border-white/15 bg-white/6">Cancel anytime</span>
        <span className="px-3 py-1 rounded-full border border-white/15 bg-white/6">Instant access</span>
        <span className="px-3 py-1 rounded-full border border-white/15 bg-white/6">Priority support on Pro+</span>
      </div>
     </div>



      {/* Pricing Cards */}
       <div className="relative z-10 grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full mx-auto my-25 px-4 sm:px-6">
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} i={i} />
        ))}
      </div>

      <p className="relative z-10 text-center text-xs sm:text-sm text-slate-400 mt-1 px-4">
        Need a custom workflow for your team? Enterprise support is available.
      </p>
      </section>
  )
}

export default Pricing;