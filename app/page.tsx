import React from "react";
import Link from "next/link";
import Nav from "./components/nav";
import Footer from "./components/footer";
import FadeInSection from "./components/fade-in-section";
import ClientMarquee from "./components/client-marquee";

const BORDER = "border-[rgba(242,237,230,0.07)]!";

const TILE_BG = [
	"linear-gradient(135deg,#1a0e0a,#5c2e1a,#9c5c30)",
	"linear-gradient(135deg,#0a1520,#1e3d5c,#3a6080)",
	"linear-gradient(135deg,#0d1a0d,#2d5230,#5a8a5c)",
	"linear-gradient(135deg,#1a1208,#5c4820,#a08040)",
	"linear-gradient(135deg,#1a0a14,#5c2040,#9c3060)",
	"linear-gradient(135deg,#0a1018,#203050,#405878)",
	"linear-gradient(135deg,#180e08,#6a3818,#a06030)",
	"linear-gradient(135deg,#101820,#283858,#485a88)",
	"linear-gradient(135deg,#0e1a10,#2a4830,#507858)",
	"linear-gradient(135deg,#180c0a,#603020,#a05840)",
	"linear-gradient(135deg,#101620,#203058,#3a5080)",
	"linear-gradient(135deg,#121a12,#345438,#608060)",
];

const TESTIMONIALS = [
	{
		quote: (
			<>
				A{" "}
				<span className="text-accent!">self-motivated creative leader</span>{" "}
				whose strategic thinking and design execution help us drive
				consistent growth.
			</>
		),
		name: "Ahmed Al Farsi",
		role: "Marketing VP · Hospitality Group",
	},
	{
		quote: (
			<>
				Vinesh&apos;s{" "}
				<span className="text-accent!">
					creative instincts and attention to detail
				</span>{" "}
				elevate every project beyond expectations.
			</>
		),
		name: "Priya Menon",
		role: "Brand Director · Lifestyle Brand",
	},
	{
		quote: (
			<>
				He owns the entire{" "}
				<span className="text-accent!">
					creative pipeline — web, social, campaigns
				</span>{" "}
				— and bridges discipline and strategy without losing momentum.
			</>
		),
		name: "James Carter",
		role: "CEO · Digital First Agency",
	},
	{
		quote: (
			<>
				Fast with visuals,{" "}
				<span className="text-accent!">sharp with positioning</span>, and
				always pushing the brand to look more premium.
			</>
		),
		name: "Sara Al Rashid",
		role: "CMO · F&B Concept",
	},
];

