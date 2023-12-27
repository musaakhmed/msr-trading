'use client';

import { motion } from 'framer-motion';

const formVars = {
	initial: {
		opacity: 0,
		x: -100,
		transition: {
			duration: 0.5,
			ease: [0.1, 0.03, 0.5, 0.9],
		},
	},

	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: [0.1, 0.03, 0.5, 0.9],
			delay: 0.25,
		},
	},
};

const containerVars = {
	initial: {
		transition: { staggerChildren: 0.5 },
	},
	animate: {
		transition: { staggerChildren: 0.9 },
	},
};

const paragraphVars = {
	initial: { y: 30, opacity: 0 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: 0.25 },
	},
};

const icon = '&';

export const Contact = () => {
	return (
		<section className="flex w-full flex-col">
			<div className="bg-secondary px-4 py-16 text-center">
				<motion.h2
					initial={{ y: -30, opacity: 0 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: { duration: 0.5, delay: 0.25 },
					}}
					className="pb-5 text-2xl font-bold text-text"
				>
					Looking for a reliable partner?
				</motion.h2>
				<motion.p
					variants={paragraphVars}
					initial="initial"
					animate="animate"
				>
					Contact us for more information about our operations in
					different fields across Europe and Asia!
				</motion.p>
			</div>
			<section className="bg-white">
				<motion.div
					variants={containerVars}
					className=" mx-auto flex max-w-7xl flex-col items-baseline justify-center gap-4 rounded-xl bg-[#f9f9f9]  py-12 pl-12 leading-3 lg:m-12 lg:mx-auto lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-6"
				>
					<motion.div
						variants={paragraphVars}
						initial="initial"
						animate="animate"
						className="flex items-center  justify-start gap-2"
					>
						<div className=" flex aspect-square h-12 items-center justify-center rounded-lg bg-white shadow-sm">
							{icon}
						</div>
						<div className="">
							<p className=" text-sm font-semibold">
								Lifetime Updates
							</p>
							<p className="text-sm text-gray-400">
								Lorem ipsum dolor sit amet.
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={paragraphVars}
						initial="initial"
						animate="animate"
						className="flex items-center justify-start gap-2"
					>
						<div className=" flex aspect-square h-12 items-center justify-center rounded-lg bg-white shadow-sm">
							{icon}
						</div>
						<div>
							<p className="text-sm font-semibold">
								Lifetime Updates
							</p>
							<p className="text-sm text-gray-400">
								Lorem ipsum dolor sit.
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={paragraphVars}
						initial="initial"
						animate="animate"
						className="flex items-center justify-start gap-2"
					>
						<div className=" flex aspect-square h-12 items-center justify-center rounded-lg bg-white shadow-sm">
							{icon}
						</div>
						<div>
							<p className="text-sm font-semibold">
								Lifetime Updates
							</p>
							<p className="text-sm text-gray-400">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
					</motion.div>
				</motion.div>
			</section>
			<motion.div
				variants={containerVars}
				initial="initial"
				animate="animate"
				className="w-full bg-primary   text-[1rem]"
			>
				<div className="mx-auto max-w-7xl gap-6 px-5 pb-12 pt-6 lg:flex lg:text-lg">
					<motion.div
						variants={formVars}
						initial="initial"
						animate="animate"
						className="text-background lg:w-1/3 lg:p-2"
					>
						<h1 className="text-3xl font-bold lg:text-5xl ">
							Contact Us
						</h1>
						<div className="pt-2 lg:pt-12">
							<p>Have questions or inquiries? Reach out to us!</p>
							<p className="my-2 ">
								Your path to cutting-edge dental solutions
								begins with a simple message.
							</p>
						</div>
					</motion.div>
					<ContactForm />
				</div>
			</motion.div>
		</section>
	);
};

const ContactForm = () => {
	return (
		<motion.form
			variants={formVars}
			initial="initial"
			animate={{
				opacity: 1,
				x: 0,
				transition: {
					duration: 0.5,
					ease: [0.1, 0.03, 0.5, 0.9],
					delay: 0.5,
				},
			}}
			className=" rounded-xl bg-background p-4 first:mt-0 lg:flex-grow lg:p-8 "
		>
			<div className="my-5 items-center justify-between gap-4 lg:flex">
				<div className=" flex w-full flex-col gap-1  ">
					<label className="text" htmlFor="firstname">
						First name
					</label>
					<input
						className="focus:border-1 h-10  rounded-lg border border-solid border-slate-300 p-2 focus:border-primary focus:shadow focus:outline-none"
						type="text"
						placeholder=""
					></input>
				</div>
				<div className=" flex w-full flex-col gap-1">
					<label className="text" htmlFor="lastname">
						Last name
					</label>
					<input
						className="focus:border-1 h-10  rounded-lg border border-solid border-slate-300 p-2 focus:border-primary focus:shadow focus:outline-none"
						type="text"
						placeholder=""
					></input>
				</div>
			</div>
			<div className="my-5 flex flex-col gap-1">
				<label className="text" htmlFor="">
					Email Address
				</label>
				<input
					className="focus:border-1 h-10  rounded-lg border border-solid border-slate-300 p-2 focus:border-primary focus:shadow focus:outline-none"
					type="email"
				></input>
			</div>
			<div className="my-5 flex flex-col gap-1">
				<label className="text" htmlFor="company">
					Company name
				</label>
				<input
					className="focus:border-1 h-10  rounded-lg border border-solid border-slate-300 p-2 focus:border-primary focus:shadow focus:outline-none"
					type="text"
					placeholder=""
				></input>
			</div>
			<div className="my-5 flex flex-col gap-1">
				<label className="text" htmlFor="subject">
					Subject
				</label>
				<input
					className="focus:border-1 h-10  rounded-lg border border-solid border-slate-300 p-2 focus:border-primary focus:shadow focus:outline-none"
					type="text"
					placeholder=""
				></input>
			</div>
			<div className="my-5 flex flex-col gap-1">
				<label className="text" htmlFor="message">
					Message
				</label>
				<textarea
					rows={6}
					placeholder="Type your message"
					className="focus:border-1 resize-none  rounded-lg border border-solid border-slate-300 p-2 focus:border-primary focus:shadow focus:outline-none"
				></textarea>
			</div>
			<div className="flex ">
				<button className=" w-full rounded-lg bg-primary p-2 text-secondary lg:font-semibold">
					Submit
				</button>
			</div>
		</motion.form>
	);
};
