import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { notifyDecode } from "../helpers";
import useStyles from './styles';

const defaultSelectValue = 'Choose notifiers variant...';

type Props = {
	id: string,
	value: string,
	onChange: (e: React.ChangeEvent<{ value: unknown }>) => void,
};

export const NotifySelect: React.FC<Props> = ({ id, value, onChange }) => {
	const styles = useStyles();
	const notifiers = Object.values(notifyDecode);
	
	const handleChange = ({ target }) => {
		const { value: selectValue } = target;
		const type = Object
			.entries(notifyDecode)
			.find(([_, value]) => value === selectValue) || {};
		onChange(type[0] || '');
	};
	return (
		<div>
			<FormControl className={styles.notifySelectWrapper}>
				<InputLabel id={id} className={styles.notifyLabel}>{defaultSelectValue}</InputLabel>
				<Select
					labelId={id}
					value={value}
					onChange={handleChange}
					variant="outlined"
					label={defaultSelectValue}
				>
					{notifiers.map(notify => (
						<MenuItem
							key={notify}
							value={notify}
						>
							{notify}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};
