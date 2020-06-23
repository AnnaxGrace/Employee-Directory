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
    
      
      componentDidMount() {
        API.searchName()
          .then(res => {
              console.log(res)
              this.setState({ result: res.data.results })
              console.log(this.state.result)
              
          })
          .catch(err => console.log(err));
      }
      
   

      handleInputChange = event => {
        event.preventDefault();
        console.log(event.target.value)
        let result = this.state.result.filter(item => item.name.first.includes(event.target.value));
        this.setState({ result })
      };
    
      sortUsers = event => {
        console.log("working?")
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
          
       
        <SearchForm
            handleInputChange={this.handleInputChange}
            results={this.state.name}
        />
        <SortButton
            sortUsers={this.sortUsers}
        />
        <table>
        <tbody>
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