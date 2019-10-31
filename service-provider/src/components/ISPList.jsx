import React from "react";
import avatar from '../assets/avatar.png'

export const ISPList = ({isp})=> {    
    return(
        <div>
        <div className="row">
            <div className="col s8">
            <ul className="collection">
            <li className="collection-item avatar">
                <img src={avatar} alt="" className="circle" />
                <div className="isp-detail">{isp.name}<a href="#!" className="secondary-content" pointer="true">{isp.max_speed}<i className="material-icons">chevron_right</i></a></div>
            </li>
            </ul>
            </div>
            <div className="col s4"> 
            </div>
            </div>
        </div>
    )
}

export default ISPList