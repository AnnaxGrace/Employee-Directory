import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import UserRow from "./row";

class TableContainer extends Component {

    state = {
        search: "",
        result: [],
        name: ""
      };
    
      // When the component mounts, get a list of all available base breeds and update this.state.breeds
      componentDidMount() {
        API.searchName()
          .then(res => {
              console.log(res)
              console.log("hi")
              this.setState({ result: res.data.results })
              console.log("hi")
              console.log(this.state.result)
              
          })
          .catch(err => console.log(err));
      }
    
      handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        API.searchName(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data);
            }
            this.setState({ result: res.data, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };
  
    render() {
      return (
        <div>
          
        Hello World!
        <table>
        {this.state.result.map(item => (
        <UserRow 
        
        name={item.name.first}
        birthday={item.dob.date}
        email={item.email}
        />
        ))}
        </table>
        <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            results={this.state.name}
          />
          {/* <SearchResults results={this.state.results} /> */}
        
        </div>
      );
    }
  }
  
  export default TableContainer;