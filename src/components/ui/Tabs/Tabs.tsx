'use client';

import { useRef, useState } from 'react';

const Tabs = ({
	industry,
	sendTabIdToParent,
}: {
	industry: { id: number; title: string }[];
	sendTabIdToParent: any;
}) => {
	const [selectedTab, setSelectedTab] = useState(1);

	const tabId = useRef(null);

	const handleSelectTab = (id: number) => {
		setSelectedTab(id);
		sendTabIdToParent(id);
	};

	return (
		<div className="flex h-12 w-1/2 items-center justify-between rounded-xl bg-accent/20 px-1">
			{industry.map((i) => (
				<button
					key={i.id}
					ref={tabId}
					className={`w-full rounded-xl p-2 text-center font-bold outline-none transition-all duration-300 ease-in-out ${
						selectedTab === i.id ? 'bg-accent text-white' : ''
					}`}
					onClick={() => handleSelectTab(i.id)}
				>
					{i.title}
				</button>
			))}
		</div>
	);
};

export default Tabs;
