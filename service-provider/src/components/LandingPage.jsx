import React, { Component } from 'react';
import ispIcon from '../assets/ispImage.png'
import './LandingPage.scss'
export class LandingPage extends Component {
    render() {
        return (
          <div>
            <div className="row">
            <div className="col s12 m12">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <div className="row">
                  <div className="col s1">
                  <img src={ispIcon} width="50" height="50"  alt="isp icon"/>
                  </div>
                  <div className="col s6 col-item" style={{ marginTop: "5px", fontSize: "20px" }}>
                  <span style={{ fontSize: "30px" }}>ISP HackerEarth.</span> - Searching made easy! </div>
                  <div className="col s4 push-s2 col-item" style={{marginTop: "15px" }}>
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