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
              this.setState({ result: res.data.results })
              console.log(this.state.result)
              
          })
          .catch(err => console.log(err));
      }
    
      handleInputChange = event => {
        event.preventDefault();
        console.log(event.target.value)
        const result = this.state.result.filter(item => item.name.first !== event.target.value);
            // const {name, value} = item.event.target.name
            // return name
        this.setState({ result })
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
       
      };
  
    render() {
      return (
        <div>
          
        Hello World!
        <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            results={this.state.name}
          />
          {/* <SearchResults results={this.state.results} /> */}
        <tbody>
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
        
        
        </div>
      );
    }
  }
  
  export default TableContainer;