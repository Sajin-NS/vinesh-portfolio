import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import WorkHero from "../work/work-hero";
import GraphicsGallery from "./graphics-gallery";

export const metadata = {
	title: "Graphic Design Showcase — Vinesh Studio",
	description:
		"Selected graphic design works, marketing campaign art, digital visuals, and key visual systems.",
};

export default function GraphicsPage() {
	const BORDER = "border-[rgba(242,237,230,0.07)]!";

	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main>
				{/* ── HERO WITH GRAPHIC CATEGORY SELECTED ── */}
				<WorkHero activeCategory="graphics" />

				{/* ── HEADER & INDEX ── */}
				<section className="px-6! md:px-10! py-14! border-b! border-[rgba(242,237,230,0.07)]!">
					<div className="max-w-360! mx-auto!">
						<div className="grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-6! items-start!">
							<span className="text-xl! font-bold! text-accent! tracking-widest! uppercase! pt-2!">
								GRAPHIC
							</span>
							<div>
								<span className="text-sm! text-white/40! font-bold! tracking-widest! uppercase! block! mb-4!">
									Graphic Design Showcase
								</span>
								<h1 className="text-[clamp(30px,7vw,100px)]! font-extrabold! leading-[0.9]! tracking-[-0.03em]! capitalize! text-ink!">
									Graphic Works
								</h1>
							</div>
						</div>
					</div>
				</section>

				{/* ── OVERVIEW ── */}
				<section className={`py-16! px-6! md:px-10! border-b! ${BORDER}`}>
					<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-12! items-start!">
						<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
							Visual Systems &amp; Key Art
						</span>
						<div>
							<p className="text-[clamp(18px,2.4vw,28px)]! font-bold! text-ink! leading-[1.3]! tracking-[-0.02em]! max-w-225!">
								High-impact visual direction, promotional graphic
								systems, key art compositions, and multi-channel
								campaign designs crafted for maximum engagement.
							</p>
						</div>
					</div>
				</section>

				{/* ── GRAPHICS GALLERY ── */}
				<section className={`py-20! px-6! md:px-10! border-b! ${BORDER}`}>
					<div className="max-w-360! mx-auto!">
						<div className="mb-14!">
							<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! block! mb-2!">
								Graphic Gallery
							</span>
							<h2 className="text-[32px]! font-extrabold! tracking-[-0.02em]! text-ink!">
								Visuals &amp; Campaign Art
							</h2>
						</div>

						<GraphicsGallery />
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
