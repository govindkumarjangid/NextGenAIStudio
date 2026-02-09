import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Image, ChevronDown } from 'lucide-react';

const Builder = () => {
	const ratios = useMemo(() => ['16:9', '1:1', '9:16'], []);
	const styles = useMemo(
		() => [
			{ id: 'bold', label: 'Bold & Graphic', hint: 'High contrast, bold typography, striking visuals' },
			{ id: 'clean', label: 'Clean & Minimal', hint: 'Simple layouts, strong focus, airy spacing' },
			{ id: 'cinematic', label: 'Cinematic', hint: 'Moody lighting, dramatic composition' }
		],
		[]
	);
	const palette = useMemo(
		() => [
			['#ff4d8d', '#2ed8ff'],
			['#ff7a00', '#ff3d6c'],
			['#12b7ff', '#00e5ff'],
			['#4ad27a', '#2aa198'],
			['#8a4bff', '#ff5ad7'],
			['#9aa0a6', '#4a5568'],
			['#f72585', '#7209b7'],
			['#ffd6a5', '#ff9f1c']
		],
		[]
	);

	const [title, setTitle] = useState('');
	const [ratio, setRatio] = useState('16:9');
	const [style, setStyle] = useState(styles[0].id);
	const [schemeIndex, setSchemeIndex] = useState(0);
	const [details, setDetails] = useState('');

	const selectedStyle = styles.find((item) => item.id === style) || styles[0];

	return (
		<section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Form Card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="rounded-2xl bg-linear-to-br from-pink-500/10 to-fuchsia-500/10 border border-white/10 backdrop-blur-3xl p-6 sm:p-7 shadow-xl"
				>
					<div className="flex flex-col gap-1">
						<h3 className="text-xl sm:text-2xl font-semibold text-white">Create Your Thumbnail</h3>
						<p className="text-sm text-gray-400">Describe your vision and let AI bring it to life</p>
					</div>

					<div className="mt-6 flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<label className="text-sm font-semibold text-white/90">Title or Topic</label>
							<input
								value={title}
								onChange={(e) => setTitle(e.target.value.slice(0, 100))}
								placeholder="e.g., 10 Tips for Better Sleep"
								className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40"
							/>
							<div className="text-right text-xs text-gray-500">{title.length}/100</div>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-sm font-semibold text-white/90">Aspect Ratio</label>
							<div className="grid grid-cols-3 gap-3">
								{ratios.map((item) => (
									<button
										key={item}
										onClick={() => setRatio(item)}
										className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
											ratio === item
												? 'border-pink-400/70 bg-white/10 text-white'
												: 'border-white/10 bg-black/20 text-gray-400 hover:bg-white/5'
										}`}
									>
										{item}
									</button>
								))}
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-sm font-semibold text-white/90">Thumbnail Style</label>
							<button className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-left text-sm text-white flex items-center justify-between hover:border-white/20 transition">
								<div>
									<div className="font-semibold">{selectedStyle.label}</div>
									<div className="text-xs text-gray-400 mt-1">{selectedStyle.hint}</div>
								</div>
								<ChevronDown size={18} className="text-gray-400" />
							</button>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-sm font-semibold text-white/90">Color Scheme</label>
							<div className="flex flex-wrap gap-3">
								{palette.map((colors, index) => (
									<button
										key={`${colors[0]}-${colors[1]}`}
										onClick={() => setSchemeIndex(index)}
										className={`h-10 w-12 rounded-lg border ${
											schemeIndex === index ? 'border-white/80' : 'border-white/20'
										} p-1 transition hover:scale-[1.03]`}
									>
										<div
											className="h-full w-full rounded-md"
											style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
										/>
									</button>
								))}
							</div>
							<div className="text-xs text-gray-500">Selected: {selectedStyle.label}</div>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-sm font-semibold text-white/90">Additional Details (optional)</label>
							<textarea
								value={details}
								onChange={(e) => setDetails(e.target.value)}
								rows={4}
								placeholder="Add any specific elements, mood, or style preferences..."
								className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40"
							/>
						</div>

						<button className="mt-2 w-full rounded-xl bg-linear-to-r from-pink-500 to-fuchsia-600 text-white font-semibold py-3 transition hover:scale-[1.02] active:scale-95">
							Generate Thumbnail
						</button>
					</div>
				</motion.div>

				{/* Preview Card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="rounded-2xl bg-linear-to-br from-pink-500/10 to-fuchsia-500/10 border border-white/10 backdrop-blur-3xl p-6 sm:p-7 shadow-xl"
				>
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold text-white">Preview</h3>
					</div>

					<div className="mt-6 rounded-2xl border border-dashed border-white/20 bg-black/20 p-6 sm:p-8">
						<div className="flex flex-col items-center justify-center gap-3 text-center min-h-[260px]">
							<div className="h-14 w-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
								<Image size={26} className="text-gray-400" />
							</div>
							<div>
								<p className="text-white text-sm font-semibold">Generate your first thumbnail</p>
								<p className="text-xs text-gray-400 mt-1">Fill out the form and click Generate</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Builder;
