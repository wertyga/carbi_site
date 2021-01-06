import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import UserPageHeader from 'components/User/UserPageHeader/UserPageHeader';

const UserPage = () => {
	const { token } = useSelector(({ cookiesStore }) => cookiesStore);
	const router = useRouter();
	const dispatch = useDispatch();
	
	if (!token) {
		router.replace('/user/auth');
		return null;
	}
	
	return (
		<div>
			<UserPageHeader />
		</div>
	);
};

export default UserPage;
