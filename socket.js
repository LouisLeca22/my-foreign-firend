import { EVENTS } from './utils/EVENTS.js';
import formatMessage from "./utils/message.js"
import { addUser, removeUser, getUser, getUsersInRoom } from './utils/users.js';

function socket(io){
    
io.on(EVENTS.connect, (socket) => {
    console.log(`socket ${socket.id} just connected`)
    socket.on(EVENTS.CLIENT.JOIN_ROOM, ({ name, room }, callback) => {
      const { error, user } = addUser({ id: socket.id, name, room });
  
      if(error) return callback(error);
  
      socket.join(user.room);
  
      socket.emit(EVENTS.SERVER.MESSAGE,  formatMessage( 'MyForeignFriends', `Salut ${user.name}, Bienvenue sur le salon ${user.room}.`));
      socket.broadcast.to(user.room).emit(EVENTS.SERVER.MESSAGE, formatMessage('MyForeignFriends',`${user.name} a rejoint le salon !`));
  
      io.to(user.room).emit(EVENTS.SERVER.ROOM_USERS, { room: user.room, users: getUsersInRoom(user.room) });
  
      callback();
    });
  
    socket.on(EVENTS.CLIENT.CHAT_MESSAGE, (message, callback) => {
      const user = getUser(socket.id);
  
      io.to(user.room).emit(EVENTS.SERVER.MESSAGE, formatMessage(user.name, message));
  
      callback();
    });
  
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
      console.log(`socket ${socket.id} just disconnected`)
      if(user) {
        io.to(user.room).emit(EVENTS.SERVER.MESSAGE, formatMessage( 'MyForeignFreinds',`${user.name} a quitté le salon.`));
        io.to(user.room).emit(EVENTS.SERVER.ROOM_USERS, { room: user.room, users: getUsersInRoom(user.room)});
      }
    })
  });
  
}

export default socket