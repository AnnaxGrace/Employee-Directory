import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import UserRow from "./row";
import TableHead from "./TableHead";
import SortButton from "./sortButton"

class TableContainer extends Component {

    state = {
        search: "",
        result: [],
        name: ""
      };
    
      //When the page loads, run our api call and store our returned data in our state.result array
      componentDidMount() {
        API.searchName()
          .then(res => {
              this.setState({ result: res.data.results })
              
          })
          .catch(err => console.log(err));
      }
      
   
      //This function handles the search bar input, and filters the list when you search for a person
      handleInputChange = event => {
        event.preventDefault();
        let result = this.state.result.filter(item => item.name.first.includes(event.target.value));
        this.setState({ result })
      };
    
      //This function sorts the list by first name when you click on it
      sortUsers = event => {
        
        let result = this.state.result.sort(function(a, b) {
            var nameA = a.name.first.toUpperCase();
            var nameB = b.name.first.toUpperCase()
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0;
        })
        this.setState({ result })
      };
  
    render() {
      return (
        <div>
          
       {/* Calls our form and passes on our handleInputChange function */}
        <SearchForm
            handleInputChange={this.handleInputChange}
            results={this.state.name}
        />
        {/* Calls our btn html and passes on our sortUsers function */}
        <SortButton
            sortUsers={this.sortUsers}
        />
        <table>
        <tbody>
        {/* This maps through our results from our api and then grabs the information for each index in our data to the row component */}
        <TableHead />
        {this.state.result.map(item => (
        <UserRow 
        key={item.id.value}
        name={item.name.first + " " + item.name.last}
        image={item.picture.thumbnail}
        phone={item.phone}
        email={item.email}
        />
        ))}
        </tbody>
        </table>
        
        
        </div>
      );
    }
  }
  
  export default TableContainer;