import { NotifyItem, NotifiesTypes } from 'redux/types/notifies';

type State = {
	_id: string,
	notifiers: NotifyItem[],
}[];
type Action = {
	type: NotifiesTypes,
	data: {
		_id: string,
		notifiers: NotifyItem[],
	},
};

export const notifiesStore = (state: State = [], { type, data }: Action) => {
	switch(type) {
		case NotifiesTypes.ADD_NOTIFY:
			return state.map((item) => {
				if (item._id === data._id) return data;
				return item;
			})
		
		default:
			return state;
	}
};
