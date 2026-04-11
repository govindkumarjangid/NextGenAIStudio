import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { FileText, Gauge, Lightbulb, LoaderCircle, Target } from "lucide-react";
import toast from "react-hot-toast";

const STOPWORDS = new Set([
	"about", "after", "again", "also", "an", "and", "any", "are", "been", "before",
	"but", "can", "could", "did", "does", "for", "from", "had", "has", "have", "her",
	"him", "his", "how", "into", "its", "just", "may", "more", "most", "not", "our",
	"out", "over", "she", "some", "than", "that", "the", "their", "them", "there", "they",
	"this", "those", "too", "under", "very", "was", "were", "what", "when", "where", "which",
	"who", "will", "with", "you", "your"
]);

const IMPACT_VERBS = [
	"achieved", "improved", "increased", "reduced", "built", "launched", "optimized",
	"delivered", "designed", "led", "implemented", "streamlined", "automated", "scaled"
];

const SAMPLE_RESUME = `Aarav Sharma\nFrontend Developer\n\nSummary\nFrontend Developer with 3+ years of experience building responsive web applications with React, Tailwind CSS, and modern JavaScript. Focused on performance, accessibility, and user-centric design.\n\nExperience\nFrontend Developer - Nova Labs\nJan 2023 - Present\n- Built reusable UI components in React and reduced development time by 35%.\n- Optimized Lighthouse performance score from 68 to 92 across 4 key product pages.\n- Collaborated with backend engineers to integrate REST APIs and improve data loading by 40%.\n\nWeb Developer - Pixel Orbit\nJun 2021 - Dec 2022\n- Developed landing pages and dashboards used by 20k+ monthly users.\n- Implemented state management and reduced UI bugs by 28%.\n\nEducation\nB.Tech in Computer Science\n\nSkills\nReact, JavaScript, TypeScript, Tailwind CSS, HTML, CSS, REST APIs, Git, Performance Optimization\n\nProjects\nPortfolio Builder App - Built a resume and portfolio creation app with React and Node.js.`;

const SAMPLE_JOB = `Looking for a Frontend Developer with strong React, JavaScript, and TypeScript skills. Experience with Tailwind CSS, responsive design, REST API integration, performance optimization, and accessibility is required. Must have problem-solving skills, collaboration experience, and ability to deliver production-ready UI components.`;

const SECTION_RULES = [
	{ key: "summary", label: "Summary" },
	{ key: "experience", label: "Experience" },
	{ key: "education", label: "Education" },
	{ key: "skills", label: "Skills" },
	{ key: "project", label: "Projects" },
	{ key: "certification", label: "Certifications" }
];

const tokenize = (text) => {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, " ")
		.split(/\s+/)
		.filter((word) => word.length > 2 && !STOPWORDS.has(word));
};

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const getScoreLabel = (score) => {
	if (score >= 80) return { label: "Excellent", color: "text-emerald-300" };
	if (score >= 65) return { label: "Strong", color: "text-sky-300" };
	if (score >= 50) return { label: "Average", color: "text-amber-300" };
	return { label: "Needs Work", color: "text-rose-300" };
};

