import React, { Component } from 'react';
import ISPModal from '../components/ISPModal'
import M from 'materialize-css'

export class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'rer',
            contact: '',
            price: '',
            email: '',
            speed: '',
            url: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
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
    handleSubmit(e) {
        e.preventDefault()

        console.log(this.state);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <ISPModal thisModal={this} state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
export default Modal;
