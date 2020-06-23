import React from "react";

function UserRow(props) {
    return (
        
    <tr>
    <td>Name: {props.name}</td>
    <td>
        <img src= {props.image}/>
    </td>
    <td>Phone Number: {props.phone} </td>
    <td>Email: {props.email}</td>
    </tr>
        
    );
}

export default UserRow;