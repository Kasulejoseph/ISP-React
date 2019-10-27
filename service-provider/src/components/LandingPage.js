import React, { Component } from 'react';
import ispIcon from '../assets/ispImage.png'
class LandingPage extends Component {
    render() {
        return (
            <div class="row">
            <div class="col s12 m12">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <div class="row">
                  <div class="col s1">
                  <img src={ispIcon} width="50" height="50"  alt="isp icon"/>
                  </div>
                  <div class="col s3 " style={{ marginTop: "10px", fontSize: "30px" }}>
                  ISP HackerEarth. - Searching made easy! </div>
                  <div class="col s8 push-s2" style={{ marginTop: "15px" }}>
                    <span style={{ border: "1px solid", padding: "10px" }}>
                    TOtal ISP: 09 |  API Hits: 786! 
                    </span>
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