'use client';

import { motion } from 'framer-motion';

interface IndustriesData {
	name: string;
	description: string;
}

interface IndustriesDataArray extends Array<IndustriesData> {}

const dentalEquipmentIndustries: IndustriesDataArray = [
	{
		name: 'Diagnostic Equipment',
		description:
			'Includes intraoral and extraoral X-ray machines, Cone Beam Computed Tomography (CBCT) scanners, and digital imaging systems.',
	},
	{
		name: 'Treatment Equipment',
		description:
			'Comprises dental chairs and units, hand pieces and drills, ultrasonic scalers, and laser systems for dental procedures.',
	},
	{
		name: 'Sterilization and Infection Control',
		description:
			'Encompasses autoclaves and sterilizers, disinfectants and cleaning solutions, and personal protective equipment (PPE).',
	},
	{
		name: 'CAD/CAM Systems',
		description:
			'Involves Computer-Aided Design/Computer-Aided Manufacturing systems for dental restorations and intraoral scanners.',
	},
	{
		name: 'Dental Lasers',
		description:
			'Includes soft tissue lasers and hard tissue lasers used for procedures like cavity preparation.',
	},
	{
		name: 'Endodontic Equipment',
		description:
			'Comprises apex locators, rotary and reciprocating endodontic instruments, and endodontic motors.',
	},
	{
		name: 'Orthodontic Equipment',
		description:
			'Involves orthodontic chairs and units, intraoral scanners for orthodontic treatment planning, and orthodontic instruments and appliances.',
	},
	{
		name: 'Dental Laboratory Equipment',
		description:
			'Encompasses dental lathes and milling machines, porcelain furnaces, and vacuum forming machines.',
	},
	{
		name: 'Periodontal Equipment',
		description:
			'Comprises ultrasonic scalers and air polishers, periodontal probes and diagnostic instruments, and surgical instruments for periodontal procedures.',
	},
	{
		name: 'Dental Furniture and Cabinetry',
		description:
			'Involves dental office furniture, storage units, and cabinetry, including reception area furnishings.',
	},
	{
		name: 'Dental Compressors and Vacuum Systems',
		description:
			'Includes compressed air systems and vacuum pumps and systems.',
	},
	{
		name: 'Dental Chairs and Stools',
		description:
			'Encompasses ergonomic dental chairs and operator stools and seating solutions.',
	},
	{
		name: 'Infection Control and Sterilization Products',
		description:
			'Involves autoclave indicators, sterilization pouches and wraps.',
	},
	{
		name: 'Digital Imaging and Photography Equipment',
		description:
			'Includes intraoral cameras and digital photography systems for dental documentation.',
	},
];

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

const industries = () => {
	return (
		<div className="max-w-screen container mx-auto pb-12 pt-16 lg:px-4 lg:pt-24 ">
			<section className=" flex h-96 w-full flex-col items-center justify-center gap-12 bg-secondary px-4 text-center">
				<motion.h1
					variants={titleVars}
					initial="initial"
					animate="animate"
					className="text-3xl font-extrabold"
				>
					Unlocking Precision in Diverse Dental Fields
				</motion.h1>
				<motion.p
					variants={paragraphVars}
					initial="initial"
					animate="animate"
					className="text-lg"
				>
					From diagnostics to treatment, sterilization to
					orthodontics, we specialize in delivering precision and
					innovation that elevate practices across different facets of
					oral healthcare.
				</motion.p>
			</section>
			<section className="my-12 mb-24 flex flex-col gap-4 px-4">
				{dentalEquipmentIndustries.map(
					({ name, description }, index) => (
						<motion.div
							initial={{ x: -100, opacity: 0 }}
							whileInView={{
								x: 0,
								opacity: 1,
								transition: {
									ease: [0.1, 0.03, 0.5, 0.9],
									duration: 0.5,
									delay: 0.25,
								},
							}}
							viewport={{ once: true }}
							key={index}
							className="py-4 first:pt-0 last:pb-0 odd:bg-secondary odd:bg-opacity-50"
						>
							<h2 className="mb-2 text-lg font-semibold">
								{name}
							</h2>
							<p>{description}</p>
						</motion.div>
					),
				)}
			</section>
		</div>
	);
};

export default industries;

{
	/*

const dentalEquipmentData = [
  {
    name: "Diagnostic Equipment",
    items: [
      "Intraoral and extraoral X-ray machines",
      "Cone Beam Computed Tomography (CBCT) scanners",
      "Digital imaging systems",
    ],
  },
  {
    name: "Treatment Equipment",
    items: [
      "Dental chairs and units",
      "Handpieces and drills",
      "Ultrasonic scalers",
      "Laser systems for dental procedures",
    ],
  },
  {
    name: "Sterilization and Infection Control",
    items: [
      "Autoclaves and sterilizers",
      "Disinfectants and cleaning solutions",
      "Personal protective equipment (PPE)",
    ],
  },
  {
    name: "CAD/CAM Systems",
    items: [
      "Computer-Aided Design/Computer-Aided Manufacturing systems for dental restorations",
      "Intraoral scanners",
    ],
  },
  {
    name: "Dental Lasers",
    items: [
      "Soft tissue lasers",
      "Hard tissue lasers for procedures like cavity preparation",
    ],
  },
  {
    name: "Endodontic Equipment",
    items: [
      "Apex locators",
      "Rotary and reciprocating endodontic instruments",
      "Endodontic motors",
    ],
  },
  {
    name: "Orthodontic Equipment",
    items: [
      "Orthodontic chairs and units",
      "Intraoral scanners for orthodontic treatment planning",
      "Orthodontic instruments and appliances",
    ],
  },
  {
    name: "Dental Laboratory Equipment",
    items: [
      "Dental lathes and milling machines",
      "Porcelain furnaces",
      "Vacuum forming machines",
    ],
  },
  {
    name: "Periodontal Equipment",
    items: [
      "Ultrasonic scalers and air polishers",
      "Periodontal probes and diagnostic instruments",
      "Surgical instruments for periodontal procedures",
    ],
  },
  {
    name: "Dental Furniture and Cabinetry",
    items: [
      "Dental office furniture",
      "Storage units and cabinetry",
      "Reception area furnishings",
    ],
  },
  {
    name: "Dental Compressors and Vacuum Systems",
    items: [
      "Compressed air systems",
      "Vacuum pumps and systems",
    ],
  },
  {
    name: "Dental Chairs and Stools",
    items: [
      "Ergonomic dental chairs",
      "Operator stools and seating solutions",
    ],
  },
  {
    name: "Infection Control and Sterilization Products",
    items: [
      "Autoclave indicators",
      "Sterilization pouches and wraps",
    ],
  },
  {
    name: "Digital Imaging and Photography Equipment",
    items: [
      "Intraoral cameras",
      "Digital photography systems for dental documentation",
    ],
  },
];

// Convert to JSON
const dentalEquipmentJSON = JSON.stringify(dentalEquipmentData, null, 2);

console.log(dentalEquipmentJSON);


*/
}
