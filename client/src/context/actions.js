export const setName = (name) => {
  return { type: 'SET_NAME', name };
};

export const setRoom = (room) => {
  return { type: 'SET_ROOM', room };
};

export const setUsers = (users) => {
  return { type: 'SET_USERS', users };
};

export const setMessages = (message) => {
  return { type: 'SET_MESSAGES', message };
};

export const setMessage = (message) => {
  return { type: 'SET_MESSAGE', message };
};

export const setError = (error) => {
  return { type: 'SET_ERROR', error };
};
