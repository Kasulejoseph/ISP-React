import React from 'react';
import ispIcon from '../assets/ispImage.png';
import Modal from '../container/IspModalContainer'
import './LandingPage.scss';

export const LandingPage = () => (
      <div>
        <div className="row">
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <div className="row">
                  <div className="col s1">
                    <img src={ispIcon} width="50" height="50" alt="isp icon" />
                  </div>
                  <div className="col s6 col-item2" style={{ marginTop: '5px', fontSize: '20px' }}>
                    <span style={{ fontSize: '30px' }}>ISP HackerEarth.</span>
                    {' '}
                      - Searching made easy!
                    {' '}
                    <div className="modal-container">
                      <Modal />
                    </div>
                  </div>
                  <div className="col s4 push-s1 col-item" style={{ marginTop: '15px' }}>
                    <span style={{ border: '1px solid', padding: '10px' }}>
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

export default LandingPage;
