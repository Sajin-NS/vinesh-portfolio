import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import ContactForm from "./contact-form";

export const metadata = {
	title: "Contact — Vinesh Studio",
	description:
		"Get in touch to collaborate on branding, design campaigns, or custom creative direction projects.",
};

export default function ContactPage() {
	const BORDER = "border-[rgba(242,237,230,0.07)]!";

	return (
		<div className="min-h-screen! bg-bg!">
			<Nav />

			<main className="pt-35! md:pt-45!">
				{/* ── HEADER & TITLE ── */}
				<section className="px-6! md:px-10! pb-14! border-b! border-[rgba(242,237,230,0.07)]!">
					<div className="max-w-360! mx-auto!">
						<div className="grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-6! items-start!">
							<span className="text-xl! font-bold! text-accent! tracking-widest! uppercase! pt-2!">
								Connect
							</span>
							<div>
								<span className="text-sm! text-white/40! font-bold! tracking-widest! uppercase! block! mb-4!">
									Start a conversation
								</span>
								<h1 className="text-[clamp(44px,7vw,100px)]! font-extrabold! leading-[0.9]! tracking-[-0.03em]! capitalize! text-ink!">
									Let&apos;s Work Together.
								</h1>
							</div>
						</div>
					</div>
				</section>

				{/* ── CONTACT GRID ── */}
				<section className={`py-20! px-6! md:px-10! border-b! ${BORDER}`}>
					<div className="max-w-360! mx-auto! grid! grid-cols-1! md:grid-cols-[260px_1fr]! gap-16! items-start!">
						
						{/* Info Panel Left */}
						<div className="flex! flex-col! gap-10!">
							{/* Email */}
							<div>
								<h3 className="text-xs! font-bold! tracking-widest! uppercase! text-white/40! mb-2!">
									Email Address
								</h3>
								<a
									href="mailto:hello@vineshstudio.com"
									className="text-lg! font-bold! text-ink! hover:text-accent! transition-colors! duration-300!"
								>
									hello@vineshstudio.com
								</a>
							</div>

							{/* Base Locations */}
							<div>
								<h3 className="text-xs! font-bold! tracking-widest! uppercase! text-white/40! mb-2!">
									Location Base
								</h3>
								<p className="text-base! font-medium! text-ink! leading-relaxed!">
									UAE · Dubai
									<br />
									India · Kerala
								</p>
							</div>

							{/* Response time */}
							<div>
								<h3 className="text-xs! font-bold! tracking-widest! uppercase! text-white/40! mb-2!">
									Response Time
								</h3>
								<p className="text-base! font-medium! text-ink/70! leading-relaxed!">
									Usually responds within 24 hours. Available for contract, freelance, and remote creative direction globally.
								</p>
							</div>
						</div>

						{/* Form Panel Right */}
						<div className="w-full! max-w-225!">
							<ContactForm />
						</div>

					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
