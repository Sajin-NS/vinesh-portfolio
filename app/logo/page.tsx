import React from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/footer";
import LogoGallery from "./logo-gallery";

export const metadata = {
	title: "Logo Showcase — Vinesh Studio",
	description:
		"A index of logos, brand marks, and identity systems designed for diverse visual landscapes.",
};

export default function LogoPage() {
	const BORDER = "border-[rgba(242,237,230,0.07)]!";

	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main className="pt-[140px]! md:pt-[180px]!">
				{/* ── HEADER & BACK NAVIGATION ── */}
				<section className="px-6! md:px-10! pb-14! border-b! border-[rgba(242,237,230,0.07)]!">
					<div className="max-w-[1440px]! mx-auto!">
						<Link
							href="/work"
							className="inline-flex! items-center! gap-2! text-white/50! hover:text-accent! transition-colors! duration-300! text-base! font-semibold! tracking-[0.06em]! mb-10! group!"
						>
							<svg
								className="w-4! h-4! transition-transform! duration-300! group-hover:-translate-x-1!"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2.5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10 19l-7-7m0 0l-7 7m-7 7h18"
								/>
							</svg>
							<span>Back to Work</span>
						</Link>

						<div className="grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-6! items-start!">
							<span className="text-xl! font-bold! text-accent! tracking-widest! uppercase! pt-2!">
								Index
							</span>
							<div>
								<span className="text-[14px]! text-white/40! font-bold! tracking-widest! uppercase! block! mb-4!">
									Identity Showcase
								</span>
								<h1 className="text-[clamp(44px,7vw,100px)]! font-extrabold! leading-[0.9]! tracking-[-0.03em]! capitalize! text-ink!">
									Logo Works
								</h1>
							</div>
						</div>
					</div>
				</section>

				{/* ── OVERVIEW ── */}
				<section className={`py-16! px-6! md:px-10! border-b! ${BORDER}`}>
					<div className="max-w-[1440px]! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-12! items-start!">
						<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
							The Art of the Mark
						</span>
						<div>
							<p className="text-[clamp(18px,2.4vw,28px)]! font-bold! text-ink! leading-[1.3]! tracking-[-0.02em]! max-w-[900px]!">
								A collection of logos, identity symbols, and brand icons
								crafted to communicate value, establish recognition, and
								leave a lasting impression in a single glance.
							</p>
						</div>
					</div>
				</section>

				{/* ── LOGOS MASONRY GALLERY ── */}
				<section className={`py-20! px-6! md:px-10! border-b! ${BORDER}`}>
					<div className="max-w-360! mx-auto!">
						<div className="mb-14!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! block! mb-2!">
								Identity Gallery
							</span>
							<h2 className="text-[32px]! font-extrabold! tracking-[-0.02em]! text-ink!">
								Marks, Symbols &amp; Logotypes
							</h2>
						</div>

						<LogoGallery />
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
