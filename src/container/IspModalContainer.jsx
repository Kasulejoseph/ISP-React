import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { addIspAction } from '../actions/ispAction';
import ISPModal from '../components/ISPModal';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: '',
      price: '',
      email: '',
      speed: '',
      url: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '10%',
    };
    M.Modal.init(this.Modal, options);
    console.log(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      name, price, speed, description, contact, email, url,
    } = this.state;
    const { addIspAction } = this.props;
    const formData = {
      name,
      lowest_price: price,
      rating: 2.0,
      max_speed: speed,
      description,
      contact_no: contact,
      email,
      image: 'https://',
      url,
    };
    addIspAction(formData);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <ISPModal
          thisModal={this}
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export const mapStateToProps = (state) => ({
  resp: state.isp.createResponseData.data,
});

export default connect(
  mapStateToProps,
  { addIspAction },
)(Modal);
