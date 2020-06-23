import React from "react";

function UserRow(props) {
    return (
        
    <tr>
    <td>Name: {props.name}</td>
    <td>Birthday: {props.birthday} </td>
    <td>Email: {props.email}</td>
    </tr>
        
    );
}

export default UserRow;