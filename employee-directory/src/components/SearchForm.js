import React from "react";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="NameSearch">Search Name:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="name"
            list="names"
            type="text"
            className="form-control"
            id="name"
          />
          <datalist id="breeds">
            {props.name.map(item => (
              <option value={item} key={item} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }

export default SearchForm;