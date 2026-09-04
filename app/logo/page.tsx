import React from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/footer";
import WorkHero from "../work/work-hero";
import LogoGallery from "./logo-gallery";

export const metadata = {
	title: "Logo Showcase — Vinesh Studio",
	description:
		"A index of logos, brand marks, and identity systems designed for diverse visual landscapes.",
};

export default function LogoPage() {
	const BORDER = "border-[rgba(29,29,31,0.08)]!";

	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main>
				{/* ── HERO WITH LOGOS CATEGORY SELECTED ── */}
				<WorkHero activeCategory="logos" />

				{/* ── HEADER & BACK NAVIGATION ── */}
				<section className="px-6! md:px-10! py-14! border-b! border-[rgba(29,29,31,0.08)]!">
					<div className="max-w-360! mx-auto!">
						<div className="grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-6! items-start!">
							<span className="text-xl! font-bold! text-accent! tracking-widest! uppercase! pt-2!">
								LOGO
							</span>
							<div>
								<span className="text-sm! text-ink/50! font-bold! tracking-widest! uppercase! block! mb-4!">
									Identity Showcase
								</span>
								<h1 className="text-[clamp(30px,7vw,100px)]! font-extrabold! leading-[0.9]! tracking-[-0.03em]! capitalize! text-ink!">
									Logo Works
								</h1>
							</div>
						</div>
					</div>
				</section>

				{/* ── OVERVIEW ── */}
				<section className={`py-16! px-6! md:px-10! border-b! ${BORDER}`}>
					<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-12! items-start!">
						<span className="text-xl! font-semibold! text-ink/60! tracking-[0.06em]! pt-2!">
							The Art of the Mark
						</span>
						<div>
							<p className="text-[clamp(18px,2.4vw,28px)]! font-bold! text-ink! leading-[1.3]! tracking-[-0.02em]! max-w-225!">
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
							<span className="text-xl! font-semibold! text-ink/60! tracking-[0.06em]! block! mb-2!">
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
