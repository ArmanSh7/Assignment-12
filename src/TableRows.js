import React from "react";
class TableRows extends React.Component {

    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
   }
   

    destroy() {
        this.props.onDestroy(this.props.product.id);
   }
   
    render(){
        let {name, price} = this.props;
        let displayPrice = price.includes("$")?price:"$"+price;
        return(
        <tr>
            <td>{name}</td>
            <td>{displayPrice}</td>
            <td><button class="btn btn-primary" onClick={this.destroy}>Delete</button></td>
        </tr>
        );
    }
    
}

export default TableRows;
