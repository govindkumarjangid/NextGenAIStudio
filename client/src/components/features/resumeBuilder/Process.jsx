import Title from "../../UI/Title"
import Symbol from "../../UI/Symbol"
import { processData } from "../../../assets/assets"
import { motion } from "motion/react"

const Process = () => {

    return (
        <div className="h-auto text-white px-2 sm:px-6 py-20 relative max-w-8xl">

            <motion.div
                className="flex flex-col justify-center items-center text-center gap-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <Symbol title="SIMPLE PROCESS" />
                {/* title  */}
                <Title title="Build your resume" subTitle="Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features." />
            </motion.div>

            <div className="flex flex-col md:flex-row items-center mx-auto justify-center gap-5">
                <motion.img
                    className="w-full max-w-2xl"
                    alt="process image"
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
                />
                <div className="px-4 md:px-0">
                    {processData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="flex items-center justify-center mb-2 max-w-md group cursor-pointer overflow-hidden"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: index * 0.1
                            }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className={`p-6 ${item.bgColor} border ${item.borderColor} flex gap-4 rounded-xl transition-colors`}>
                                <item.Icon className={`size-6 ${item.iconStroke}`} />
                                <div className="space-y-2">
                                    <h3 className="text-base font-semibold text-slate-300">{item.title}</h3>
                                    <p className="text-sm text-slate-400 max-w-xs">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Process