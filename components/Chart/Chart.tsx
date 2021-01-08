import React from 'react';
import { Chart as GoogleChart } from 'react-google-charts';
import { Card } from "@material-ui/core";
import { useSelector } from 'react-redux';

import storeSelector from "./storeSelector";

import useStyles from './styles';

interface Props {
	title: string,
	data: [string, string | number][],
}

export const Chart: React.FC<Props> = ({ title, data }) => {
	const { isMobile } = useSelector(storeSelector);
	const styles = useStyles();
	return (
		<Card className={styles.chartCard}>
			<GoogleChart
				width={!isMobile ? '600px' : 'initial'}
				height={!isMobile ? '350px' : 'initial'}
				chartType="PieChart"
				loader={<div>Loading Chart</div>}
				data={data}
				options={{
					title,
					legend:{
						position: isMobile ? 'bottom' : 'right',
					}
				}}
				rootProps={{ 'data-testid': '7' }}
			/>
		</Card>
	);
};
