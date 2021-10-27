import React, {Component} from 'react';
import './App.css';
import Sidebar_left from './Sidebar/Sidebar_left';
import Bitmap from './Sidebar/images/Bitmap.png';
import {ReactComponent as Path} from './icons/Path.svg';
import Sidebar_bottom from './Sidebar/Sidebar_bottom';
import Product from './products/Product';
import Detail from './detail/Detail';
import {ReactComponent as Oval } from './detail/ikki.svg';
import {ReactComponent as Bir } from './detail/bir.svg';
import {ReactComponent as Uch } from './detail/uch.svg';
import {ReactComponent as Tort } from './detail/tort.svg';
import {ReactComponent as Besh } from './detail/besh.svg';
import {ReactComponent as Olti } from './detail/olti.svg';
import {ReactComponent as Yetti } from './detail/yetti.svg';
import {ReactComponent as Sakkiz } from './detail/sakkiz.svg';
import {ReactComponent as Toqqiz } from './detail/toqqiz.svg';
import {ReactComponent as On } from './detail/on.svg';
import {ReactComponent as Trash } from './detail/trash.svg';
import {ReactComponent as Edit } from './detail/edit.svg';
import Group from './imagess/Groupp.png';
import Plus from './imagess/plus.png';

const sidebar = [
  {
    id:1,
    icon:Path,
    title:'Home'
  },
  {
    id:2,
    icon:Path,
    title:'About'
  },
  {
    id:3,
    icon:Path,
    title:'News'
  },
  {
    id:4,
    icon:Path,
    title:'Blogs'
  },
  {
    id:5,
    icon:Path,
    title:'Portfolio'
  },
  {
    id:6,
    icon:Path,
    title:'Contacts'
  },
  
]

const exit = [
  {
    id:7,
    icon:Path,
    title:'Chiqish'
  },
]

// menu

const product = [
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

{/* detail_products start */}

const detail = [
  {
    id:1,
    img:Bir,
    title_food:'Lavash mini',
    second_title:'Lavash',
    cost:'18,000',
    third_title:'Kichkina lavash',
    edit:Edit,
    delete1:Trash,
  },
  {
    id:2,
    img:Oval,
    title_food:'ChizburgerMax',
    second_title:'Burger',
    cost:'23,000',
    third_title:'Kichkina lavash',
    edit:Edit,
    delete1:Trash,
  },
  {
    id:3,
    img:Uch,
    title_food:'Lavash Max',
    second_title:'Lavash',
    cost:'8,000',
    third_title:'Kichkina lavash',
    edit:Edit,
    delete1:Trash,
  },
  {
    id:4,
    img:Tort,
    title_food:'Lavash c cirom',
    second_title:'Lavash',
    cost:'21,000',
    third_title:'Kichkina lavash',
    edit:Edit,
    delete1:Trash,
  },
  {
    id:5,
    img:Besh,
    title_food:'Burger mini',
    second_title:'Burger',
    cost:'11,000',
    third_title:'Kichkina lavash',
    edit:Edit,
    delete1:Trash,
  },
  {
    id:6,
    img:Olti,
    title_food:'Lavash mini',
    second_title:'Lavash',
    cost:'18,000',
    third_title:'Kichkina lavash',
    edit:Edit,
    delete1:Trash,
  },
  {
    id:7,
    img:Yetti,
    title_food:'Lavash mini',
    second_title:'Lavash',
    cost:'18,000',
    third_title:'Kichkina lavash',
    edit:Edit,
    delete1:Trash,
  },
  {
    id:8,
    img:Sakkiz,
    title_food:'Coca-cola 1.5L',
    second_title:'Ichimlik',
    cost:'35,000',
    third_title:'Kichkina lavash',
    edit:Edit,
    delete1:Trash,
  },
  {
    id:9,
    img:Toqqiz,
    title_food:'Coca-cola 1l',
    second_title:'Ichimlik',
    cost:'18,000',
    third_title:'Kichkina lavash',
    edit:Edit,
    delete1:Trash,
  },
  {
    id:10,
    img:On,
    title_food:'Burger mini',
    second_title:'Lavash',
    cost:'11,000',
    third_title:'Kichkina lavash',
    edit:Edit,
    delete1:Trash,
  },

]

{/* detail_products end */}


export default class App extends Component {
      state = {
        active:1,
      }
  
  render (){
    const onActive = (id) =>{
    this.setState({active: id})
  }
    return(
      <React.Fragment>
      <div className="container">
        {/* sidebar_left_start */}
        <div className="sidebar_left">
          <div className="nav_logo">
            <a><img src={Bitmap} /></a>
            <div className="logo_text">
                <p>Fast Food</p>
                <span>Online mahsulot sotuvi</span>
            </div>
          </div>
            {/* sidebar_menu_start */}
            <div className="sidebar_menu">
                {
                  sidebar.map(({id, icon, title}) =>{
                    return(
                      <div  onClick={() => onActive(id)}>
                        <Sidebar_left  
                        active={this.state.active===id}
                        id={id} 
                        Icon={icon} 
                        title={title}/>
                      </div>
                    )
                  })
                }
            </div>
            {/* sidebar_menu_end */}

              {/* sidebar_bottom start */}
            <div className="sidebar_bottom">
                {
                    exit.map(({id,icon,title})=>{
                      return (
                        <Sidebar_bottom  key={id} Icon={icon} title={title}/>
                      )
                    })
                }
            </div>
              {/* sidebar_bottom end */}

        </div>
      

        <div className="navbar_and_product">
            {/* navbar_top start */}
            <div className="navbar_top">
                <div className="navbar_top_icon">
                    <a href="#" className="icon_1"><img src={Plus} /></a>
                    <a className="add">Yangi mahsulot <br /> qo'shish</a>
                </div>   
                <div className="navbar_top_input">
                    <div><input placeholder="Qidirish"/></div>
                    <a href="#"><img src={Group} /></a>
                </div> 
            </div>
              {/* navbar_top end */}

              {/* products menu start */}
            <div className="product_menu">
                {
                  product.map(({id,products}) =>{
                      return (
                        <Product key={id} products={products} />
                      )
                  })
                }
            </div>  
            {/* products menu end */}
            
            {/* detail_products start */}

            <div className="detail_products">
              {
                detail.map(({id,img,title_food,second_title,cost,third_title,edit,delete1}) =>{
                  return(
                    <Detail key={id} Img={img} title_food={title_food} second_title={second_title} cost={cost} third_title={third_title} Edit={edit} Delete1={delete1} />
                  )
                })
              }
                {/* download start */}
              <div className="install">
                <button>Yana yuklash</button>
              </div>
            {/* download end */}
            </div>

            {/* detail_products end */}

            

        </div>
    </div>
    
   </React.Fragment>
    )
  }
}
