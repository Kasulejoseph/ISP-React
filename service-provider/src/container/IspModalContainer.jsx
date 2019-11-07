import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIspAction } from '../actions/ispAction';
import ISPModal from '../components/ISPModal'
import M from 'materialize-css'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
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
        const formData ={
            name: this.state.name,
            lowest_price: this.state.price,
            rating: 2.0,
            max_speed: this.state.speed,
            description: this.state.description,
            contact_no: this.state.contact,
            email: this.state.email,
            image: 'https://',
            url: this.state.url
        }
        console.log('before', this.props);
        
        this.props.addIspAction(formData)
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
export const mapStateToProps = (state) => ({
    resp: state.isp.createResponseData.data,
  });

export default connect(
    mapStateToProps,
    { addIspAction })(Modal);
