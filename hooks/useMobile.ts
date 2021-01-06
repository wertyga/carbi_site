import useMediaQuery from '@material-ui/core/useMediaQuery';

const useMobile = (): boolean => (
	useMediaQuery('(max-width: 600px)')
);

export default useMobile
