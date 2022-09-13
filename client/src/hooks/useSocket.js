import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import io from "socket.io-client";
import { Context } from '../context/';
import {setError, setMessages, setUsers} from "../context/actions"
import { EVENTS } from './EVENTS';

let socket;
export const useSocket = () => {
    const {state, dispatch} = useContext(Context)
    const {name, room} = state
    const navigate = useNavigate()
    useEffect(() => {
        socket = io()
        socket.emit(EVENTS.CLIENT.JOIN_ROOM, { name, room }, (error) => {
          if(error) {
            dispatch(setError(error))
            navigate('/')
          }
        });
      
    }, [dispatch, navigate, room, name]);
    
    useEffect(() => {
  
      socket.on(EVENTS.SERVER.MESSAGE, message => {
        dispatch(setMessages(message))
      });
      
      socket.on(EVENTS.SERVER.ROOM_USERS, ({ users }) => {
        dispatch(setUsers(users));
      });
  }, [dispatch]);

    return socket;
}