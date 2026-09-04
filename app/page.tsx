import React from "react";
import Link from "next/link";
import Nav from "./components/nav";
import Footer from "./components/footer";
import FadeInSection from "./components/fade-in-section";
import ClientMarquee from "./components/client-marquee";
import HeroCards from "./components/hero-cards";

const BORDER = "border-[rgba(29,29,31,0.08)]!";

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
				An <span className="text-accent!">exceptional professional</span>{" "}
				whose creativity, leadership, and ability to handle complex projects
				set him apart. He consistently delivers outstanding results and
				inspires those around him.
			</>
		),
		name: "Julio Rafael",
		role: "Corporate Marketing & Communications Leader · Jannah Hotels + Resorts",
	},
	{
		quote: (
			<>
				Vinesh consistently demonstrates an{" "}
				<span className="text-accent!">
					exceptional level of creativity and innovation
				</span>
				. His vision and ability to translate concepts into impactful visual
				representations greatly contributed to our success.
			</>
		),
		name: "Sajeya Khan",
		role: "HR Manager & Consultant · Emirates Park Zoo and Resort",
	},
	{
		quote: (
			<>
				A creative designer whose skills helped us{" "}
				<span className="text-accent!">win key business from clients</span>.
				His attention to detail, tenacity, and proactive attitude are
				admirable.
			</>
		),
		name: "Siddarth Kamath",
		role: "S&P (Sourcing and Procurement) CONSULTANT · India Konnekt Enterprises",
	},
];

