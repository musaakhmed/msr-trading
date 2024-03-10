'use client';

import { motion } from 'framer-motion';

const titleVars = {
	initial: { opacity: 0, y: 25 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.1, 0.03, 0.5, 0.9],
			duration: 0.5,
			delay: 0.25,
		},
	},
};
const paragraphVars = {
	initial: { opacity: 0, y: 25 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.1, 0.03, 0.5, 0.9],
			duration: 0.5,
			delay: 0.5,
		},
	},
};

const company = () => {
	return (
		<article className="max-w-screen  mx-auto pb-12 pt-16 lg:pt-24 ">
			<div className=" container mb-12 flex h-96 w-full flex-col items-center justify-center gap-12 bg-accent px-8 text-center text-white">
				<motion.h1
					variants={titleVars}
					initial="initial"
					animate="animate"
					className="text-2xl font-extrabold lg:text-3xl"
				>
					Our Vision, Your Success.
				</motion.h1>
				<motion.p
					className="text-lg lg:text-xl xl:text-2xl"
					variants={paragraphVars}
					initial="initial"
					animate="animate"
				>
					We are dedicated to pioneering excellence in dentistry,
					guided by a vision that places your practice&apos;s success
					at the forefront.
				</motion.p>
			</div>
			<div className="container gap-8 px-4">
				<h2 className="mb-4 text-2xl font-bold  ">
					Our Philosophy: Modernising the Silk Road
				</h2>
				<p className="mb-8 text-lg leading-relaxed">
					At <span className="font-bold">MSR Trading</span>, our
					philosophy is deeply rooted in the transformative vision of
					a <span className="font-bold">Modern Silk Road.</span>{' '}
					Situated in Istanbul, the historic crossroads of
					civilizations, we proudly embrace our role as pioneers in
					revitalising this ancient trade route for the contemporary
					world. Going beyond conventional trade practices, our
					commitment extends to modernising the Silk Road as a dynamic
					conduit for sustainable growth, where cultural exchange and
					commercial transactions harmoniously intersect.
				</p>{' '}
			</div>
			<div className="container gap-8 px-4">
				<h2 className="mb-4 text-2xl font-bold  ">
					Our Power: Technical and Cultural Polyvalency
				</h2>
				<p className="mb-8 text-lg leading-relaxed ">
					Our diverse team serves as the embodiment of the Silk
					Road&apos;s spirit, hailing from regions along its
					historical path. With members fluent in Azerbaijani,
					English, French, Russian, Turkish, and Ukrainian, our
					collective roots and families stretch from Rotterdam,
					Glasgow, London, and Brussels, passing through Istanbul,
					Baku, and Astana, all the way to vibrant cities of Beijing,
					Shanghai and Seoul. This cultural tapestry enables us to
					navigate the Silk Road with unparalleled ease, connecting
					not only through trade but through genuine understanding, as
					we are an integral part of what the Silk Road represents—its
					people. This extensive network empowers us to establish and
					maintain longstanding partnerships with reliable friends
					across the Silk Road, ensuring a seamless journey towards
					shared success and prosperity.
				</p>
			</div>

			<div className="container mb-8 px-4">
				<h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
				<p className="mb-8 text-lg leading-relaxed ">
					Our mission is to modernise and revitalise the Silk Road,
					connecting businesses across diverse industries and regions
					with reliable consultancy services and innovative solutions.
					Through our multidisciplinary expertise and unwavering
					commitment to local trust, we empower businesses to navigate
					global markets with confidence, driving sustainable growth
					and fostering enduring partnerships along the way.
				</p>
			</div>

			<div className="container mb-8 px-4 text-lg leading-relaxed ">
				<h2 className="mb-4 text-2xl font-bold">
					Why Choose <span className="font-bold">MSR Trading</span>?
				</h2>
				<p className="mb-4">
					Choosing MSR Trading as your strategic partner is choosing a
					future of unparalleled growth and innovation on the
					&apos;Modern Silk Road.&apos;
				</p>
				<p className="mb-4">Here is why:</p>
				<ul className="list-inside list-disc ">
					<li>
						<span className="font-bold">
							Multidisciplinary Expertise:
						</span>{' '}
						Benefit from a team with over a decade of expertise
						spanning molecular biology, civil and physical
						engineering, medical sciences, laboratory practices,
						hospitality, and ICT.
					</li>
					<li>
						<span className="font-bold">Tailored Solutions:</span>{' '}
						Our comprehensive consultancy services are customised to
						address the specific challenges of your industry in
						Western and Eastern Europe, the Middle East, Caucasus,
						Central Asia, and East Asia.
					</li>
					<li>
						<span className="font-bold">
							Reliability at the Core:
						</span>{' '}
						Our comprehensive consultancy services are customised to
						address the specific challenges of your industry in
						Western and Eastern Europe, the Middle East, Caucasus,
						Central Asia, and East Asia.
					</li>
					<li>
						<span className="font-bold">
							Local Trust, Global Reach:
						</span>{' '}
						We build partnerships on a foundation of local trust,
						fostering lasting connections that transcend borders and
						cultures.
					</li>
					<li>
						<span className="font-bold">Strategic Insights:</span>{' '}
						Gain a competitive edge with our strategic insights,
						navigating the complexities of international trade for
						sustained success.
					</li>
					<li>
						<span className="font-bold">Active Contribution:</span>{' '}
						By choosing MSR Trading, you actively contribute to the
						development of the &apos;modern silk road,&apos;
						participating in a legacy of interconnected prosperity.
					</li>
					<li>
						<span className="font-bold">
							Innovation at Every Step:
						</span>{' '}
						Embrace a culture of innovation, where our
						forward-thinking approach ensures your business stays
						ahead in a rapidly evolving global landscape.
					</li>
					<li>
						<span className="font-bold">Legacy of Success:</span>{' '}
						Join a legacy of success as we architect sustainable
						growth, not just facilitating trade but actively shaping
						the future of businesses on this dynamic global journey.
					</li>
				</ul>
			</div>

			<div className="container mb-8 px-4 text-lg leading-relaxed ">
				<p>
					<span className="font-bold">MSR Trading</span> isn&apos;t
					just a choice; it&apos;s an investment in a future where
					your business doesn&apos;t just survive but excels.
				</p>
			</div>
		</article>
	);
};

export default company;
