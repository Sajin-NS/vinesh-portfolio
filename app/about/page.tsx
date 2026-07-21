import React from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/footer";
import FadeInSection from "../components/fade-in-section";

export const metadata = {
	title: "About — Vinesh Studio",
	description:
		"10+ years of creative leadership across brand identity, campaign design, and digital-first marketing.",
};

const BORDER = "border-[rgba(242,237,230,0.07)]!";

const STORY = [
	{
		label: "01 · Origin",
		title: "Started from a love of visual communication",
		body: "Over a decade ago, I started my journey in creative design with a simple goal — make brands look better. What followed was a deep dive into the intersection of strategy, psychology, and visual craft that now defines everything I do.",
	},
	{
		label: "02 · Growth",
		title: "Built across hospitality, F&B, and digital brands",
		body: "Working across the UAE's most dynamic sectors — hospitality, F&B, lifestyle, and digital-first businesses — I developed a sharp understanding of how different audiences respond to visual storytelling and how to translate that into measurable results.",
	},
	{
		label: "03 · Now",
		title: "Creative direction meets business strategy",
		body: "Today I lead creative output across full brand systems, campaign executions, social content ecosystems, custom web development, and web apps. I'm not just a designer — I'm a strategic creative who thinks in outcomes and builds in systems.",
	},
];

const CAPABILITIES = [
	"Brand Identity & Visual Systems",
	"Creative Direction",
	"Campaign Design & Social Content",
	"Hospitality & F&B Marketing",
	"Web Development & Web Apps",
	"AI-Powered Visual Production",
	"Web Design & Digital Products",
	"Pitch Deck & Presentation Design",
	"LinkedIn B2B Content Strategy",
];

const PHOTO_TILES = [
	{
		bg: "linear-gradient(135deg,#0a1018,#1a3050,#2a5080)",
		label: "Brand Work",
	},
	{ bg: "linear-gradient(135deg,#180a08,#5c2010,#b04030)", label: "Campaign" },
	{ bg: "linear-gradient(135deg,#080e10,#183048,#285878)", label: "Digital" },
];

