"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";

interface WorkHeroProps {
	activeCategory?: "branding" | "graphics" | "logos";
}

export default function WorkHero({
	activeCategory = "branding",
}: WorkHeroProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll();

	const accentWords = [
		"how",
		"strategic",
		"creative",
		"thinking",
		"transforms",
		"business",
		"outcomes.",
	];

	// Map scroll progress (0 to 450px) to active word index
	const activeIndexTransform = useTransform(
		scrollY,
		[0, 400],
		[0, accentWords.length - 1],
		{ clamp: true },
	);

	return (
		<section
			ref={containerRef}
			className={`${
				activeCategory === "branding"
					? "min-h-screen! py-20! md:py-40!"
					: "pt-32! md:pt-40! pb-10!"
			} flex-col! items-center! px-6! md:px-10! border-b! border-[rgba(29,29,31,0.08)]!`}
		>
			<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start! w-full!">
				<div></div>
				<div
					className={`flex gap-4 sm:gap-5 justify-start ${
						activeCategory === "branding" ? "mb-20" : "mb-0"
					} flex-wrap`}
				>
					<Link
						href="/work"
						className={`uppercase! inline-flex! items-center! justify-center! px-8! py-4! text-base! font-bold! tracking-[0.14em]! transition-all! duration-300! rounded-sm! ${
							activeCategory === "branding"
								? "bg-accent! text-white! shadow-md!"
								: "bg-black/6! text-ink/70! hover:bg-black/10! hover:text-ink!"
						}`}
					>
						Branding
					</Link>
					<Link
						href="/graphics"
						className={`uppercase! inline-flex! items-center! justify-center! px-8! py-4! text-base! font-bold! tracking-[0.14em]! transition-all! duration-300! rounded-sm! ${
							activeCategory === "graphics"
								? "bg-accent! text-white! shadow-md!"
								: "bg-black/6! text-ink/70! hover:bg-black/10! hover:text-ink!"
						}`}
					>
						Graphic
					</Link>
					<Link
						href="/logo"
						className={`uppercase! inline-flex! items-center! justify-center! px-8! py-4! text-base! font-bold! tracking-[0.14em]! transition-all! duration-300! rounded-sm! ${
							activeCategory === "logos"
								? "bg-accent! text-white! shadow-md!"
								: "bg-black/6! text-ink/70! hover:bg-black/10! hover:text-ink!"
						}`}
					>
						Logos
					</Link>
				</div>
			</div>

			{activeCategory === "branding" && (
				<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start! w-full!">
					<span className="text-xl! font-semibold! text-ink/60! tracking-[0.06em]! pt-2!">
						Turning Insight into Impact
					</span>
					<h1 className="text-[clamp(32px,8vw,120px)]! font-extrabold! leading-[0.92]! tracking-[-0.03em]! capitalize! text-ink!">
						Case studies demonstrating{" "}
						<span className="inline-flex! flex-wrap! gap-x-[0.25em]!">
							{accentWords.map((word, idx) => (
								<WordWrapper
									key={idx}
									word={word}
									index={idx}
									activeIndexTransform={activeIndexTransform}
								/>
							))}
						</span>
					</h1>
				</div>
			)}
		</section>
	);
}

interface WordWrapperProps {
	word: string;
	index: number;
	activeIndexTransform: MotionValue<number>;
}

function WordWrapper({ word, index, activeIndexTransform }: WordWrapperProps) {
	const [active, setActive] = useState(index === 0);

	useEffect(() => {
		return activeIndexTransform.on("change", (v: number) => {
			const currentIdx = Math.round(v);
			setActive(currentIdx === index);
		});
	}, [activeIndexTransform, index]);

	return (
		<motion.span
			animate={{
				color: active ? "#e05a44" : "rgba(29, 29, 31, 0.45)",
			}}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="inline-block! transition-colors!"
		>
			{word}
		</motion.span>
	);
}
