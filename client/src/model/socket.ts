import io from 'socket.io-client';

// @ts-ignore
const socket = io('http://127.0.0.1:3000');

export default socket;