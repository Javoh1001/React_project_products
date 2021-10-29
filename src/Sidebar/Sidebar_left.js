import React from 'react';
import './sidebar.css';
import {ReactComponent as Path} from './Path.svg';
import {ReactComponent as User} from './users.svg';

export const sidebar = [
    {
      id:1,
      icon:User,
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
class Sidebar_left extends React.Component{

    render(){
        const {Icon} = this.props
        // console.log(this.state.active===this.props.key)
        
        return(
            <div className={`sidebar active-${this.props.active}`}>
                <ul>
                    <li>
                        <i><Icon className="icons" /></i>
                        <a href="#" className="sidebar_menu"> {this.props.title}</a>
                    </li>
                </ul>
                <div>
                    
                </div>
            </div>
           
        )
    }
}

export default Sidebar_left