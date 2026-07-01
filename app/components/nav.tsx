"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const NAV_LINKS = [
	{ label: "About", href: "/about" },
	{ label: "Work", href: "/work" },
	{ label: "Contact", href: "/#contact" },
];

const ALL_LINKS = [{ label: "Home", href: "/" }, ...NAV_LINKS];

export default function Nav() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const { scrollY } = useScroll();

	useEffect(() => {
		return scrollY.on("change", (v) => setScrolled(v > 60));
	}, [scrollY]);

	/* lock body scroll when sidebar is open */
	useEffect(() => {
		document.body.style.overflow = sidebarOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [sidebarOpen]);

	return (
		<>
			{/* ══ Top nav bar ══════════════════════════════════════════════ */}
			<motion.nav
				className="fixed! top-0! left-0! right-0! z-100! flex! items-center! justify-between! px-6! md:px-10!"
				animate={{
					paddingTop: scrolled ? 24 : 24,
					paddingBottom: scrolled ? 12 : 0,
					backgroundColor: scrolled
						? "rgba(14,18,24,0)"
						: "rgba(14,18,24,0)",
					backdropFilter: scrolled ? "blur(0px)" : "blur(0px)",
				}}
				transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
			>
				{/* Logo */}
				<Link href="/" className="flex! items-center! gap-3! shrink-0!">
					<svg className="w-12! h-12!" viewBox="0 0 40 40" fill="none">
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
					<AnimatePresence>
						{!scrolled && (
							<motion.span
								initial={{ opacity: 0, x: -15, width: 0 }}
								animate={{ opacity: 1, x: 0, width: "auto" }}
								exit={{ opacity: 0, x: -15, width: 0 }}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								className="hidden! sm:flex! flex-col! leading-none! text-xl! font-bold! tracking-[0.12em]! capitalize! text-ink! overflow-hidden! whitespace-nowrap!"
							>
								<span>Vinesh</span>
								<span>Studio</span>
							</motion.span>
						)}
					</AnimatePresence>
				</Link>

				<div className="flex! items-center! gap-5!">
					{/* Menu / Hamburger button (always visible) */}
					<button
						onClick={() => setSidebarOpen(true)}
						aria-label="Open navigation menu"
						className="flex! flex-col! gap-[5px]! justify-center! items-end! w-10! h-10! cursor-pointer! bg-transparent! border-none! p-1!"
					>
						<motion.span
							className="block! h-0.5! bg-ink! rounded-full!"
							animate={{ width: scrolled ? 22 : 22 }}
							transition={{ duration: 0.25 }}
						/>
						<motion.span
							className="block! h-0.5! bg-ink! rounded-full!"
							animate={{ width: scrolled ? 14 : 18 }}
							transition={{ duration: 0.25 }}
						/>
						<motion.span
							className="block! h-0.5! bg-ink! rounded-full!"
							animate={{ width: scrolled ? 22 : 12 }}
							transition={{ duration: 0.25 }}
						/>
					</button>
				</div>
			</motion.nav>

			{/* ══ Backdrop ═════════════════════════════════════════════════ */}
			<AnimatePresence>
				{sidebarOpen && (
					<motion.div
						key="backdrop"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed! inset-0! z-200! cursor-pointer!"
						style={{
							background: "rgba(14,18,24,0.75)",
							backdropFilter: "blur(6px)",
						}}
						onClick={() => setSidebarOpen(false)}
					/>
				)}
			</AnimatePresence>

			{/* ══ Sidebar ══════════════════════════════════════════════════ */}
			<AnimatePresence>
				{sidebarOpen && (
					<motion.aside
						key="sidebar"
						initial={{ x: "100%" }}
						animate={{ x: "0%" }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 28, stiffness: 250 }}
						className="fixed! top-0! right-0! bottom-0! z-210! flex! flex-col! justify-between! px-10! pt-8! pb-10! border-l! border-[rgba(242,237,230,0.07)]!"
						style={{
							width: "min(400px, 90vw)",
							background:
								"linear-gradient(160deg,#161c24 0%,#0e1218 100%)",
						}}
					>
						{/* Sidebar header */}
						<div className="flex! justify-end! items-center!">
							<button
								onClick={() => setSidebarOpen(false)}
								aria-label="Close menu"
								className="w-10! h-10! flex! items-center! justify-center! text-[28px]! leading-none! text-ink! hover:text-accent! transition-colors! duration-200! bg-transparent! border-none! cursor-pointer!"
							>
								×
							</button>
						</div>

						{/* Sidebar links */}
						<nav className="flex! flex-col! gap-1!">
							{ALL_LINKS.map(({ label, href }, i) => (
								<motion.div
									key={label}
									initial={{ opacity: 0, x: 32 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										delay: 0.08 + i * 0.07,
										duration: 0.45,
										ease: [0.16, 1, 0.3, 1],
									}}
								>
									<Link
										href={href}
										onClick={() => setSidebarOpen(false)}
										className={`block! text-[clamp(38px,6.5vw,60px)]! font-extrabold! tracking-[-0.03em]! capitalize! leading-[1.08]! transition-colors! duration-200! py-1! ${
											pathname === href
												? "text-accent!"
												: "text-dim! hover:text-ink!"
										}`}
									>
										{label}
									</Link>
								</motion.div>
							))}
						</nav>

						{/* Sidebar footer */}
						<div className="border-t! border-[rgba(242,237,230,0.07)]! pt-6!">
							<a
								href="mailto:hello@vineshstudio.com"
								className="text-[14px]! font-bold! text-ink! hover:text-accent! transition-colors! duration-200! block! mb-1!"
							>
								hello@vineshstudio.com
							</a>
							<p className="text-[13px]! text-white/50!">UAE · Kerala</p>
						</div>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
}
