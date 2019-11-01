import React, { Component } from "react";
import { connect } from 'react-redux'
import { myTodo } from '../actions/testActions'
import { ispAction, getIspAction } from '../actions/ispAction'
import { ISPSection } from '../components/ISPSection'
import { LandingPage } from '../components/LandingPage'

class LandingContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ispProvider: []
        }
    }
    componentDidMount() {
        this.props.ispAction()
    }
    showIsp = (id) => {
        this.props.getIspAction(id)
        console.log('id===>', this.props);
    }
    render() {
        const { data } = this.props
        if (data) {
            return (
                <div>
                    <LandingPage />
                    <ISPSection data={data} />
                </div>
            )
        }
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )
    }
}

export const mapStateToProps = state => {
    return {
        data: state.isp.responseData.data,
    };
};

export default connect(
    mapStateToProps,
    { myTodo, ispAction, getIspAction },
)(LandingContainer)