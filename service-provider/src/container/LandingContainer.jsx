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
            ispProvider: [],
            hideIsp: {display: 'none'}
        }
    }
    componentDidMount() {
        this.props.ispAction()
    }
    showIsp = (id) => {
        this.setState({
            hideIsp: {display: 'block'}
        })
        this.props.getIspAction(id)
    }
    render() {
        const { data } = this.props
        if (data) {
            return (
                <div>
                    <LandingPage />
                    <ISPSection 
                    data={data}
                    showIsp={this.showIsp}
                    singleIsp={this.props.singleList}
                    hideIsp= {this.state.hideIsp}
                    />
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
        singleList:  state.isp.singleList.data
    };
};

export default connect(
    mapStateToProps,
    { myTodo, ispAction, getIspAction },
)(LandingContainer)