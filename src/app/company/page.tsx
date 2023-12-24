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
		<article className="max-w-screen container mx-auto min-h-screen px-4 pb-12 pt-24 ">
			<div className=" mb-12 flex h-96 w-full flex-col items-center justify-center gap-12 bg-secondary text-center">
				<motion.h1
					variants={titleVars}
					initial="initial"
					animate="animate"
					className="text-3xl font-extrabold"
				>
					Our Vision, Your Success. Navigating the Path to Excellence
					in Dentistry.
				</motion.h1>
				<motion.p
					className="text-lg"
					variants={paragraphVars}
					initial="initial"
					animate="animate"
				>
					We are dedicated to pioneering excellence in dentistry,
					guided by a vision that places your practice&apos;s success
					at the forefront.
				</motion.p>
			</div>
			<div>
				<h2 className="mb-4 text-2xl font-bold">About Us</h2>
				<p className="mb-8 text-lg leading-relaxed text-gray-700">
					At <span className="font-bold">Weld Med</span>, we are
					passionate about advancing oral healthcare by providing
					cutting-edge medical equipment and top-notch services
					tailored for dental professionals. With a commitment to
					innovation, quality, and customer satisfaction, we strive to
					be your trusted partner in delivering exceptional patient
					care.
				</p>
			</div>

			<div className="mb-8">
				<h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
				<p className="text-gray-700">
					Dedicated to enhancing the practice of dentistry, our
					mission is to empower dental professionals with
					state-of-the-art tools and comprehensive services. We aim to
					contribute to the success and growth of dental practices by
					offering reliable and advanced solutions that prioritize
					patient well-being.
				</p>
			</div>

			<div className="mb-8">
				<h2 className="mb-4 text-2xl font-bold">
					Why Choose <span className="font-bold">Weld Med</span>?
				</h2>
				<ul className="list-inside list-disc text-gray-700">
					<li>
						Quality Assurance: We understand the critical role that
						quality plays in healthcare.
					</li>
					<li>
						Innovation at Its Core: Embracing the latest
						technological advancements.
					</li>
					<li>
						Customer-Centric Approach: Your satisfaction is our
						priority.
					</li>
					<li>
						Comprehensive Services: Beyond supplying top-quality
						equipment, we offer a range of services to support your
						practice.
					</li>
				</ul>
			</div>

			<p className="mb-8 text-lg leading-relaxed text-gray-700">
				Whether you are a seasoned practitioner or a new entrant to the
				field, we invite you to partner with us on your journey to
				excellence in dentistry. Explore our range of products and
				services, and discover how{' '}
				<span className="font-bold">Weld Med</span> can be the catalyst
				for elevating your dental practice to new heights.
			</p>
		</article>
	);
};

export default company;
