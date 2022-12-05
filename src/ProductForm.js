import React from 'react';

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
            <h3>Add a new Product</h3>
            <form >           
                <label for="name">Name:</label><br/>
                <input className="w-25" type="text" id="name" name="name" onChange={this.handleChange} value={this.state.product.name} /><br/>
                <label for="category">Category:</label><br/>
                <input className="w-25" type="text" id="category" name="category" onChange={this.handleChange} value={this.state.product.category} /><br/>
                <label for="price">Price:</label><br/>
                <input className="w-25" type="number" id="price" name="price" onChange={this.handleChange} value={this.state.product.price} /><br/>
                <button type="submit" className="btn btn-primary mt-2" value="Save"  onClick={this.handleSave}>Save</button>
            </form> 
            </div>
        );
    };
}
  
  export default ProductForm;
