import React from "react";

function SortButton(props) {
    return (
    <div>
    <button type="button" onClick={props.sortUsers} className="btn-sort">
        Sort
    </button>
    </div>
    );
}  

export default SortButton;