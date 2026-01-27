import Title from "../components/UI/Title";
import Symbol from "../components/UI/Symbol";

const Pricing = () => {
  return (
       <div className="py-10 relative">

     <div className="flex flex-col justify-center items-center text-center gap-4">
       <Symbol title="PRICING" />
      {/* title  */}
      <Title title="Our Pricing Plans" subTitle="Choose the plan that best fits your needs and start transforming your digital presence today." />
     </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-125 h-125
      bg-purple-500 opacity-30 blur-[100px] rounded-full" />

      <div className="absolute bottom-0 right-0  w-125 h-125
      bg-cyan-400 opacity-30 blur-[100px] rounded-full" />
      </div>
  )
}

export default Pricing;