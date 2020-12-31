import { useRouter } from 'next/router'

const AboutPage = () => {
	const router = useRouter()
	return (
		<div>
			<h1>ABOUT</h1>
			<h3>{router.pathname}</h3>
		</div>
	)
};

export default AboutPage;
