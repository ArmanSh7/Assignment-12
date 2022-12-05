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
        return(
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td><button onClick={this.destroy}>Delete</button></td>
        </tr>
        );
    }
    
}

export default TableRows;
