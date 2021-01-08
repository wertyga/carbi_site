import { Cookie } from 'universal-cookie';

import { CompareState } from './compare';
import { PricesState } from './prices';
import { DeviceState } from './device';
import { MarketsState } from './markets';
import { UserState } from './user';

export type RootState = {
	compareStore: CompareState,
	pricesStore: PricesState,
	deviceStore: DeviceState,
	marketsStore: MarketsState,
	userStore: UserState,
	cookiesStore: Cookie,
};
