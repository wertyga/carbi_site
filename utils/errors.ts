import _get from 'lodash/get';

export const getApiError = (e): string => {
	return _get(e, 'response.data.error.message', e.message);
};
