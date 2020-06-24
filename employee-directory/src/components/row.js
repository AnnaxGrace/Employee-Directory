import React from "react";

// This is our row that we will require in our TableContainer
//For each data we create a dynamic row
//This uses the props sent in TableContainer from our api

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