
const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-xl px-5 py-4 bg-black/20 
    border border-purple-400/40 text-white placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition"
    />
  )
}

export default Input;