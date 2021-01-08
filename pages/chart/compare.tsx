import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Common/Loader/Loader';
import CompareContent from 'components/CompareContent/CompareContent';

import { useRouter } from 'next/router';

const ChartCompare = () => {
	const interval: React.MutableRefObject<NodeJS.Timer | null> = useRef(null);
	const { cookies } = useSelector(({ cookiesStore }) => ({
		cookies: cookiesStore,
	}));
	const router = useRouter();
	const dispatch = useDispatch();
	const [state, setState] = useState({ error: '', pending: false });
	
	return (
		<div>
			<h1 className="page-head">Chart compare page</h1>
			{state.error && <span className="error">{state.error}</span>}
			{state.pending && <Loader />}
			
			<CompareContent />
		</div>
	);
};

export default ChartCompare;
