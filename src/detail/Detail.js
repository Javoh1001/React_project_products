import React from 'react';
import './detail.css';
import {ReactComponent as Oval } from './ikki.svg';
import {ReactComponent as Bir } from './bir.svg';
import {ReactComponent as Uch } from './uch.svg';
import {ReactComponent as Tort } from './tort.svg';
import {ReactComponent as Besh } from './besh.svg';
import {ReactComponent as Olti } from './olti.svg';
import {ReactComponent as Yetti } from './yetti.svg';
import {ReactComponent as Sakkiz } from './sakkiz.svg';
import {ReactComponent as Toqqiz } from './toqqiz.svg';
import {ReactComponent as On } from './on.svg';
import {ReactComponent as Trash } from './trash.svg';
import {ReactComponent as Edit } from './edit.svg';


export const detail = [
    {
      id:1,
      Img:Bir,
      title_food:'Lavash mini',
      second_title:'Lavash',
      cost:'18,000',
      third_title:'Kichkina lavash',
      Edit:Edit,
      Delete1:Trash,
    },
    {
      id:2,
      Img:Oval,
      title_food:'ChizburgerMax',
      second_title:'Burger',
      cost:'23,000',
      third_title:'Kichkina lavash',
      Edit:Edit,
      Delete1:Trash,
    },
    {
      id:3,
      Img:Uch,
      title_food:'Lavash Max',
      second_title:'Lavash',
      cost:'8,000',
      third_title:'Kichkina lavash',
      Edit:Edit,
      Delete1:Trash,
    },
    {
      id:4,
      Img:Tort,
      title_food:'Lavash c cirom',
      second_title:'Lavash',
      cost:'21,000',
      third_title:'Kichkina lavash',
      Edit:Edit,
      Delete1:Trash,
    },
    {
      id:5,
      Img:Besh,
      title_food:'Burger mini',
      second_title:'Burger',
      cost:'11,000',
      third_title:'Kichkina lavash',
      Edit:Edit,
      Delete1:Trash,
    },
    {
      id:6,
      Img:Olti,
      title_food:'Lavash mini',
      second_title:'Lavash',
      cost:'18,000',
      third_title:'Kichkina lavash',
      Edit:Edit,
      Delete1:Trash,
    },
    {
      id:7,
      Img:Yetti,
      title_food:'Lavash mini',
      second_title:'Lavash',
      cost:'18,000',
      third_title:'Kichkina lavash',
      Edit:Edit,
      Delete1:Trash,
    },
    {
      id:8,
      Img:Sakkiz,
      title_food:'Coca-cola 1.5L',
      second_title:'Ichimlik',
      cost:'35,000',
      third_title:'Kichkina lavash',
      Edit:Edit,
      Delete1:Trash,
    },
    {
      id:9,
      Img:Toqqiz,
      title_food:'Coca-cola 1l',
      second_title:'Ichimlik',
      cost:'18,000',
      third_title:'Kichkina lavash',
      Edit:Edit,
      Delete1:Trash,
    },
    {
      id:10,
      Img:On,
      title_food:'Burger mini',
      second_title:'Lavash',
      cost:'11,000',
      third_title:'Kichkina lavash',
      Edit:Edit,
      Delete1:Trash,
    },
  
  ]

export default class Detail extends React.Component{
    render(){
        const {Img} = this.props.value
        const {Delete1} = this.props.value
        const {Edit} = this.props.value
        
        return(
            <div className="detail">
                <ul>
                    <li><a><Img /></a></li>
                    <li><a>{this.props.value.title_food}</a></li>
                    <li><a>{this.props.value.second_title}</a></li>
                    <li><a>{this.props.value.cost}</a></li>
                    <li><a>{this.props.value.third_title}</a></li>
                    <li><a><Edit /></a></li>
                    <li><a><Delete1/></a></li>
                </ul>
            </div>
        )
    }
}