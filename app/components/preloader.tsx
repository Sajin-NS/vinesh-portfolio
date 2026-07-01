"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Lock scrolling on layout load
		document.body.style.overflow = "hidden";

		const timer = setTimeout(() => {
			setLoading(false);
			document.body.style.overflow = "";
		}, 2200);

		return () => {
			clearTimeout(timer);
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<AnimatePresence>
			{loading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{
						opacity: 0,
						transition: { duration: 0.8, ease: "easeInOut" },
					}}
					className="fixed! inset-0! z-9999! flex! flex-col! items-center! justify-center! bg-bg!"
				>
					<div className="flex! flex-col! items-center! gap-7!">
						{/* Spinning/rotating logo container */}
						<motion.div
							initial={{ rotate: 0, scale: 0.7, opacity: 0 }}
							animate={{
								rotate: 360,
								scale: 1,
								opacity: 1,
								transition: {
									rotate: {
										repeat: Infinity,
										duration: 2,
										ease: "linear",
									},
									scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
									opacity: { duration: 0.5 },
								},
							}}
							className="w-20! h-20! flex! items-center! justify-center!"
						>
							<svg
								className="w-full! h-full!"
								viewBox="0 0 40 40"
								fill="none"
							>
								<circle
									cx="20"
									cy="20"
									r="19"
									stroke="#f2ede6"
									strokeWidth="1.5"
								/>
								<circle
									cx="20"
									cy="20"
									r="11"
									stroke="#f2ede6"
									strokeWidth="1.5"
								/>
								<circle cx="20" cy="12" r="3.5" fill="#f2ede6" />
							</svg>
						</motion.div>

						{/* Fading and translating branding text */}
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									delay: 0.5,
									duration: 0.8,
									ease: [0.16, 1, 0.3, 1],
								},
							}}
							className="text-center!"
						>
							<h2 className="text-2xl! font-bold! tracking-[0.16em]! capitalize! text-ink! leading-none!">
								Vinesh Studio
							</h2>
							<p className="text-[11px]! font-medium! tracking-[0.2em]! text-accent! capitalize! mt-2.5!">
								Creative Marketing
							</p>
						</motion.div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
