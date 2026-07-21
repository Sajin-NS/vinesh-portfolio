"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WorkHero() {
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
			className="min-h-screen! flex! items-center! px-6! md:px-10! py-40! border-b! border-[rgba(242,237,230,0.07)]!"
		>
			<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-10! items-start! w-full!">
				<span className="text-xl! font-semibold! text-white/50! tracking-[0.06em]! pt-2!">
					Turning Insight into Impact
				</span>
				<h1 className="text-[clamp(52px,8vw,120px)]! font-extrabold! leading-[0.92]! tracking-[-0.03em]! capitalize! text-ink!">
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
		</section>
	);
}

interface WordWrapperProps {
	word: string;
	index: number;
	activeIndexTransform: any;
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
				color: active ? "#e05a44" : "rgba(242, 237, 230, 0.7)",
			}}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="inline-block! transition-colors!"
		>
			{word}
		</motion.span>
	);
}
