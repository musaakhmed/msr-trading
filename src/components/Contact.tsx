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

export const Contact = () => {
	return (
		<motion.div
			variants={containerVars}
			initial="initial"
			animate="animate"
			className="h-screen w-full bg-primary px-5 py-6 text-[1rem]"
		>
			<motion.section
				variants={formVars}
				initial="initial"
				animate="animate"
				className="text-background"
			>
				<h1 className="text-3xl font-bold ">Contact Us</h1>
				<div className="pt-2">
					<p>Have questions or inquiries? Reach out to us!</p>
					<p className="my-2 ">
						Your path to cutting-edge dental solutions begins with a
						simple message.
					</p>
				</div>
			</motion.section>

			<motion.form
				variants={formVars}
				initial="initial"
				animate={{
					opacity: 1,
					x: 0,
					transition: {
						duration: 0.5,
						ease: [0.1, 0.03, 0.5, 0.9],
						delay: 0.25,
					},
				}}
				className=" rounded-xl bg-background p-4 "
			>
				<div className="my-5 flex flex-col gap-0.5 first:mt-0 ">
					<label className="text" htmlFor="firstname">
						First name
					</label>
					<input
						className="focus:border-1 h-10 rounded border border-solid border-slate-300 p-2 focus:border-primary focus:shadow focus:outline-none"
						type="text"
						placeholder=""
					></input>
				</div>
				<div className="my-5 flex flex-col gap-1">
					<label className="text" htmlFor="lastname">
						Last name
					</label>
					<input
						className="focus:border-1 h-10 rounded border border-solid border-slate-300 p-2 focus:border-primary focus:shadow focus:outline-none"
						type="text"
						placeholder=""
					></input>
				</div>
				<div className="my-5 flex flex-col gap-1">
					<label className="text" htmlFor="">
						email
					</label>
					<input
						className="focus:border-1 h-10 rounded border border-solid border-slate-300 p-2 focus:border-primary focus:shadow focus:outline-none"
						type="email"
					></input>
				</div>
				<div className="my-5 flex flex-col gap-1">
					<label className="text" htmlFor="message">
						Message
					</label>
					<textarea
						rows={6}
						placeholder="Type your message"
						className="focus:border-1 resize-none rounded border border-solid border-slate-300 p-2 focus:border-primary focus:shadow focus:outline-none"
					></textarea>
				</div>
				<div className="flex ">
					<button className=" w-full rounded-lg bg-primary p-2 text-secondary ">
						Submit
					</button>
				</div>
			</motion.form>
		</motion.div>
	);
};
