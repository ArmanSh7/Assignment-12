import React from 'react';
import {TableRows} from './TableRows'
// let state={
//     productName :"",
//     productCategory :"",
//     productPrice :"",
//     product:{
//       name:"",
//       category:"",
//       price:""
//     },
//     data:[]
//   }
const RESET_VALUES = {id: '', category: '', price: '', name: ''}
class  ProductForm extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
       }

       this.handleSave = this.handleSave.bind(this);
       this.handleChange = this.handleChange.bind(this);
   }

    handleSave(e) {
        this.props.onSave(this.state.product)
        this.setState({
            product: Object.assign({}, RESET_VALUES), errors: {}
        })
        e.preventDefault(); //Prevent form from triggering HTTP POST
    }

    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        })
    }

   
    render(){
    return(
        <div>
            <h3>Enter a new Product</h3>
            <form >           
                <label for="name">Name:</label><br/>
                <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.product.name} /><br/>
                <label for="category">Category:</label><br/>
                <input type="text" id="category" name="category" onChange={this.handleChange} value={this.state.product.category} /><br/>
                <label for="price">Price:</label><br/>
                <input type="text" id="price" name="price" onChange={this.handleChange} value={this.state.product.price} /><br/>
                <input type="submit" value="Submit"  onClick={this.handleSave}/>
            </form> 
            </div>
        );
    };
}
  
  export default ProductForm;


//   const getPrice = (event)=>{
//     switch(event.target.name){
//       case "name":
//         state.product.name = event.target.value;
//         console.log("Name is "+ state.product.name);
//         break;
//       case "price":
//         state.product.price= event.target.value;
//         console.log("Price is "+ state.product.price)
//           break;
//       case "category":
//         state.product.category = event.target.value;
//         console.log("Category is "+ state.product.category)
//             break;
//       default:
//         break;
//     }
//   }
  
//   const submitRow = (event)=>{
//     event.preventDefault();
//     state.data.push(<TableRows  name={state.product.name} price={state.product.price}/>);
//   }