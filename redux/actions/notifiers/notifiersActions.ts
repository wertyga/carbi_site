import { NotifiesSaveData, NotifiesTypes } from 'redux/types/notifies';
import { saveNotifyRequest } from 'api/notifies';
import { getApiError } from 'utils/errors';

import { rootAction } from '../rootAction';

export const saveNotifyAction = async (saveData: NotifiesSaveData) => {
	const { dispatch, rootState: { userStore: { token } } } = rootAction();
	try {
		const { data: { data } } = await saveNotifyRequest({ ...saveData, token });
		
		dispatch({
			type: NotifiesTypes.ADD_NOTIFY,
			data,
		});
	} catch (e) {
		throw getApiError(e);
	}
};
