import { getOrInitializeStore } from 'redux/initializeStore';
import { RootState } from 'redux/types/root';
import { Dispatch } from 'redux';

export const rootAction = (): { rootState: RootState, dispatch: Dispatch } => {
	const rootStore = getOrInitializeStore();
	return {
		rootState: rootStore.getState(),
		dispatch: rootStore.dispatch,
	};
};
