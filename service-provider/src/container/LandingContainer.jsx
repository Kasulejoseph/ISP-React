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
            hideIsp: {display: 'none'},
            rating: {value: 2}
        }
    }
    componentDidMount() {
        this.props.ispAction()
    }
    onChangeRating = value => this.setState({rating: value})
    showSingleIsp = (id) => {
        this.props.getIspAction(id).then(() => {
            this.setState({
                rating: {value: this.props.singleList.rating}
            })
        })        
        this.setState({
            hideIsp: {display: 'block'}
        })
    }
    render() {
        const { data } = this.props
        if (data) {
            return (
                <div>
                    <LandingPage />
                    <ISPSection 
                    data={data}
                    showIsp={this.showSingleIsp}
                    singleIsp={this.props.singleList}
                    hideIsp= {this.state.hideIsp}
                    onChangeRating={this.onChangeRating}
                    ratingValue={this.state.rating}
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
        singleList:  state.isp.singleList.data,
    };
};

export default connect(
    mapStateToProps,
    { myTodo, ispAction, getIspAction },
)(LandingContainer)