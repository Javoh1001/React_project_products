import React from 'react';
import './sidebar.css';
import {ReactComponent as Path} from './Path.svg'

export const exit = [
    {
      id:7,
      icon:Path,
      title:'Chiqish'
    },
  ]
class Sidebar_bottom extends React.Component{
    render(){
        const {Icon} = this.props;
        return(
            <div className="sidebar">
                <ul>
                    <li>
                        <i><Icon className="icons" /></i>
                        <p><a href="#" className="sidebar_menu"> {this.props.title}</a></p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar_bottom