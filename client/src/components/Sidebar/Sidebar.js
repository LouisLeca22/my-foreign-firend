import React from "react"
import { useContext } from "react"
import { Context } from "../../context"
import "./Sidebar.scss"
import {BiLogOutCircle} from "react-icons/bi";
import GetIcons from "./GetIcons";
import online from "../../icons/onlineIcon.png";
import { setName } from "../../context/actions";

const Sidebar = () => {
   const {state, dispatch} = useContext(Context)
   const {room, users, name} = state
 
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <span className="logo">MyForeignFriend</span>
                <div className="user">
                   <span>{name}</span> 
                   <button onClick={() => dispatch(setName(""))}>
                     <BiLogOutCircle />
                   </button>
                </div>
            </div>
            <div className="sidebar__main">
                <div className="sidebar__main-room">
                    <div className="icon">
                        <GetIcons type={room} />
                    </div>
                    <span>Vous êtes dans le salon <em> {room}</em></span>
                </div>
                <div className="sidebar__main-users">
                    {users.map(user => (
                        <div className="user" key={user.name}>
                            <img src={online} alt="online" />
                            {user.name}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Sidebar