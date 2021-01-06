import AuthForm from 'components/User/AuthForm/AuthForm';

export const AuthPage = () => {
	return (
		<div>
			<div className="page-head">
				<div>
					<h1>Auth page</h1>
				</div>
			</div>
			
			<AuthForm />
		</div>
	);
};

export default AuthPage;
