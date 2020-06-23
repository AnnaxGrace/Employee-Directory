import React from "react";

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