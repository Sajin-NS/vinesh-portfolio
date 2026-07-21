import React from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/footer";
import FadeInSection from "../components/fade-in-section";
import Image from "next/image";
import { PROJECTS } from "./data";

export const metadata = {
	title: "Work — Vinesh Studio",
	description:
		"Case studies demonstrating how strategic creative thinking transforms business outcomes.",
};

const BORDER = "border-[rgba(242,237,230,0.07)]!";

export default function WorkPage() {
	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main>
				{/* ── HERO ── */}
				<section className="min-h-screen! flex! items-center! px-6! md:px-10! py-40! border-b! border-[rgba(242,237,230,0.07)]!">
					<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start! w-full!">
						<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
							Turning Insight into Impact
						</span>
						<h1 className="text-[clamp(52px,8vw,120px)]! font-extrabold! leading-[0.92]! tracking-[-0.03em]! capitalize! text-ink!">
							Case studies demonstrating{" "}
							<span className="text-accent!">
								how strategic creative thinking transforms business
								outcomes.
							</span>
						</h1>
					</div>
				</section>

				{/* ── CASE STUDIES ── */}
				{PROJECTS.map((c) => (
					<FadeInSection key={c.num}>
						<section
							className={`py-25! px-6! md:px-10! border-b! ${BORDER}`}
						>
							<div className="max-w-360! mx-auto!">
								{/* Header row */}
								<div className="grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start! mb-14!">
									<span className="text-xl! font-bold! text-accent! tracking-widest! capitalize!">
										{c.num}
									</span>
									<div>
										<h2 className="text-[clamp(42px,7vw,100px)]! font-extrabold! tracking-[-0.03em]! capitalize! text-ink! leading-[0.9]! flex! items-center! gap-5! flex-wrap!">
											<Link
												href={`/work/${c.case_slug}`}
												className="hover:text-accent! transition-colors! duration-300!"
											>
												{c.title}
											</Link>
										</h2>
										<p className="text-[14px]! text-white/50! mt-3! tracking-[0.04em]!">
											{c.subtitle}
										</p>
									</div>
								</div>

								{/* Description */}
								<p className="text-[clamp(18px,2.2vw,28px)]! font-bold! text-ink! leading-[1.3]! tracking-[-0.02em]! max-w-225! ml-auto!">
									{c.desc}
								</p>

								{/* Gallery */}
								<div className="grid! grid-cols-1! md:grid-cols-4! gap-6! mt-14! items-end!">
									{/* Image 1: Left (Narrow, Tall) */}
									<Link
										href={`/work/${c.case_slug}`}
										className="relative! block! overflow-hidden! rounded-lg! border! border-[rgba(242,237,230,0.07)]! group! h-80! md:h-110! md:col-span-1! cursor-pointer!"
									>
										<Image
											src={c.gallery[0] || "/images/hero_bg.jpg"}
											alt={`${c.title} Detail 1`}
											fill
											className="object-cover! group-hover:scale-105! transition-transform! duration-700! ease-out!"
											sizes="(max-width: 768px) 100vw, 25vw"
										/>
										<div className="absolute! inset-0! bg-black/20! group-hover:bg-black/0! transition-colors! duration-500!" />
									</Link>

									{/* Image 2: Center (Wide, Very Tall) */}
									<Link
										href={`/work/${c.case_slug}`}
										className="relative! block! overflow-hidden! rounded-lg! border! border-[rgba(242,237,230,0.07)]! group! h-95! md:h-135! md:col-span-2! cursor-pointer!"
									>
										<Image
											src={c.gallery[1] || "/images/hero_bg.jpg"}
											alt={`${c.title} Detail 2`}
											fill
											className="object-cover! group-hover:scale-105! transition-transform! duration-700! ease-out!"
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
										<div className="absolute! inset-0! bg-black/20! group-hover:bg-black/0! transition-colors! duration-500!" />

										{/* Explore Case Study Hover overlay button */}
										<div className="absolute! bottom-6! left-6! z-2! opacity-0! group-hover:opacity-100! transition-opacity! duration-500! hidden! md:block!">
											<span className="text-[12px]! font-bold! tracking-widest! uppercase! bg-accent! text-ink! px-3! py-1.5! rounded-sm!">
												Explore Case Study
											</span>
										</div>
									</Link>

									{/* Image 3: Right (Narrow, Shorter) */}
									<Link
										href={`/work/${c.case_slug}`}
										className="relative! block! overflow-hidden! rounded-lg! border! border-[rgba(242,237,230,0.07)]! group! h-[280px]! md:h-[380px]! md:col-span-1! cursor-pointer!"
									>
										<Image
											src={c.gallery[2] || "/images/hero_bg.jpg"}
											alt={`${c.title} Detail 3`}
											fill
											className="object-cover! group-hover:scale-105! transition-transform! duration-700! ease-out!"
											sizes="(max-width: 768px) 100vw, 25vw"
										/>
										<div className="absolute! inset-0! bg-black/20! group-hover:bg-black/0! transition-colors! duration-500!" />
									</Link>
								</div>
							</div>
						</section>
					</FadeInSection>
				))}

				{/* ── LATEST LOGO WORKS ── */}
				<FadeInSection>
					<section
						className={`py-[100px]! px-6! md:px-10! border-b! ${BORDER}`}
					>
						<div className="max-w-[1440px]! mx-auto!">
							{/* Header row */}
							<div className="grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start! mb-14!">
								<span className="text-xl! font-bold! text-accent! tracking-widest! capitalize!">
									logo
								</span>
								<div>
									<h2 className="text-[clamp(42px,7vw,100px)]! font-extrabold! tracking-[-0.03em]! capitalize! text-ink! leading-[0.9]! flex! items-center! gap-5! flex-wrap!">
										<Link
											href="/logo"
											className="hover:text-accent! transition-colors! duration-300!"
										>
											Logo Showcase
										</Link>
									</h2>
									<p className="text-[14px]! text-white/50! mt-5! tracking-[0.04em]!">
										Concept - Identity Design
									</p>
								</div>
							</div>

							{/* Description */}
							<p className="text-[clamp(18px,2.2vw,28px)]! font-bold! text-ink! leading-[1.3]! tracking-[-0.02em]! max-w-[900px]! ml-auto!">
								A curated selection of logos, symbols, and wordmarks
								designed to encapsulate brand essence, facilitate
								instant recognition, and establish lasting visual
								connections.
							</p>

							{/* Gallery (3 logos) */}
							<div className="grid! grid-cols-1! md:grid-cols-3! gap-6! mt-14! items-stretch!">
								{[
									{ src: "/logo/img1.jpg", title: "Identity Mark 1" },
									{ src: "/logo/img2.jpg", title: "Identity Mark 2" },
									{ src: "/logo/img3.jpg", title: "Identity Mark 3" },
								].map((logo) => (
									<Link
										key={logo.src}
										href="/logo"
										className="relative! block! overflow-hidden! rounded-[8px]! border! border-[rgba(242,237,230,0.07)]! group! h-[280px]! md:h-[360px]! cursor-pointer!"
									>
										<Image
											src={logo.src}
											alt={logo.title}
											fill
											className="object-cover! group-hover:scale-105! transition-transform! duration-700! ease-out!"
											sizes="(max-width: 768px) 100vw, 33vw"
										/>
										{/* <div className="absolute! inset-0! bg-black/20! group-hover:bg-black/0! transition-colors! duration-500!" /> */}
									</Link>
								))}
							</div>

							{/* View All Button */}
							<div className="mt-14! flex! justify-end!">
								<Link
									href="/logo"
									className="inline-flex! items-center! gap-3! text-[16px]! font-bold! tracking-widest! uppercase! border-b-2! border-accent! pb-2! hover:gap-5! transition-all! duration-300! group!"
								>
									<span>View All Logos</span>
									<svg
										className="w-5! h-5! text-accent! transition-transform! duration-300! group-hover:translate-x-1!"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="3"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
								</Link>
							</div>
						</div>
					</section>
				</FadeInSection>
			</main>

			<Footer />
		</div>
	);
}
