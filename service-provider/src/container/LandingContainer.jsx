import React, { Component } from "react";
import { connect } from 'react-redux'
import { myTodo } from '../actions/testActions'
import { ISPList } from '../components/ISPList'
import { LandingPage } from '../components/LandingPage'

class LandingContainer extends Component {
    constructor(props) {
        super(props)
        this.state ={ 
            error: 'new error'
        }
    }
    componentDidMount(){
        this.props.myTodo(this.state)
        console.log(this);
        
    }
    render(){
        return(
            <div>
            <LandingPage />
            <ISPList />
            </div>
        )
    }
}

export default connect(
    null,
    {myTodo},
)(LandingContainer)