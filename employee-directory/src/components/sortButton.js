import React from "react";

// This is our onclick function for our sort button that we will require in our TableContainer
// It calls the sortUsers function, which sorts our data by first name
function SortButton(props) {
    return (
    <div>
    <button type="button" onClick={props.sortUsers} className="btn-sort">
        Sort Alphabetically By First Name
    </button>
    </div>
    );
}  

export default SortButton;