export default function Home() {
	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main>
				{/* ── HERO ── */}
				<section className="relative! min-h-screen! flex! flex-col! justify-center! overflow-hidden! pt-28! pb-16!">
					{/* <video
						src="/common/loader_logo.mp4"
						autoPlay
						loop
						muted
						playsInline
						className="absolute! inset-0! z-0! h-full! w-full! object-cover!"
					/> */}
					<img
						src={"/common/banner.png"}
						className="absolute! inset-0! z-0! h-full! w-full! object-cover!"
					/>

					{/* Light gradient overlay */}
					<div className="absolute! inset-0! bg-linear-to-b! from-[rgba(245,245,247,0.35)]! via-[rgba(245,245,247,0.75)]! to-[rgba(245,245,247,0.98)]! z-1!" />

					{/* Content */}
					<div className="relative! z-2! mx-auto! w-full! px-6! md:px-12! grid! grid-cols-1! lg:grid-cols-[1fr_auto]! items-center! gap-10! lg:gap-12!">
						<div className="flex! flex-col!">
							<h1 className="text-[clamp(34px,7.5vw,105px)]! font-black! uppercase! leading-[1.01]! tracking-[0.03em]! text-ink!">
								BUILDING BRANDS
								<br />
								FROM
								<span className="font-serif-italic text-accent! lowercase inline-block! mx-3! sm:mx-4! px-1! text-[1.12em]! align-baseline! relative! -top-[0.04em]! tracking-normal!">
									idea
								</span>
								TO
								<br />
								IMPACT
							</h1>

							<p className="text-[clamp(16px,1.8vw,21px)]! text-ink/70! font-medium! leading-[1.45]! mt-8! max-w-xl!">
								I shape brand identities, campaign visuals, social
								systems, pitch decks, and AI-powered creative direction
								for hospitality, lifestyle, and digital-first
								businesses.
							</p>

							<div className="flex! flex-wrap! items-center! gap-4! mt-8!">
								<Link
									href="/work"
									className="uppercase! inline-flex! items-center! justify-center! px-8! py-4! bg-[#1D1D1F]! text-[#F5F5F7]! text-xs! font-extrabold! tracking-[0.14em]! rounded-full! transition-all! duration-300! hover:bg-accent! hover:text-white! hover:scale-105! shadow-sm!"
								>
									VIEW SELECTED WORK
								</Link>
								<Link
									href="#positioning"
									className="uppercase! inline-flex! items-center! justify-center! px-8! py-4! border! border-[rgba(29,29,31,0.2)]! text-ink! text-xs! font-extrabold! tracking-[0.14em]! rounded-full! transition-all! duration-300! hover:border-accent! hover:text-accent! hover:scale-105!"
								>
									WHAT I DO
								</Link>
							</div>
						</div>

						{/* Right side: 3D Floating Cards */}
						{/* <div className="w-full! lg:w-auto!">
							<HeroCards />
						</div> */}
					</div>
				</section>

				{/* ── POSITIONING ("NOT JUST DESIGN.") ── */}
				<FadeInSection>
					<section
						id="positioning"
						className={`border-b! ${BORDER} py-24! md:py-32! px-6! md:px-15! relative!`}
					>
						<div className="mx-auto! grid! grid-cols-1! gap-10! items-start!">
							{/* Left tag */}
							<span className="text-xs! font-extrabold! text-accent! uppercase! tracking-[0.2em]! pt-3!">
								POSITIONING
							</span>

							{/* Main positioning content */}
							<div>
								<h2 className="text-[clamp(44px,8vw,110px)]! font-black! uppercase! leading-[0.88]! tracking-[-0.03em]! text-ink!">
									NOT JUST
									<br />
									DESIGN.
									<br />
									<span className="font-serif-italic text-accent capitalize inline-block px-1! text-[1.1em]!">
										Direction.
									</span>
								</h2>

								<p className="text-[clamp(18px,2.2vw,24px)]! text-ink/70! font-medium! leading-[1.4]! mt-8! max-w-2xl!">
									I help brands move from basic visuals to a sharper
									creative system — the idea, the look, the content,
									and the final presentation working together.
								</p>

								{/* Brand / Logo Grid */}
								<div className="mt-14! rounded-2xl! border! border-[rgba(29,29,31,0.08)]! bg-white/80! backdrop-blur-md! overflow-hidden! grid! grid-cols-2! sm:grid-cols-4! shadow-xs!">
									{[
										{
											id: 1,
											src: "/home-logo/img1.webp",
											alt: "Brand Logo 1",
										},
										{
											id: 2,
											src: "/home-logo/img2.webp",
											alt: "Brand Logo 2",
										},
										{
											id: 3,
											src: "/home-logo/img3.webp",
											alt: "Brand Logo 3",
										},
										{
											id: 4,
											src: "/home-logo/img4.webp",
											alt: "Brand Logo 4",
										},
										{
											id: 5,
											src: "/home-logo/img5.webp",
											alt: "Brand Logo 5",
										},
										{
											id: 6,
											src: "/home-logo/img6.webp",
											alt: "Brand Logo 6",
										},
										{
											id: 7,
											src: "/home-logo/img7.webp",
											alt: "Brand Logo 7",
										},
										{
											id: 8,
											src: "/home-logo/img8.webp",
											alt: "Brand Logo 8",
										},
									].map((logo) => (
										<div
											key={logo.id}
											className="p-6! sm:p-8! text-center! border-b! border-r! border-[rgba(29,29,31,0.06)]! hover:bg-accent/5! transition-all! duration-300! flex! items-center! justify-center! min-h-[110px]! group!"
										>
											<img
												src={logo.src}
												alt={logo.alt}
												className="max-h-18! max-w-[130px]! w-auto! h-auto! object-contain! transition-transform! duration-300! group-hover:scale-105!"
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</section>
				</FadeInSection>

				{/* ── CLIENTS ── */}
				{/* <FadeInSection>
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
				</FadeInSection> */}

				{/* ── BACKGROUND ── */}
				{/* <FadeInSection>
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
				</FadeInSection> */}

				{/* ── CURRENT ROLE ── */}
				{/* <FadeInSection>
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
				</FadeInSection> */}

				{/* ── STATISTICS ── */}
				{/* <FadeInSection>
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
				</FadeInSection> */}

				{/* ── WHY I'M DIFFERENT ── */}
				<FadeInSection>
					<div
						className={`border-b! ${BORDER} relative! overflow-hidden!`}
					>
						<h2 className="text-[clamp(30px,8.5vw,110px)]! font-extrabold! leading-[0.85]! tracking-[-0.03em]! capitalize! text-accent! px-6! md:px-15! pt-14! relative! z-1!">
							My approach
						</h2>

						<div className="absolute! top-0! left-1/2! -translate-x-1/2! w-95! h-full! bg-[radial-gradient(ellipse_at_center_top,rgba(224,90,68,0.12)_0%,transparent_70%)]! z-2! pointer-events-none!" />

						<div className="relative! z-3! mx-auto! px-6! md:px-15! pb-24! pt-14! grid! grid-cols-1! gap-10! items-start!">
							{/* <span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]!">
								My approach
							</span> */}
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
				{/* <FadeInSection>
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
				</FadeInSection> */}

				{/* ── TESTIMONIALS ── */}
				<FadeInSection>
					<div className={`border-b! ${BORDER} py-30!`}>
						<div className="max-w-360! mx-auto! px-6! md:px-15! mb-14!">
							<span className="text-xl! font-semibold! text-ink/60! tracking-[0.06em]!">
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
									className="shrink-0! w-[min(460px,80vw)]! bg-card! border! border-[rgba(29,29,31,0.08)]! p-10! flex! flex-col! gap-8! hover:border-accent! transition-colors! duration-300! shadow-xs!"
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
										<p className="text-[13px]! text-ink/60! mt-0.5!">
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
