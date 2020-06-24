import React from "react";

/// This is our html for our form that we will require in our TableContainer
//It takes in our handleInputChange function so that we can filter through our data

function SearchForm(props) {
    return (
      <form className="Name">
        <div className="form-group">
          <label htmlFor="NameSearch">Search Name:</label>
          <input
            value={props.name}
            onChange={props.handleInputChange}
            name="name"
            list="names"
            type="text"
            className="form-control"
            id="name"
          />
          
        </div>
      </form>
    );
  }

export default SearchForm;