export default function AboutPage() {
	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main>
				{/* ── HERO ── */}
				<section className="relative! min-h-screen! flex! items-end! overflow-hidden!">
					<img
						className="absolute! inset-0! z-0! min-h-screen!"
						src={`/images/hero_bg.jpg`}
					/>
					<div className="absolute! inset-0! bg-[radial-gradient(ellipse_70%_60%_at_60%_30%,rgba(40,60,90,0.6)_0%,transparent_70%)]! z-0!" />
					<div className="absolute! inset-0! bg-linear-to-b! from-[rgba(14,18,24,0.2)]! via-[rgba(14,18,24,0.8)]! to-bg! z-1!" />

					<div className="relative! z-2! w-full! max-w-360! mx-auto! px-6! md:px-10! pb-20! flex! justify-between! items-end! flex-col! md:flex-row! gap-5!">
						<h1 className="text-[clamp(52px,9vw,110px)]! font-extrabold! leading-[0.9]! tracking-[-0.03em]! capitalize! text-ink!">
							10 Years
							<br />
							of <span className="text-accent!">Craft</span>
						</h1>
						<span className="text-[13px]! font-semibold! text-white/50! tracking-[0.08em]!">
							Scroll down ↓
						</span>
					</div>
				</section>

				{/* ── INSIGHT ── */}
				<FadeInSection>
					<div className={`border-b! ${BORDER} py-30! px-6! md:px-10!`}>
						<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
								Insight
							</span>
							<p className="text-[clamp(40px,6vw,90px)]! font-extrabold! leading-[0.93]! tracking-[-0.03em]! capitalize! text-ink!">
								<span className="text-accent!">
									As a Creative Marketing Leader,
								</span>{" "}
								I believe effective marketing starts with understanding
								not only a brand&apos;s identity and creative vision,
								but audience psychology as well.
							</p>
						</div>
					</div>
				</FadeInSection>

				{/* ── PHOTO ROW ── */}
				<FadeInSection>
					<div className="grid! grid-cols-1! md:grid-cols-3! gap-1! h-auto! md:h-100!">
						{PHOTO_TILES.map(({ bg, label }) => (
							<Link
								href={"/work"}
								key={label}
								className="relative! overflow-hidden! group! min-h-50! md:min-h-0!"
							>
								<div
									className="absolute! inset-0! flex! items-end! p-5! transition-transform! duration-500! group-hover:scale-105!"
									style={{ background: bg }}
								>
									<span className="text-[11px]! font-bold! tracking-[0.12em]! capitalize! text-[rgba(242,237,230,0.4)]!">
										{label}
									</span>
								</div>
							</Link>
						))}
					</div>
				</FadeInSection>

				{/* ── PHILOSOPHY ── */}
				<FadeInSection>
					<div className={`border-b! ${BORDER} py-30! px-6! md:px-10!`}>
						<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
								Philosophy
							</span>
							<p className="text-[clamp(32px,4.5vw,64px)]! font-extrabold! tracking-[-0.03em]! text-ink! leading-[1.15]!">
								My approach combines exploring a brand&apos;s visual
								identity, understanding its audience deeply, and then
								craft visual experiences that{" "}
								<span className="text-accent!">
									align users with brand systems.
								</span>{" "}
								This alignment is a vital component that drives results.
							</p>
						</div>
					</div>
				</FadeInSection>

				{/* ── STORY ── */}
				<FadeInSection>
					<section
						className={`border-b! ${BORDER} py-30! px-6! md:px-10!`}
					>
						<div className="max-w-360! mx-auto! flex! flex-col!">
							{STORY.map(({ label, title, body }, i) => (
								<div
									key={label}
									className={`grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! py-14! ${
										i < STORY.length - 1 ? `border-b! ${BORDER}` : ""
									} ${i === 0 ? "pt-0!" : ""} ${i === STORY.length - 1 ? "pb-0!" : ""}`}
								>
									<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
										{label}
									</span>
									<div>
										<h3 className="text-[clamp(22px,3vw,40px)]! font-bold! tracking-[-0.02em]! text-ink! leading-[1.05]! mb-5!">
											{title}
										</h3>
										<p className="text-[clamp(16px,1.8vw,22px)]! text-white/50! leading-[1.55]! max-w-175!">
											{body}
										</p>
									</div>
								</div>
							))}
						</div>
					</section>
				</FadeInSection>

				{/* ── CAPABILITIES ── */}
				<FadeInSection>
					<section
						className={`border-b! ${BORDER} py-30! px-6! md:px-10!`}
					>
						<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
								Capabilities
							</span>
							<div className="flex! flex-col!">
								{CAPABILITIES.map((cap, i) => (
									<div
										key={cap}
										className={`group! grid! grid-cols-[auto_1fr_auto]! gap-6! items-center! py-7! border-b! ${BORDER} cursor-pointer! hover:border-accent/50! transition-colors! duration-300! ${
											i === 0 ? `border-t! ${BORDER}` : ""
										}`}
									>
										<span className="text-[12px]! font-bold! text-dim! tracking-[0.08em]! w-7!">
											{String(i + 1).padStart(2, "0")}
										</span>
										<span className="text-[clamp(18px,2.5vw,32px)]! font-extrabold! tracking-tight! capitalize! text-white/50! hover:text-ink! transition-colors! duration-300!">
											{cap}
										</span>
										<span className="text-xl! text-dim! group-hover:text-accent! group-hover:translate-x-1! group-hover:-translate-y-1! transition-all! duration-300!">
											↗
										</span>
									</div>
								))}
							</div>
						</div>
					</section>
				</FadeInSection>

				{/* ── CTA ── */}
				<FadeInSection>
					<div className="py-25! px-6! md:px-10! text-center!">
						<p className="text-[clamp(32px,4.5vw,64px)]! font-extrabold! tracking-[-0.03em]! text-white/50! mb-10!">
							Ready to build something{" "}
							<span className="text-accent!">exceptional?</span>
						</p>
						<Link
							href="/#contact"
							className="inline-flex! items-center! justify-center! px-8! py-4! bg-accent! text-ink! text-[11px]! font-bold! tracking-[0.14em]! capitalize! hover:bg-[#c94a36]! hover:-translate-y-0.5! transition-all! duration-300!"
						>
							Let&apos;s Connect
						</Link>
					</div>
				</FadeInSection>
			</main>

			<Footer />
		</div>
	);
}