const ResumeAnalize = ({ sampleSignal = 0 }) => {
	const [resumeText, setResumeText] = useState("");
	const [jobDescription, setJobDescription] = useState("");
	const [isAnalyzing, setIsAnalyzing] = useState(false);
	const [report, setReport] = useState(null);

	useEffect(() => {
		if (!sampleSignal) return;
		setResumeText(SAMPLE_RESUME);
		setJobDescription(SAMPLE_JOB);
		setReport(null);
		toast.success("Sample resume loaded");
	}, [sampleSignal]);

	const wordsCount = useMemo(() => {
		return resumeText.trim() ? resumeText.trim().split(/\s+/).length : 0;
	}, [resumeText]);

	const analyzeResume = async () => {
		if (!resumeText.trim()) return toast.error("Please paste your resume text first");
		if (!jobDescription.trim()) return toast.error("Please paste the job description");

		setIsAnalyzing(true);

		const resumeTokens = tokenize(resumeText);
		const jdTokens = tokenize(jobDescription);

		const resumeSet = new Set(resumeTokens);
		const jdFreq = new Map();

		jdTokens.forEach((token) => {
			jdFreq.set(token, (jdFreq.get(token) || 0) + 1);
		});

		const topJdKeywords = [...jdFreq.entries()]
			.sort((a, b) => b[1] - a[1])
			.slice(0, 30)
			.map(([word]) => word);

		const matchedKeywords = topJdKeywords.filter((word) => resumeSet.has(word));
		const missingKeywords = topJdKeywords.filter((word) => !resumeSet.has(word)).slice(0, 8);

		const keywordCoverage = topJdKeywords.length
			? Math.round((matchedKeywords.length / topJdKeywords.length) * 100)
			: 0;

		const sectionPresence = SECTION_RULES.map((section) => {
			const exists = resumeText.toLowerCase().includes(section.key);
			return { ...section, exists };
		});

		const sectionScore = Math.round(
			(sectionPresence.filter((section) => section.exists).length / SECTION_RULES.length) * 100
		);

		const impactVerbCount = IMPACT_VERBS.reduce((count, verb) => {
			return count + (resumeText.toLowerCase().match(new RegExp(`\\b${verb}\\b`, "g")) || []).length;
		}, 0);

		const numbersCount = (resumeText.match(/\b\d+[\d,.]*%?\b|\$\d+[\d,.]*[kKmM]?/g) || []).length;

		const impactScore = clamp((impactVerbCount * 9) + (numbersCount * 6), 0, 100);

		const lengthScore = wordsCount >= 300 && wordsCount <= 900
			? 100
			: clamp(100 - Math.abs(wordsCount - 550) / 6, 20, 95);

		const finalScore = Math.round(
			(keywordCoverage * 0.45) +
			(sectionScore * 0.2) +
			(impactScore * 0.2) +
			(lengthScore * 0.15)
		);

		const strengths = [];
		const improvements = [];

		if (keywordCoverage >= 65) {
			strengths.push("Strong keyword alignment with the job description.");
		} else {
			improvements.push("Add more role-specific keywords from the job description.");
		}

		if (numbersCount >= 4) {
			strengths.push("Good use of measurable impact with numbers/results.");
		} else {
			improvements.push("Add quantifiable achievements (percentages, counts, growth metrics).");
		}

		if (sectionScore >= 80) {
			strengths.push("Core resume sections are clearly present.");
		} else {
			const missingSections = sectionPresence.filter((section) => !section.exists).map((s) => s.label);
			improvements.push(`Add missing sections: ${missingSections.join(", ")}.`);
		}

		if (wordsCount < 250) {
			improvements.push("Resume is too short. Expand with stronger context and achievements.");
		}

		if (wordsCount > 1000) {
			improvements.push("Resume is too long. Keep it concise and focused on relevant experience.");
		}

		setTimeout(() => {
			setReport({
				finalScore,
				scoreLabel: getScoreLabel(finalScore),
				keywordCoverage,
				sectionScore,
				impactScore,
				lengthScore: Math.round(lengthScore),
				matchedKeywords: matchedKeywords.slice(0, 12),
				missingKeywords,
				strengths,
				improvements,
				sectionPresence
			});
			setIsAnalyzing(false);
			toast.success("Resume analysis complete");
		}, 650);
	};

	return (
		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-14">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.45 }}
				className="grid grid-cols-1 xl:grid-cols-2 gap-6"
			>
				<div className="rounded-3xl border border-white/12 bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] p-5 sm:p-6 backdrop-blur-xl">
					<div className="flex items-center gap-3 mb-4">
						<FileText className="text-cyan-300" />
						<h2 className="text-xl font-semibold text-white">Resume Input</h2>
					</div>

					<label className="text-sm text-slate-300">Resume Text</label>
					<textarea
						value={resumeText}
						onChange={(e) => setResumeText(e.target.value)}
						placeholder="Paste your resume text here..."
						className="mt-2 w-full h-56 rounded-xl bg-black/25 border border-cyan-400/35 text-white px-4 py-3 outline-none focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-400/25 resize-none"
					/>

					<div className="mt-4">
						<label className="text-sm text-slate-300">Job Description</label>
						<textarea
							value={jobDescription}
							onChange={(e) => setJobDescription(e.target.value)}
							placeholder="Paste the target job description here..."
							className="mt-2 w-full h-44 rounded-xl bg-black/25 border border-fuchsia-400/30 text-white px-4 py-3 outline-none focus:border-fuchsia-300/80 focus:ring-2 focus:ring-fuchsia-400/25 resize-none"
						/>
					</div>

					<div className="mt-5 flex flex-wrap items-center gap-3">
						<button
							onClick={analyzeResume}
							disabled={isAnalyzing}
							className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
						>
							{isAnalyzing ? <LoaderCircle size={16} className="animate-spin" /> : <Gauge size={16} />}
							{isAnalyzing ? "Analyzing..." : "Analyze Resume"}
						</button>

						<button
							onClick={() => {
								setResumeText("");
								setJobDescription("");
								setReport(null);
							}}
							className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-white/8"
						>
							Reset
						</button>

						<span className="text-xs text-slate-300">Words: {wordsCount}</span>
					</div>
				</div>

				<div className="rounded-3xl border border-white/12 bg-[radial-gradient(circle_at_top_left,#0f1f45,#201043)] p-5 sm:p-6 backdrop-blur-xl">
					<div className="flex items-center gap-3 mb-4">
						<Target className="text-emerald-300" />
						<h2 className="text-xl font-semibold text-white">Analysis Report</h2>
					</div>

					{!report ? (
						<div className="h-177.5 rounded-2xl border border-dashed border-white/20 grid place-items-center text-slate-300 text-center px-6">
							Paste your resume + target job description and click Analyze to generate ATS insights.
						</div>
					) : (
						<div className="space-y-4 text-slate-100">
							<div className="rounded-2xl border border-white/12 bg-black/25 p-4">
								<p className="text-xs uppercase tracking-wide text-slate-300">Overall ATS Score</p>
								<div className="mt-2 flex items-end gap-3">
									<span className="text-4xl font-bold">{report.finalScore}</span>
									<span className="text-slate-300">/ 100</span>
									<span className={`text-sm font-semibold ${report.scoreLabel.color}`}>{report.scoreLabel.label}</span>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-3">
								<MetricCard title="Keyword Match" value={report.keywordCoverage} />
								<MetricCard title="Section Quality" value={report.sectionScore} />
								<MetricCard title="Impact Strength" value={report.impactScore} />
								<MetricCard title="Length Quality" value={report.lengthScore} />
							</div>

							<div className="rounded-2xl border border-white/12 bg-black/20 p-4">
								<h3 className="text-sm font-semibold text-emerald-300">Matched Keywords</h3>
								<div className="mt-3 flex flex-wrap gap-2">
									{report.matchedKeywords.length ? report.matchedKeywords.map((word) => (
										<span key={word} className="rounded-full bg-emerald-500/18 border border-emerald-400/40 px-3 py-1 text-xs">
											{word}
										</span>
									)) : <p className="text-sm text-slate-300">No strong keyword match yet.</p>}
								</div>
							</div>

							<div className="rounded-2xl border border-white/12 bg-black/20 p-4">
								<h3 className="text-sm font-semibold text-rose-300">Missing Keywords</h3>
								<div className="mt-3 flex flex-wrap gap-2">
									{report.missingKeywords.length ? report.missingKeywords.map((word) => (
										<span key={word} className="rounded-full bg-rose-500/14 border border-rose-400/35 px-3 py-1 text-xs">
											{word}
										</span>
									)) : <p className="text-sm text-slate-300">Great coverage for target role terms.</p>}
								</div>
							</div>

							<div className="rounded-2xl border border-white/12 bg-black/20 p-4">
								<h3 className="text-sm font-semibold text-cyan-300">Section Check</h3>
								<div className="mt-3 grid grid-cols-2 gap-2">
									{report.sectionPresence.map((section) => (
										<span
											key={section.key}
											className={`rounded-lg px-3 py-2 text-xs border ${section.exists
												? "border-emerald-400/40 bg-emerald-500/15 text-emerald-200"
												: "border-amber-400/30 bg-amber-500/10 text-amber-200"
												}`}
										>
											{section.label}: {section.exists ? "Present" : "Missing"}
										</span>
									))}
								</div>
							</div>

							<div className="rounded-2xl border border-white/12 bg-black/20 p-4">
								<div className="flex items-center gap-2">
									<Lightbulb size={16} className="text-yellow-300" />
									<h3 className="text-sm font-semibold">Recommendations</h3>
								</div>
								<ul className="mt-3 text-sm text-slate-200 space-y-2 list-disc list-inside">
									{[...report.strengths, ...report.improvements].map((point, idx) => (
										<li key={`${point}-${idx}`}>{point}</li>
									))}
								</ul>
							</div>
						</div>
					)}
				</div>
			</motion.div>
		</div>
	);
};

const MetricCard = ({ title, value }) => {
	const barColor = value >= 75 ? "bg-emerald-400" : value >= 55 ? "bg-amber-400" : "bg-rose-400";

	return (
		<div className="rounded-xl border border-white/10 bg-black/25 p-3">
			<p className="text-xs text-slate-300">{title}</p>
			<p className="mt-1 text-lg font-semibold text-white">{value}%</p>
			<div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
				<div className={`h-full ${barColor}`} style={{ width: `${value}%` }} />
			</div>
		</div>
	);
};

export default ResumeAnalize;
