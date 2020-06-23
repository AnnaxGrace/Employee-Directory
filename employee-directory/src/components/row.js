import React from "react";

function UserRow(props) {
    return (
        
    <tr>
    <td>{props.name}</td>
    <td>
        <img src= {props.image} alt = "pictures of employees"/>
    </td>
    <td>{props.phone} </td>
    <td>{props.email}</td>
    </tr>
        
    );
}

export default UserRow;