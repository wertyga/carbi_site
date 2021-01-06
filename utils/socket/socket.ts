import io from 'socket.io-client';

const socket = io(`${process.env.IO_SERVER_URL}`, {
	autoConnect: true,
});

export default socket;
