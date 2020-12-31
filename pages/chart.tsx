import { NextPage } from 'next';
import ChartPageContent from 'components/ChartPageContent/ChartPageContent';

const ChartPage: NextPage = () => {
	return (
		<div>
			<h1 className="page-head">ChartPage</h1>
			<ChartPageContent />
		</div>
	);
};

export default ChartPage;
