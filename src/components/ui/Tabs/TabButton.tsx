const TabButton = ({
	activeTab,
	tabName,
	selectedTab,
	onBrandSelect,
}: {
	activeTab: string;
	tabName: string;
	selectedTab: string;
	onBrandSelect: any;
}) => {
	console.log('tabName', tabName);
	console.log('activeTab', activeTab);
	console.log('selectedTab', selectedTab);
	console.log('onBrandSelect', onBrandSelect);
	const selectIndustry = () => {};

	return (
		<button
			className={
				selectedTab === activeTab
					? 'tab-title active-tab-title'
					: 'tab-title'
			}
			onClick={selectIndustry}
		>
			{tabName}
		</button>
	);
};

export default TabButton;
