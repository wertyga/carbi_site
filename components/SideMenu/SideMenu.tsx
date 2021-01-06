import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Tabs, Tab } from "@material-ui/core";
import { useRouter } from 'next/router';
import { gfMenu } from 'goldfish/gfMenu';
import ListIcon from '@material-ui/icons/List';

import useOnClickOutside from 'hooks/useOnClickOutside';
import useMobile from 'hooks/useMobile';

import storeSelector from './storeSelector';
import useStyles from './styles';

const SideMenu: React.FC = () => {
	const router = useRouter();
	const mainRef = useRef();
	const isMobile = useMobile();
	const { username } = useSelector(storeSelector);
	
	const [mobileOpened, setMobileOpen] = useState(false);
	const [tabValue, setTabValue] = useState(() => {
		let index = 0;
		gfMenu.find(({ href }, i) => {
			const isRoot = router.pathname === '/' && href === '/';
			if (isRoot) return true;
			if (!isRoot && href !== '/' && new RegExp(href).test(router.pathname)) {
				index = i;
				return true;
			}
			return false;
		});
		return index;
	});
	const styles = useStyles({ isOpen: mobileOpened });
	
	const toggleOpenMobile = () => {
		setMobileOpen(!mobileOpened);
	};
	const handleClose = () => setMobileOpen(false);
	
	const handleChange = (e: React.ChangeEvent<{}>, value: number) => {
		const chosenTab = gfMenu[value];
		setTabValue(value);
		handleClose();
		router.push(chosenTab.href);
	};
	
	useOnClickOutside(mainRef, handleClose);
	
	const isShowMenu = (isMobile && mobileOpened) || !isMobile;
	return (
		<div className={styles.root} ref={mainRef}>
			{isMobile &&
				<ListIcon
					onClick={toggleOpenMobile}
					className={styles.listIcon}
					fontSize="large"
				/>
			}
			{isShowMenu &&
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={tabValue}
					onChange={handleChange}
					className={styles.tabs}
				>
					{gfMenu.map(({ href, key, label, getIcon, isRender }) => {
						if (!isRender(username)) return null;
						const Icon = getIcon(username);
						return (
							<Tab
								key={key}
								icon={<Icon /> }
								className={styles.tab}
							/>
						);
					})}
				</Tabs>
			}
		</div>
	);
};

export default SideMenu;
