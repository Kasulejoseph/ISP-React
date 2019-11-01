import React from "react";
import avatar from '../assets/avatar.png'

export const ISPList = ({ isp, handleClick }) => {
    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <img src={avatar} alt="" className="circle" />
                <div className="isp-detail">{isp.name}<a href="!#" onClick={() => { handleClick(isp._id) }} className="secondary-content" pointer="true">{isp.max_speed}<i className="material-icons">chevron_right</i></a></div>
            </li>
        </ul>
    )
}

export default ISPList