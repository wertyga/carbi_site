import React from "react";
import Icon from "@material-ui/core/Icon";

interface MenuItemProps {
	icon: string,
}

const MenuItem: React.FC<MenuItemProps> = ({ icon }) => {
	return (
		<div>
			<Icon>{icon}</Icon>
		</div>
	);
};

export default MenuItem;
