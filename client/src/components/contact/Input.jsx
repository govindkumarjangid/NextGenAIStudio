
const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-2xl pl-12 pr-4 py-4 bg-white/6 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/30 transition"
    />

  )
}

export default Input;