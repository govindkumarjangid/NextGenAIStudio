import { Check, Layout } from 'lucide-react';
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react';

const TemplateSelector = ({ selectedTemplate, onChange }) => {

  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview: "A clean, traditional resume format with clear sections and professional typography."
    },
    {
      id: "modern",
      name: "Modern",
      preview: "Sleek design with strategic use of color and modern font choice."
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "Minimal design with single image and  clean typography."
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "Ultra clean design that puts your content front and center."
    }
  ]

  return (
    <div className='relative'>
      <button onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-1
  text-sm text-cyan-300 bg-linear-to-br from-cyan-900/20 to-purple-900/20
  border border-cyan-400/30 hover:border-cyan-400/60 transition-all px-4 py-2.5 rounded-2xl active:scale-95'>
        <Layout size={16} /> <span className='max-sm:hidden'>Template</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='absolute top-full left-0 w-80 p-3 mt-2 space-y-3 z-50 bg-[#150227] rounded-xl border border-gray-700/80 shadow-xl'>
            {templates.map((template) => (
              <div key={template.id} onClick={() => {
                onChange(template.id);
                setIsOpen(false)
              }} className={`relative border p-3 rounded-xl cursor-pointer transition-all active:scale-95 ${selectedTemplate == template.id ?
                "border-cyan-400 bg-cyan-900/20"
                : "border-gray-700 hover:border-gray-500 hover:bg-gray-800/30"
                }`}>
                {
                  selectedTemplate == template.id && (
                    <div className='absolute top-3 right-3 text-cyan-400'>
                      <Check size={16} />
                    </div>
                  )
                }
                <div className="flex flex-col gap-1 pr-6">
                  <h3 className={`font-medium ${selectedTemplate == template.id ? 'text-white' : 'text-gray-200'}`}>{template.name}</h3>
                  <p className='text-[11px] text-gray-400 leading-snug'>{template.preview}</p>
                </div>

              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TemplateSelector;