import { useState } from 'react';
import { Loader } from 'components/Common/Loader/Loader';
import CompareContent from 'components/CompareContent/CompareContent';

const ChartCompare = () => {
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
