import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";

export default function Footer() {
	return (
		<footer
			className="bg-bg! border-t! border-[rgba(242,237,230,0.07)]! px-10! pt-20! overflow-hidden!"
			id="contact"
		>
			{/* ── Top grid: label | menu | contact ── */}
			<div className="max-w-[1440px]! mx-auto! grid! grid-cols-1! lg:grid-cols-[260px_1fr_1fr]! gap-10! pb-20! border-b! border-[rgba(242,237,230,0.07)]!">
				{/* Label */}
				<div></div>

				{/* Nav links */}
				<div className="flex! flex-col! gap-1!">
					{[
						{ label: "About", href: "/about" },
						{ label: "Work", href: "/work" },
						// { label: "Contact", href: "/#contact" },
					].map(({ label, href }) => (
						<Link
							key={label}
							href={href}
							className="text-[clamp(28px,4vw,52px)]! font-extrabold! tracking-[-0.03em]! capitalize! text-dim! hover:text-ink! transition-colors! duration-200! leading-[1.1]!"
						>
							{label}
						</Link>
					))}
				</div>

				{/* Contact */}
				<div className="flex! flex-col! gap-7!">
					{/* Email */}
					<div>
						<p className="text-[12px]! font-semibold! tracking-widest! capitalize! text-white/50! mb-1.5!">
							Email:
						</p>
						<a
							href="mailto:hello@vineshstudio.com"
							className="text-[clamp(18px,2.5vw,30px)]! font-bold! tracking-[-0.02em]! text-ink! hover:text-accent! transition-colors! duration-200!"
						>
							hello@vineshstudio.com
						</a>
					</div>

					{/* Based in */}
					<div>
						<p className="text-[12px]! font-semibold! tracking-widest! capitalize! text-white/50! mb-1.5!">
							Based In:
						</p>
						<p className="text-[clamp(14px,1.8vw,20px)]! text-white/50! leading-[1.4]!">
							UAE · Kerala · Available for brand,
							<br className="hidden! sm:block!" /> campaign &amp;
							creative direction projects.
						</p>
					</div>

					{/* Socials */}
					<div>
						<p className="text-[12px]! font-semibold! tracking-widest! capitalize! text-white/50! mb-3!">
							Follow Me:
						</p>
						<div className="flex! gap-3! flex-wrap!">
							{[
								{
									name: "Instagram",
									href: "https://www.instagram.com/vinesh_n_s/",
									icon: <FaInstagram className="w-5! h-5!" />,
								},
								{
									name: "LinkedIn",
									href: "https://www.linkedin.com/in/vinesh-ns",
									icon: <FaLinkedinIn className="w-5! h-5!" />,
								},
								{
									name: "Behance",
									href: "https://www.behance.net/vineshstudio",
									icon: <FaBehance className="w-5! h-5!" />,
								},
							].map(({ name, href, icon }) => (
								<a
									key={name}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={name}
									className="w-11! h-11! rounded-full! border! border-[rgba(242,237,230,0.07)]! flex! items-center! justify-center! text-white/50! hover:border-ink! hover:text-accent! transition-all! duration-300!"
								>
									{icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* ── Giant outline name ── */}
			<div
				className="text-[clamp(80px,16vw,260px)]! font-extrabold! tracking-[-0.04em]! capitalize! leading-[0.85]! whitespace-nowrap! overflow-hidden! select-none!"
				style={{
					color: "transparent",
					WebkitTextStroke: "1px rgba(242,237,230,0.2)",
				}}
			>
				Vinesh
			</div>
		</footer>
	);
}
