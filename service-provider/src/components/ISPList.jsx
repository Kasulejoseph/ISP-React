import React, { Component } from "react";
import avatar from '../assets/avatar.png'

export class ISPList extends Component {
    render(){
        return(
            <div>
            <div class="row">
                <div class="col s8">
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

                <div class="col s4">

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
                </div>
            </div>
        )
    }
}

export default ISPList