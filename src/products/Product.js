import React, {Component} from 'react';
import './product.css';

export const product = [
    {
        id:1,
        products:'MAXSULOT'
    },
    {
        id:2,
        products:'KATAGERIYA'
    },
    {
        id:3,
        products:'NARXI'
    },
    {
        id:4,
        products:'QO\'SHIMCHA'
    },
    {
        id:5,
        products:'ACTION'
    },
  
  ]
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