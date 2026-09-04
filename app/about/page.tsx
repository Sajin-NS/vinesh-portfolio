import React from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/footer";
import FadeInSection from "../components/fade-in-section";

export const metadata = {
	title: "About — Vinesh Studio",
	description:
		"16+ years of making, learning, experimenting and creative leadership across brand identity, digital experiences, and creative direction.",
};

const BORDER = "border-[rgba(29,29,31,0.08)]!";

const STORY = [
	{
		label: "01 · Origin",
		title: "It started with design.",
		body: (
			<>
				<p>
					I began as a designer obsessed with visual communication —
					typography, composition, imagery and the tiny details that make
					something feel right.
				</p>
				<p className="mt-4!">
					But making brands look better eventually led to a bigger
					question:
					<br />
					<span className="font-bold! text-ink!">
						Can design make them work better too?
					</span>
				</p>
				<p className="mt-4! text-accent! font-semibold!">
					That question changed the way I work.
				</p>
			</>
		),
	},
	{
		label: "02 · Growth",
		title: "Design became strategy.",
		body: (
			<>
				<p>
					Years of working across hospitality, F&B, lifestyle and digital
					brands taught me that creativity doesn&apos;t live in isolation.
				</p>
				<p className="mt-4! space-y-1!">
					<span className="block!">
						A beautiful campaign means little if nobody remembers it.
					</span>
					<span className="block!">
						A great website means little if nobody uses it.
					</span>
					<span className="block!">
						And marketing means little if it doesn&apos;t move people.
					</span>
				</p>
				<p className="mt-4! text-ink! font-medium!">
					So I learned to connect the dots — between brand, content,
					digital, technology and business.
				</p>
			</>
		),
	},
	{
		label: "03 · Now",
		title: "Today, I build across all of them.",
		body: (
			<>
				<p>
					I work across creative direction, campaigns, brand systems,
					digital experiences and AI-assisted production — moving
					comfortably between the idea and the execution.
				</p>
				<p className="mt-4!">I still care deeply about how things look.</p>
				<p className="mt-2! text-ink! font-semibold!">
					I just care equally about why they exist, how they work and what
					happens after people see them.
				</p>
			</>
		),
	},
];

const CAPABILITIES = [
	"Creative Direction",
	"Brand Identity & Visual Systems",
	"Campaigns & Social Content",
	"Hospitality & F&B Creative",
	"Web & Digital Experiences",
	"AI & Emerging Creative",
];

