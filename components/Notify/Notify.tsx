import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { gfSignals } from 'goldfish/gfSignals';

import { NotifiesUser } from 'redux/types/notifies';
import { saveNotifyAction } from 'redux/actions/notifiers/notifiersActions';

import { NotifySelect } from './NotifySelect/NotifySelect';

import useStyles from './styles';

type Props = {
	signalId: string,
};

export const Notify: React.FC<Props> = ({ signalId }) => {
	const styles = useStyles();
	const initialState = {
		type: '' as NotifiesUser,
		values: Object.keys(NotifiesUser).reduce((init, key) => ({
			...init,
			[key]: '',
		}), {}),
	};
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	
	const handleChangeNotify = (type) => {
		console.log(type);
		setState(prev => ({ ...prev, type }));
	};
	
	const handleChangeNotifyValue = ({ target: { value } }) => {
		setState(prev => ({
			...prev,
			values: {
				...prev.values,
				[state.type]: value,
			} })
		);
	};
	
	const submitSignal = async () => {
		setLoading(true);
		try {
			const saveData = {
				id: signalId,
				notifyType: state.type,
				value: state.values[state.type],
			};
			await saveNotifyAction(saveData);
			
			setLoading(false);
			setState(initialState);
		} catch (e) {
			setLoading(false);
			setError(e);
		}
	};
	
	return (
		<div>
			<div className={styles.notify}>
				<NotifySelect
					onChange={handleChangeNotify}
					value={NotifiesUser[state.type]}
					id={signalId}
				/>
				{!!state.type &&
					<TextField
						value={state.values[state.type] || ''}
						onChange={handleChangeNotifyValue}
						variant="outlined"
					/>
				}
			</div>
			<div className={styles.submitBtn}>
				<Button
					variant="contained"
					color="primary"
					disabled={!state.type || !state.values[state.type]}
					onClick={submitSignal}
				>
					{gfSignals.submitBtn}
				</Button>
			</div>
		</div>
	);
};
