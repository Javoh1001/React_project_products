import React from 'react';
import './sidebar.css';


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