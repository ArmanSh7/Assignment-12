import React from "react";
import TableRows from "./TableRows";

class ProductTable extends React.Component{
      constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
      }

      state={
        productName :"",
        productCategory :"",
        productPrice :"",
        product:{
          name:"",
          category:"",
          price:""
        }
      }

      handleDestroy(id) {
        this.props.onDestroy(id)
      }
   
      render() {
        var rows=[];
        for (const key in this.props.products) {
       
          rows.push( 
                    <TableRows 
                               key={this.props.products[key]["id"]}
                               product ={this.props.products[key]}
                               price={this.props.products[key]["price"]} 
                               name={this.props.products[key]["name"]}
                               onDestroy={this.handleDestroy}/>
                    );
        }

        let filteredText = this.props.filterText;
        return (
            <div>
              <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                  {filteredText.length>0?rows.filter(elem=>elem.props.name.includes(filteredText,0)):rows}
                </tbody>
              </table>          
            </div>
        );
    }
  }

  export default ProductTable;