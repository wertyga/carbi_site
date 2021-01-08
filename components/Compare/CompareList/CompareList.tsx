import React from 'react';
import { useSelector } from 'react-redux';
import { WithPrices } from 'components/Common/WithPrices/WithPrices';

import { CompareItem } from '../CompareItem/CompareItem';

import storeSelector from './storeSelector';

import useStyles from './styles';

const CompareList = () => {
	const { pricesStore, compareStore } = useSelector(storeSelector);
	const styles = useStyles();
	return (
		<WithPrices>
			<div className={styles.compareList}>
				{compareStore.map(({ _id, symbol }) => {
					if (!pricesStore[symbol]) return null;
					return (
						<CompareItem
							key={_id}
							pair={symbol}
							id={_id}
							marketsPrice={pricesStore[symbol]}
						/>
					);
				})}
			</div>
		</WithPrices>
	);
};

export default CompareList;
