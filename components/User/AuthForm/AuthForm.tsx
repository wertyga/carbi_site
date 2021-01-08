import React, { ChangeEvent, useState } from "react";
import { useRouter } from 'next/router';
import { FormControl, FormGroup, Input, InputLabel, Button } from "@material-ui/core";
import { signUpUserAction } from 'redux/actions/user/userActions';
import { getApiError } from 'utils/errors';

import SignUpBlock from './SignUpBlock/SignUpBlock';

import useStyles from './styles';

const AuthForm: React.FC = () => {
	const styles = useStyles();
	const router = useRouter();
	const [state, setState] = useState({
		password: '',
		pending: false,
		errors: {
			password: '',
			global: '',
		},
	});
	
	const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
		setState(prev => ({
			...prev,
			[name]: value,
			errors: { ...prev.errors, global: '', [name]: '' },
		}));
	};
	
	const handleSignIn = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		
		if (!state.password) {
			setState(prev => ({ ...prev, errors: { ...prev.errors, password: 'Fill the field' } }));
			return;
		}
		try {
			setState(prev => ({ ...prev, pending: true }));
			await signUpUserAction(state.password);
			router.replace('/chart');
		} catch (e) {
			const { message } = getApiError(e);
			setState(prev => ({ ...prev, errors: { ...prev.errors, global: message } }));
		} finally {
			setState(prev => ({ ...prev, pending: false }));
		}
	};
	
	const { errors } = state;
	return (
		<div>
			<FormGroup
				className={styles.root}
				onSubmit={handleSignIn}
			>
				{errors.global && <span className="error">{errors.global}</span>}
				<FormControl
					className={styles.input}
				>
					<InputLabel>Password</InputLabel>
					<Input
						name="password"
						type="password"
						value={state.password}
						onChange={handleChange}
						error={!!errors.password}
						disabled={state.pending}
						required
					/>
				</FormControl>
				<Button
					variant="contained"
					color="primary"
					onClick={handleSignIn}
					disabled={state.pending}
				>
					Submit
				</Button>
			</FormGroup>
			<SignUpBlock />
		</div>
	);
};

export default AuthForm;
