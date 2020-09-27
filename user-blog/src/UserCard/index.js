import React from 'react';
import './style.css'


const UserCard=(props)=>{
   
    return(
       <div className="user-card">
        <img className="user-img" src={props.picUrl}/>
        <span> {props.firstName} {props.lastName}  </span>
        <span> {props.email}   </span>

       </div>


    )



}

export default UserCard;