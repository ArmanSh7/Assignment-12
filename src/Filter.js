import React from "react";

class Filter extends React.Component{

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
   }   

    handleChange(e) {
        const value = e.target.value
        const name = e.target.name
   
        this.props.onFilter({
             [name]: value
        });
   }
   
    render(){
        return(
            <div>
             <input className="w-50" placeholder='Search....' type="text" id="filterText" name="filterText" onChange={this.handleChange}/><br/>
            </div>);        
    };
    
   
  }

  export default Filter;