export default function Home() {
	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main>
				{/* ── HERO ── */}
				<section className="relative! min-h-screen! flex! flex-col! justify-end! overflow-hidden!">
					<img
						src={`/images/hero_bg.jpg`}
						alt="hero bg"
						className="absolute! inset-0! z-1! min-h-screen!"
					/>

					{/* Dark gradient overlay */}
					<div className="absolute! inset-0! bg-linear-to-b! from-[rgba(14,18,24,0.3)]! via-[rgba(14,18,24,0.5)]! to-[rgba(14,18,24,0.92)]! z-1!" />

					{/* Content */}
					<div className="relative! z-2! max-w-360! mx-auto! w-full! px-6! md:px-15! pb-14! md:pb-15! grid! grid-cols-1! md:grid-cols-[1fr_auto]! items-end! gap-8! md:gap-10!">
						<h1 className="text-[clamp(44px,8.5vw,110px)]! capitalize! font-extrabold! leading-[0.9]! tracking-[-0.03em]! text-ink! max-w-225!">
							Multi-Disciplinary
							<br />
							<span className="text-accent">Creative Leadership</span>
							<br />
							That Drives Results
						</h1>

						<div className="flex! flex-wrap! md:flex-col! items-start! md:items-end! gap-5! md:text-right!">
							<span className="base! font-semibold! text-white/50! tracking-[0.08em]!">
								Design with purpose
							</span>
							<Link
								href="/#contact"
								className="uppercase! inline-flex! items-center! justify-center! px-8! py-4! bg-accent! text-ink! text-base! font-bold! tracking-[0.14em]! transition-all! duration-300! hover:bg-[#c94a36]! hover:-translate-y-0.5!"
							>
								let&apos;s connect
							</Link>
							<Link
								href="/#contact"
								className="uppercase! inline-flex! items-center! justify-center! px-8! py-4! bg-white/20! text-ink! text-base! font-bold! tracking-[0.14em]! transition-all! duration-300! hover:bg-white/30! hover:-translate-y-0.5!"
							>
								download resume
							</Link>
						</div>
					</div>
				</section>

				{/* ── CLIENTS ── */}
				<FadeInSection>
					<div
						className={`border-t! border-b! ${BORDER} py-14! px-6! md:px-15!`}
					>
						<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-center!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]!">
								Clients
							</span>
							<div className="w-full! overflow-hidden!">
								<ClientMarquee />
							</div>
						</div>
					</div>
				</FadeInSection>

				{/* ── BACKGROUND ── */}
				<FadeInSection>
					<div className={`border-b! ${BORDER} py-30! px-6! md:px-15!`}>
						<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
								Background
							</span>
							<p className="text-[clamp(40px,6vw,90px)]! font-extrabold! leading-[0.93]! tracking-normal! capitalize! text-ink!">
								<span className="text-accent!">10+ years</span> creative
								<br />
								foundation,
								<br />
								high-profile brand projects,
								<br />
								UAE &amp; international experience
							</p>
						</div>
					</div>
				</FadeInSection>

				{/* ── CURRENT ROLE ── */}
				<FadeInSection>
					<div className={`border-b! ${BORDER} py-20! px-6! md:px-15!`}>
						<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]!">
								Current Role
							</span>
							<div>
								<h2 className="text-[clamp(36px,5vw,72px)]! font-extrabold! tracking-[-0.03em]! capitalize! text-ink! leading-[0.93]!">
									Creative Marketing Director
								</h2>
								<div className="flex! items-center! gap-3! mt-5!">
									<div className="w-9! h-9! rounded-full! bg-card! border! border-[rgba(242,237,230,0.07)]! flex! items-center! justify-center! text-[14px]! font-extrabold! text-ink!">
										V
									</div>
									<span className="text-base! font-semibold! text-ink!">
										Vinesh Studio
									</span>
								</div>
							</div>
						</div>
					</div>
				</FadeInSection>

				{/* ── STATISTICS ── */}
				<FadeInSection>
					<div className={`border-b! ${BORDER} py-20! px-6! md:px-15!`}>
						<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]!">
								Some Statistics
							</span>
							<div className="grid! grid-cols-1! sm:grid-cols-3! gap-10!">
								{[
									{
										num: "50+",
										label: "Campaign & brand projects delivered",
									},
									{
										num: "10K",
										label: "Monthly content reach across platforms",
									},
									{
										num: "300%",
										label: "Average engagement growth for clients",
									},
								].map(({ num, label }) => (
									<div key={num}>
										<div className="text-[clamp(52px,7vw,96px)]! font-extrabold! tracking-[-0.04em]! text-ink! leading-[0.9]!">
											{num}
										</div>
										<p className="text-sm! text-white/50! mt-3! leading-[1.4]!">
											{label}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</FadeInSection>

				{/* ── WHY I'M DIFFERENT ── */}
				<FadeInSection>
					<div
						className={`border-b! ${BORDER} relative! overflow-hidden!`}
					>
						<h2 className="text-[clamp(80px,14vw,220px)]! font-extrabold! leading-[0.85]! tracking-[-0.03em]! capitalize! text-accent! px-6! md:px-15! pt-14! relative! z-1!">
							Why I&apos;m Different
						</h2>

						<div className="absolute! top-0! left-1/2! -translate-x-1/2! w-95! h-full! bg-[radial-gradient(ellipse_at_center_top,rgba(224,90,68,0.12)_0%,transparent_70%)]! z-2! pointer-events-none!" />

						<div className="relative! z-3! max-w-360! mx-auto! px-6! md:px-15! pb-24! pt-14! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]!">
								My approach
							</span>
							<p className="text-[clamp(32px,4.5vw,64px)]! font-extrabold! tracking-[-0.03em]! text-ink! leading-[1.1]!">
								I approach creative marketing as{" "}
								<span className="text-accent!">applied psychology</span>{" "}
								— understanding exactly what audiences need to believe,
								then crafting comprehensive brand experiences that
								deliver those outcomes and drive business results.
							</p>
						</div>
					</div>
				</FadeInSection>

				{/* ── SHOWREEL / VIDEO ── */}
				<FadeInSection>
					<div className={`border-b! ${BORDER}`}>
						<div className="max-w-360! mx-auto! px-6! md:px-15! pb-20! pt-20! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]!">
								Showreel
							</span>
							<p className="text-[clamp(22px,3vw,40px)]! font-bold! tracking-[-0.02em]! text-white/50! leading-[1.3]!">
								Turning brand vision into visual reality — from concept
								to execution.
							</p>
						</div>

						<div
							className="relative! w-full!"
							style={{ aspectRatio: "16/9", minHeight: 320 }}
						>
							<div
								className="absolute! inset-0! flex! items-center! justify-center!"
								style={{
									background:
										"linear-gradient(135deg,#0a1520 0%,#1a3040 40%,#2a5060 70%,#1e3a50 100%)",
								}}
							>
								<div
									className="absolute! inset-0!"
									style={{
										backgroundImage:
											"linear-gradient(rgba(242,237,230,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(242,237,230,0.04) 1px,transparent 1px)",
										backgroundSize: "80px 80px",
									}}
								/>
								<button
									aria-label="Play reel"
									className="relative! z-10! w-18! h-18! rounded-full! bg-accent/90! flex! items-center! justify-center! hover:bg-accent! hover:scale-110! transition-all! duration-300! border-none! cursor-pointer!"
								>
									<svg
										width="22"
										height="24"
										viewBox="0 0 22 24"
										fill="none"
									>
										<path d="M2 2l18 10L2 22V2z" fill="#f2ede6" />
									</svg>
								</button>
							</div>

							<div className="absolute! bottom-6! right-6! z-10!">
								<Link
									href="/work"
									className="inline-flex! items-center! justify-center! px-8! py-4! bg-accent! text-ink! text-[11px]! font-bold! tracking-[0.14em]! capitalize! hover:bg-[#c94a36]! hover:-translate-y-0.5! transition-all! duration-300!"
								>
									View All Projects
								</Link>
							</div>
						</div>

						<div className="bg-[rgba(14,18,24,0.7)]! px-6! md:px-15! py-5! text-center!">
							<p className="text-xs! text-white/50!">
								All brand materials featured are property of their
								respective clients and used for portfolio demonstration
								purposes only.
							</p>
						</div>
					</div>
				</FadeInSection>

				{/* ── TESTIMONIALS ── */}
				<FadeInSection>
					<div className={`border-b! ${BORDER} py-30!`}>
						<div className="max-w-360! mx-auto! px-6! md:px-15! mb-14!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]!">
								Testimonials
							</span>
						</div>

						<div
							className="flex! gap-6! px-6! md:px-15! overflow-x-auto! pb-4! cursor-grab!"
							style={{ scrollbarWidth: "none" }}
						>
							{TESTIMONIALS.map(({ quote, name, role }, i) => (
								<div
									key={i}
									className="shrink-0! w-[min(460px,80vw)]! bg-card! border! border-[rgba(242,237,230,0.07)]! p-10! flex! flex-col! gap-8! hover:border-accent! transition-colors! duration-300!"
								>
									<span className="text-5xl! text-accent! font-black! leading-none!">
										&ldquo;
									</span>
									<p className="text-[clamp(18px,2vw,26px)]! font-bold! leading-[1.2]! tracking-[-0.02em]! text-ink!">
										{quote}
									</p>
									<div className="mt-auto!">
										<p className="text-[15px]! font-bold! text-ink!">
											{name}
										</p>
										<p className="text-[13px]! text-white/50! mt-0.5!">
											{role}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</FadeInSection>
			</main>

			<Footer />
		</div>
	);
}
