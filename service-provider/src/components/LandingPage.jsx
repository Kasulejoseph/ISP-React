import React, { Component } from 'react';
import ispIcon from '../assets/ispImage.png'
// import LandingContainer from '../container/LandingContainer'
import './LandingPage.scss'
export class LandingPage extends Component {
    render() {
        return (
          <div>
            <div class="row">
            <div class="col s12 m12">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <div class="row">
                  <div class="col s1">
                  <img src={ispIcon} width="50" height="50"  alt="isp icon"/>
                  </div>
                  <div class="col s6 col-item" style={{ marginTop: "5px", fontSize: "20px" }}>
                  <span style={{ fontSize: "30px" }}>ISP HackerEarth.</span> - Searching made easy! </div>
                  <div class="col s4 push-s2 col-item" style={{marginTop: "15px" }}>
                    <span style={{ border: "1px solid", padding: "10px" }}>
                    TOtal ISP: 09 |  API Hits: 786! 
                    </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        )
    }
}

export default LandingPage