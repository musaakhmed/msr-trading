import React from 'react';

export const HamBox = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<div className="relative flex aspect-square h-12 flex-col items-center justify-center gap-2 rounded-full transition-all duration-200">
			<span
				className={`h-[2px] w-6 bg-primary  transition-all duration-300 ease-in-out ${
					isOpen ? ' absolute rotate-[135deg]' : ''
				}`}
			></span>
			<span
				className={`h-[2px] w-6 bg-primary  transition-all duration-300 ease-in-out ${
					isOpen ? 'absolute  rotate-[225deg]' : ''
				}`}
			></span>
		</div>
	);
};
