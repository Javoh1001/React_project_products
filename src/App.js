import React, {Component} from 'react';
import './App.css';
import Sidebar_left from './Sidebar/Sidebar_left';
import Bitmap from './Sidebar/images/Bitmap.png';
import Sidebar_bottom from './Sidebar/Sidebar_bottom';
import Product from './products/Product';
import Detail from './detail/Detail';
import Group from './imagess/Groupp.png';
import Plus from './imagess/plus.png';
import { detail } from './detail/Detail';
import { sidebar } from './Sidebar/Sidebar_left';
import { exit } from './Sidebar/Sidebar_bottom';
import { product } from './products/Product'



export default class App extends Component {
      state = {
        active:1,
        detail:detail,
      }
     
  
  render (){
    const onActive = (id) =>{
      this.setState({active: id})
    }
   

    const onFilter = ({target}) =>{
      let data1 = detail.filter((value) => value.second_title.includes(target.value));
      console.log(data1);
      this.setState({
        detail:data1
      })
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
                    <div><input placeholder="Qidirish" onChange={onFilter} /></div>
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
            {/* {id,img,title_food,second_title,cost,third_title,edit,delete1} */}
            <div className="detail_products">
              {
                detail.map((value) =>{
                  return(
                    <Detail key={value.id} value={value} />
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
