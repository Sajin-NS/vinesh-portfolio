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
						{/* Loader logo video container */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{
								scale: 1,
								opacity: 1,
								transition: {
									scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
									opacity: { duration: 0.5 },
								},
							}}
							className="w-24! h-24! sm:w-28! sm:h-28! flex! items-center! justify-center!"
						>
							<img
								src={`/common/white-logo.png`}
								alt="Vinesh Studio Logo"
								className="h-full w-full"
							/>
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
