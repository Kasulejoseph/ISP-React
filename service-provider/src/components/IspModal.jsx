import React, { Component } from 'react';
import M from 'materialize-css'

export class Modal extends Component {
    componentDidMount() {
        const options = {
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        }
        M.Modal.init(this.Modal, options)
        console.log(this);
    }
    render() {
        return (
            <div>
                <a className="waves-effect waves-light btn modal-trigger" href="#modal1" data-target="modal1">Add Isp</a>
                <div
                    id="modal1"
                    className="modal"
                    ref={Modal => { this.Modal = Modal }}
                >
                    <div className="modal-content black-text left-align">
                        <h4>New ISP Provider</h4>
                        gxfchvjbkhcfgxchvjb 
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-red btn-flat">
                            Disagree
            </a>
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
                            Agree
            </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modal;
