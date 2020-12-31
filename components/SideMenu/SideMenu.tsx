import React, { useState } from 'react';
import { Tabs, Tab } from "@material-ui/core";
import { useRouter } from 'next/router';
import { gfMenu } from 'goldfish/menu';

import useStyles from './styles';

const SideMenu: React.FC = () => {
	const styles = useStyles();
	const router = useRouter();
	const [tabValue, setTab] = useState(() => {
		let index = 0;
		gfMenu.find(({ href }, i) => {
			if (href === router.pathname) {
				index = i;
				return true;
			}
			return false;
		});
		return index;
	});
	
	const handleChange = (e: React.ChangeEvent<{}>, value: number) => {
		const chosenTab = gfMenu[value];
		router.push(chosenTab.href);
		setTab(value);
	};
	return (
		<Tabs
			orientation="vertical"
			variant="scrollable"
			value={tabValue}
			onChange={handleChange}
			className={styles.tabs}
		>
			{gfMenu.map(({ href, key, label, Icon }) => (
				<Tab
					key={key}
					icon={<Icon /> }
					className={styles.tab}
				/>
			))}
		</Tabs>
	);
};

export default SideMenu;
