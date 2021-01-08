import _uniq from "lodash/uniq";
// import { SocketTypes } from "redux/types/socket";
// import { socket } from './socket';

// const socketHandler = ({ type, data }) => {
// 	switch (type) {
// 		case SocketTypes.SAVE_SIGNALS: {
// 			if (!data.signals || !data.signals.length) return;
// 			const symbols = _uniq(data.signals.map(({symbol}) => symbol));
// 			!!data.signals.length && socket.emit('fetch-signal-compareStore', _uniq(symbols));
// 			break;
// 		}
//
// 		case SocketTypes.ADD_SIGNAL: {
// 			const symbols = store.getState().signalsStore.signals
// 				.map(({symbol}) => symbol);
// 			const symbol = action.data.signal.symbol;
// 			socket.emit('fetch-signal-compareStore', _uniq([...symbols, symbol]));
// 			break;
// 		}
//
// 		case SocketTypes.UPDATE_CHART: {
// 			const symbols = store.getState().signalsStore.signals
// 				.map((item) => {
// 					if (item._id === action.data.signal._id) return action.data.signal;
// 					return item;
// 				})
// 				.map(({symbol}) => symbol);
//
// 			socket.emit('fetch-signal-compareStore', _uniq(symbols));
// 			break;
// 		}
//
// 		case SocketTypes.DELETE_CHART: {
// 			const symbols = store.getState().signalsStore.signals
// 				.filter(({_id}) => _id !== data._id)
// 				.map(({symbol}) => symbol);
//
// 			socket.emit('fetch-signal-compareStore', _uniq(symbols));
// 			break;
// 		}
// 	};
// }

// export const handleSocketEvents = (dispatch) => {
// 	console.log('handleSocketEvents');
// 	socket.on('connect', () => {
// 		console.log('connect_socket');
// 	});
// 	socket.on('symbols_price', compareStore => {
// 		console.log(compareStore);
// 	});
// };

