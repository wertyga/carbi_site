export enum NotifiesTypes {
	SET_NOTIFY = 'SET_NOTIFY',
	DELETE_NOTIFY = 'DELETE_NOTIFY',
	ADD_NOTIFY = 'ADD_NOTIFY',
}

export enum NotifiesUser {
	MORE = 'more',
	LESS = 'less',
	DIFFERENCE = 'difference',
}

export type NotifiesSaveData = {
	id: string,
	notifyType: NotifiesUser,
	value: string,
};

export type NotifyItem = {
	notifyType: NotifiesUser,
	value: string,
	active: boolean,
	createdAt: Date,
};

export type NotifiesSaveDataRequest = NotifiesSaveData & {
	token: string,
};

export type NotifiesSaveDataResponse = {
	data: {
		data: {
			_id: string,
			items: NotifyItem[],
		},
	},
};
