import React from 'react';
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import Filter from "./Filter"

class Product extends React.Component{
    constructor (props){
        super(props);
        this.state={
            productName :"",
            productCategory :"",
            productPrice :"",
            product:{
              name:"",
              category:"",
              price:""
            },
            filterText:"",    
            products : {
              '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
              '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
              '3': {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
              '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
              '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
              '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
          }
        }

        this.handleFilter = this.handleFilter.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
    }

    handleFilter = (filterInput)=> {
        this.setState(filterInput);
   }

   handleSave(product) {
        if (!product.id) {
            product.id = new Date().getTime()
        }
        this.setState((prevState) => {
            let products = prevState.products
            products[product.id] = product
            return { products }
        });
    }


   handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products
            delete products[productId]
            return { products }
        })
    }

   

  render(){
    return(<div><h1>My Inventory</h1><Filter onFilter={this.handleFilter}/><br/>
    <ProductTable onDestroy={this.handleDestroy} filterText={this.state.filterText} products ={this.state.products}/><br/>< ProductForm onSave={this.handleSave}/></div>);
  };
}
export default Product;