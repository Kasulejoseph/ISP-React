import React from 'react';

const ISPModal = ({ thisModal, state, handleChange, handleSubmit }) => {    
    return (
        <div>
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1" data-target="modal1">Add Isp</a>
            <div
                id="modal1"
                className="modal"
                ref={Modal => { thisModal.Modal = Modal }}
            >
                <div className="modal-content black-text left-align">
                    <h4>New ISP Provider</h4>
                    <div className="row">
                        <form className="col s12" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">home</i>
                                    <input id="icon_prefix" type="text" name="name" className="validate" value={state.name} onChange={handleChange} />
                                    <label htmlFor="icon_prefix">Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">phone</i>
                                    <input id="icon_telephone" type="tel" name="contact" className="validate" value={state.contact} onChange={handleChange} />
                                    <label htmlFor="icon_telephone">Telephone</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="icon_prefix" type="text" name="email" className="validate" value={state.email} onChange={handleChange} />
                                    <label htmlFor="icon_prefix">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">link</i>
                                    <input id="icon_telephone" type="tel" name="url" className="validate" value={state.url} onChange={handleChange} />
                                    <label htmlFor="icon_telephone">Url</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">attach_money</i>
                                    <input id="icon_prefix" type="text" name="price" className="validate" value={state.price} onChange={handleChange} />
                                    <label htmlFor="icon_prefix">Lowest Price</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">wifi</i>
                                    <input id="icon_telephone" type="tel" name="speed" className="validate" value={state.speed} onChange={handleChange} />
                                    <label htmlFor="icon_telephone">Max Speed</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">mode_edit</i>
                                    <textarea id="icon_prefix2" name="description" className="materialize-textarea" value={state.description} onChange={handleChange}></textarea>
                                    <label htmlFor="icon_prefix2">Description</label>
                                </div>
                                {/* <div className="file-field input-field">
                                <div className="btn">
                                    <span>Image</span>
                                    <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload an image" />
                                </div>
                            </div> */}
                            </div>
                            <input className="btn waves-effect waves-light modal-close" id="form-button" type="submit" name="action">
                            </input>
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
};


export default ISPModal;
