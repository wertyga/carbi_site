import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Card } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Price } from "redux/types/prices";
import { removeCompareItemAction } from 'redux/actions/compare/compareActions';

import storeSelector from './storeSelector';

import useStyles from './styles';

type Props = {
	pair: string,
	id: string,
	marketsPrice: Price[],
};

export const CompareItem: React.FC<Props> = ({ pair, marketsPrice, id }) => {
	const styles = useStyles();
	const { token } = useSelector(storeSelector);
	const router = useRouter();
	const [pending, setPending] = useState(false);
	
	const deleteCompareItem = async (e) => {
		e.stopPropagation();
		e.preventDefault();
		if (pending) return;
		setPending(true);
		await removeCompareItemAction(id);
		
		setPending(false);
	};
	
	const handleRoute = (e) => {
		e.stopPropagation();
		e.preventDefault();
		if (pending) return;
		router.push('/chart/compare');
	};
	
	return (
		<div
			role="presentation"
			onClick={handleRoute}
			className={`${styles.compareContainer} ${pending ? 'disabled' : ''}`}
		>
			<Card className={styles.compareItem}>
				{!!token &&
					<CloseIcon
						onClick={deleteCompareItem}
						className={styles.closeIcon}
					/>
				}
				<span className={styles.pair}>{pair}</span>
				<div className={styles.marketData}>
					{marketsPrice.map(({ market, price }) => (
						<div
							key={market}
							className={styles.marketItem}
						>
							<span>{`${market}:`}</span>
							<span>{price}</span>
						</div>
					))}
				</div>
			</Card>
		</div>
	);
};
