import React, {Component} from 'react';
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    } 

    render() {
        const map = this.props.inventory.map(products => <li key = {products}>
            <div>{products.name}</div>
            <div>{products.price}</div>
            <div>{products.image}</div>
        </li>)
        
    return (
            <div>
                <Product map={this.map}/>
                {map}
            </div>
        )
    }
}



export default Dashboard;