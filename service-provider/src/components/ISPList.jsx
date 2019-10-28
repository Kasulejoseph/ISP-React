import React, { Component } from "react";
import avatar from '../assets/avatar.png'

class ISPList extends Component {
    render(){
        return(
            <div class="container">
                <ul class="collection">
                <li class="collection-item avatar">
                    <img src={avatar} alt="" class="circle" />
                    <div class="isp-detail">Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div>
                </li>
                <li class="collection-item avatar">
                    <img src={avatar} alt="" class="circle" />
                    <div class="isp-detail">Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div>
                </li>
                </ul>
            </div>
        )
    }
}

export default ISPList