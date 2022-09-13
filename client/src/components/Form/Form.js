import React from "react"
import { useContext } from "react";
import { Context } from "../../context";
import { setMessage } from "../../context/actions";
import { EVENTS } from "../../hooks/EVENTS";
import { useSocket } from "../../hooks/useSocket";
import {FiSend} from "react-icons/fi"
import "./Form.scss";
const Form = () => {
  const {state, dispatch } = useContext(Context)
  const {message} = state;
  const socket = useSocket()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message){
      socket.emit(EVENTS.CLIENT.CHAT_MESSAGE, message, () => dispatch(setMessage('')))
    }
  }
  return (
    <div className="form" onSubmit={handleSubmit}>
         <form>
        <input
          value={message}
          type="text"
          placeholder="Tapez votre message ici..."
          required
          autoComplete="off"
          onChange={(e) => dispatch(setMessage(e.target.value))}
        />
        <button type='submit' className="btn"> 
          <FiSend  size={32} style={{color: "white"}}/>
        </button>
      </form>
    </div>
  )
}
export default Form