
const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-xl pl-12 pr-4 py-4 bg-black/20
  border border-cyan-400/40 text-white placeholder-gray-400
  focus:outline-none focus:border-cyan-400/60
  focus:ring-2 focus:ring-cyan-400/30 transition"
    />

  )
}

export default Input;