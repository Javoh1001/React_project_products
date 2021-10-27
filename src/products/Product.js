import React, {Component} from 'react';
import './product.css';


export default class Product extends Component{
    render(){
        return(
            <div className="products">
                <div className="products_name">
                    <ul>
                        <li><a href="#">{this.props.products}</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}