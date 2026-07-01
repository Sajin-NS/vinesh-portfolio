import React from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/footer";
import FadeInSection from "../components/fade-in-section";

export const metadata = {
	title: "Work — Vinesh Studio",
	description:
		"Case studies demonstrating how strategic creative thinking transforms business outcomes.",
};

const BORDER = "border-[rgba(242,237,230,0.07)]!";

const CASES = [
	{
		num: "Case 1",
		emoji: "⚡",
		title: ["VERSUS", "Sports Lounge"],
		subtitle: "Building a Premium Sports & Entertainment Brand from Scratch",
		desc: "Led complete creative vision for a luxury sports lounge concept that achieved rapid brand recognition in the UAE market within 3 months. Strategic creative decisions drove significant footfall and hospitality revenue through bold brand positioning and immersive campaign execution.",
		stats: [
			{ num: "3K+", label: "opening night footfall" },
			{ num: "180%", label: "social engagement increase" },
			{ num: "5", label: "brand touchpoints designed" },
			{ num: "Premium", label: "market position created" },
		],
		gallery: [
			{
				bg: "linear-gradient(135deg,#0d0d0d 0%,#3a1a08 50%,#7a3010 100%)",
				label: "Brand Identity",
			},
			{
				bg: "linear-gradient(135deg,#10080a 0%,#5a1825 50%,#a83040 100%)",
				label: "Campaign",
			},
			{
				bg: "linear-gradient(135deg,#08080e 0%,#18204a 50%,#3040a0 100%)",
				label: "Social Content",
			},
		],
	},
	{
		num: "Case 2",
		emoji: "📱",
		title: ["SoSocial", "Brand System"],
		subtitle: "Building a B2B Social Platform Brand in a Competitive Market",
		desc: "Developed the full creative brand system for a B2B social media management platform — from visual identity to LinkedIn content strategy, app store presence, and loyalty communication. The brand launched with a sharp, enterprise-ready identity that drove significant user acquisition.",
		stats: [
			{ num: "$200K+", label: "in first-year ARR attributed" },
			{ num: "8K", label: "monthly active users" },
			{ num: "3", label: "active brand systems built" },
			{ num: "B2B", label: "enterprise market position" },
		],
		gallery: [
			{
				bg: "linear-gradient(135deg,#081020 0%,#1a3060 50%,#306090 100%)",
				label: "Brand Identity",
			},
			{
				bg: "linear-gradient(135deg,#081818 0%,#1a4848 50%,#2a7a7a 100%)",
				label: "App Design",
			},
			{
				bg: "linear-gradient(135deg,#101020 0%,#282870 50%,#3838b0 100%)",
				label: "LinkedIn Content",
			},
		],
	},
];

export default function WorkPage() {
	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main>
				{/* ── HERO ── */}
				<section className="min-h-screen! flex! items-center! px-6! md:px-10! py-[160px]! border-b! border-[rgba(242,237,230,0.07)]!">
					<div className="max-w-[1440px]! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start! w-full!">
						<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
							Turning Insight into Impact
						</span>
						<h1 className="text-[clamp(52px,8vw,120px)]! font-extrabold! leading-[0.92]! tracking-[-0.03em]! capitalize! text-ink!">
							Two comprehensive case studies demonstrating{" "}
							<span className="text-accent!">
								how strategic creative thinking transforms business
								outcomes.
							</span>{" "}
							From startup brand development to market category creation,
							here&apos;s how creative leadership delivers measurable
							growth.
						</h1>
					</div>
				</section>

				{/* ── CASE STUDIES ── */}
				{CASES.map((c) => (
					<FadeInSection key={c.num}>
						<section
							className={`py-[100px]! px-6! md:px-10! border-b! ${BORDER}`}
						>
							<div className="max-w-[1440px]! mx-auto!">
								{/* Header row */}
								<div className="grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start! mb-14!">
									<span className="text-xl! font-bold! text-accent! tracking-widest! capitalize!">
										{c.num}
									</span>
									<div>
										<h2 className="text-[clamp(42px,7vw,100px)]! font-extrabold! tracking-[-0.03em]! capitalize! text-ink! leading-[0.9]! flex! items-center! gap-5! flex-wrap!">
											<span>{c.title[0]}</span>
											<div></div>
											{/* <span className="w-12! h-12! rounded-full! bg-card! border! border-[rgba(242,237,230,0.07)]! flex! items-center! justify-center! text-[22px]!">
												{c.emoji}
											</span> */}
											<span>{c.title[1]}</span>
										</h2>
										<p className="text-[14px]! text-white/50! mt-3! tracking-[0.04em]!">
											{c.subtitle}
										</p>
									</div>
								</div>

								{/* Description */}
								<p className="text-[clamp(18px,2.2vw,28px)]! font-bold! text-ink! leading-[1.3]! tracking-[-0.02em]! max-w-[900px]! ml-auto!">
									{c.desc}
								</p>

								{/* Stats */}
								<div
									className={`grid! grid-cols-2! md:grid-cols-4! gap-8! mt-14! pt-14! border-t! ${BORDER}`}
								>
									{c.stats.map(({ num, label }) => (
										<div key={label}>
											<div className="text-[clamp(40px,5.5vw,76px)]! font-extrabold! tracking-[-0.04em]! text-ink! leading-[0.9]!">
												{num}
											</div>
											<p className="text-[13px]! text-white/50! mt-2.5! leading-[1.4]!">
												{label}
											</p>
										</div>
									))}
								</div>

								{/* Gallery */}
								<div className="grid! grid-cols-1! md:grid-cols-[1fr_2fr_1fr]! gap-1! mt-14! h-auto! md:h-[480px]!">
									{c.gallery.map(({ bg, label }) => (
										<div
											key={label}
											className="relative! overflow-hidden! group! min-h-[200px]! md:min-h-0!"
										>
											<div
												className="absolute! inset-0! flex! items-end! p-5! transition-transform! duration-500! group-hover:scale-105!"
												style={{ background: bg }}
											>
												<span className="text-[11px]! font-bold! tracking-[0.12em]! capitalize! text-[rgba(242,237,230,0.5)]! bg-[rgba(0,0,0,0.4)]! px-3! py-1.5! backdrop-blur-sm!">
													{label}
												</span>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>
					</FadeInSection>
				))}
			</main>

			<Footer />
		</div>
	);
}