export default function AboutPage() {
	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main>
				{/* ── HERO ── */}
				<section className="relative! min-h-screen! flex! items-end! overflow-hidden!">
					<img
						className="absolute! inset-0! z-0! min-h-screen! object-cover! w-full!"
						src={`/common/home-banner.png`}
						alt="Banner background"
					/>
					<div className="absolute! inset-0! bg-[radial-gradient(ellipse_70%_60%_at_60%_30%,rgba(224,90,68,0.12)_0%,transparent_70%)]! z-0!" />
					<div className="absolute! inset-0! bg-linear-to-b! from-[rgba(245,245,247,0.2)]! via-[rgba(245,245,247,0.8)]! to-bg! z-1!" />

					<div className="relative! z-2! w-full! max-w-360! mx-auto! px-6! md:px-10! pb-20! flex! justify-between! items-end! flex-col! md:flex-row! gap-5!">
						<h1 className="text-[clamp(52px,9vw,110px)]! font-extrabold! leading-[0.9]! tracking-[-0.03em]! capitalize! text-ink!">
							16 Years
							<br />
							of <span className="text-accent!">Craft</span>
						</h1>
						<span className="text-[13px]! font-semibold! text-ink/60! tracking-[0.08em]!">
							Scroll down ↓
						</span>
					</div>
				</section>

				{/* ── INSIGHT ── */}
				<FadeInSection>
					<div
						className={`border-b! ${BORDER} py-28! md:py-36! px-6! md:px-10!`}
					>
						<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start!">
							<span className="text-xl! font-semibold! text-ink/60! tracking-[0.06em]! pt-2!">
								Insight
							</span>
							<div>
								<h2 className="text-[clamp(32px,5vw,72px)]! font-extrabold! leading-[0.95]! tracking-[-0.03em]! text-ink! mb-8!">
									<span className="text-accent!">
										Good creative gets attention.
									</span>
									<br />
									Great creative knows what to do with it.
								</h2>
								<div className="text-[clamp(18px,2.2vw,26px)]! font-medium! leading-[1.45]! text-ink/80! max-w-3xl! space-y-5!">
									<p>
										I work at the intersection of design, marketing
										and technology — understanding the brand, the
										audience and the business problem before deciding
										what needs to be made.
									</p>
									<div className="space-y-1.5! text-ink/90! font-semibold! pt-2!">
										<p>Sometimes that&apos;s a campaign.</p>
										<p>Sometimes a website.</p>
										<p>Sometimes a complete visual system.</p>
									</div>
									<p className="text-ink! font-extrabold! pt-2!">
										The medium changes. The thinking doesn&apos;t.
									</p>
								</div>
							</div>
						</div>
					</div>
				</FadeInSection>

				{/* ── PHILOSOPHY ── */}
				<FadeInSection>
					<div
						className={`border-b! ${BORDER} py-28! md:py-36! px-6! md:px-10!`}
					>
						<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start!">
							<span className="text-xl! font-semibold! text-ink/60! tracking-[0.06em]! pt-2!">
								Philosophy
							</span>
							<div>
								<p className="text-[clamp(28px,4.2vw,58px)]! font-extrabold! tracking-[-0.03em]! text-ink! leading-[1.12]! mb-8!">
									I don&apos;t believe in making things just because
									they look good.
									<br />
									<span className="text-accent!">
										Every colour, frame, word and interaction should
										have a reason to exist.
									</span>
								</p>
								<p className="text-[clamp(18px,2vw,24px)]! font-medium! text-ink/70! leading-[1.5]! max-w-2xl!">
									My process is simple: understand the brand,
									understand the people, find the idea — then make it
									beautifully.
								</p>
							</div>
						</div>
					</div>
				</FadeInSection>

				{/* ── STORY ── */}
				<FadeInSection>
					<section
						className={`border-b! ${BORDER} py-28! md:py-36! px-6! md:px-10!`}
					>
						<div className="max-w-360! mx-auto! flex! flex-col!">
							{STORY.map(({ label, title, body }, i) => (
								<div
									key={label}
									className={`grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! py-16! ${
										i < STORY.length - 1 ? `border-b! ${BORDER}` : ""
									} ${i === 0 ? "pt-0!" : ""} ${i === STORY.length - 1 ? "pb-0!" : ""}`}
								>
									<span className="text-xl! font-semibold! text-ink/60! tracking-[0.06em]! pt-2!">
										{label}
									</span>
									<div>
										<h3 className="text-[clamp(26px,3.5vw,46px)]! font-extrabold! tracking-[-0.02em]! text-ink! leading-[1.05]! mb-6!">
											{title}
										</h3>
										<div className="text-[clamp(16px,1.8vw,21px)]! text-ink/70! leading-[1.6]! max-w-185!">
											{body}
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				</FadeInSection>

				{/* ── CAPABILITIES ── */}
				<FadeInSection>
					<section
						className={`border-b! ${BORDER} py-28! md:py-36! px-6! md:px-10!`}
					>
						<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10!">
							<span className="text-xl! font-semibold! text-ink/60! tracking-[0.06em]! pt-2!">
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
										<span className="text-[clamp(18px,2.5vw,32px)]! font-extrabold! tracking-tight! capitalize! text-ink/75! group-hover:text-ink! transition-colors! duration-300!">
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

				{/* ── SUMMARY & CTA ── */}
				<FadeInSection>
					<div className="py-28! md:py-36! px-6! md:px-10! text-center! max-w-4xl! mx-auto!">
						<p className="text-[clamp(18px,2.2vw,26px)]! font-bold! text-ink/80! leading-[1.4]! mb-4!">
							16+ years of making, learning, experimenting and
							occasionally questioning everything.
						</p>
						<p className="text-base! md:text-lg! text-ink/60! font-semibold! tracking-wide! mb-12!">
							Based in UAE. Working with brands anywhere.
						</p>

						<h3 className="text-[clamp(32px,5vw,68px)]! font-black! tracking-[-0.03em]! text-ink! leading-[1.05]! mb-10!">
							Have something interesting in mind?
						</h3>

						<Link
							href="/contact"
							className="inline-flex! items-center! justify-center! px-10! py-5! bg-accent! text-white! text-xs! md:text-sm! font-extrabold! tracking-[0.14em]! uppercase! hover:bg-[#c94a36]! hover:-translate-y-0.5! transition-all! duration-300! shadow-md! rounded-full!"
						>
							Let&apos;s make it worth noticing.
						</Link>
					</div>
				</FadeInSection>
			</main>

			<Footer />
		</div>
	);
}
