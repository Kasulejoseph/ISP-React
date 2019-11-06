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
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input id="icon_prefix" type="text" className="validate" />
                                        <label htmlFor="icon_prefix">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">phone</i>
                                        <input id="icon_telephone" type="tel" className="validate" />
                                        <label htmlFor="icon_telephone">Telephone</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">email</i>
                                        <input id="icon_prefix" type="text" className="validate" />
                                        <label htmlFor="icon_prefix">Email</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">link</i>
                                        <input id="icon_telephone" type="tel" className="validate" />
                                        <label htmlFor="icon_telephone">Url</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">attach_money</i>
                                        <input id="icon_prefix" type="text" className="validate" />
                                        <label htmlFor="icon_prefix">Lowest Price</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">wifi</i>
                                        <input id="icon_telephone" type="tel" className="validate" />
                                        <label htmlFor="icon_telephone">Max Speed</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">mode_edit</i>
                                        <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                        <label htmlFor="icon_prefix2">Description</label>
                                    </div>
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>Image</span>
                                            <input type="file" />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text" placeholder="Upload an image" />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn waves-effect waves-light" type="submit" name="action">
                                    Submit
                                        <i className="material-icons right">send</i>
                                </button>
                            </form>
                        </div>
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
