import React from 'react';
import './detail.css';

export default class Detail extends React.Component{
    render(){
        const {Img} = this.props;
        const {Delete1} = this.props;
        const {Edit} = this.props;
        return(
            <div className="detail">
                <ul>
                    <li><a><Img /></a></li>
                    <li><a>{this.props.title_food}</a></li>
                    <li><a>{this.props.second_title}</a></li>
                    <li><a>{this.props.cost}</a></li>
                    <li><a>{this.props.third_title}</a></li>
                    <li><a><Edit /></a></li>
                    <li><a><Delete1 /></a></li>
                </ul>
            </div>
        )
    }
}