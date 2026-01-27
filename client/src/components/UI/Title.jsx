import { motion } from "framer-motion";

const Title = ({ title, subTitle, align }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col justify-center items-center  text-center max-w-8xl
      ${align === "left" && "md:items-start md:text-left"}`}>
      <h1 className="font-semibold text-4xl md:text-[40px] text-gray-800 dark:text-white">
        {title}
      </h1>
      <p className="text-sm md:text-base text-gray-700/90 mt-4 max-w-156 dark:text-white">
        {subTitle}
      </p>
    </motion.div>
  )
}

export default Title