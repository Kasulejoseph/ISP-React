import React, { Component } from "react";
import { connect } from 'react-redux'
import { myTodo } from '../actions/testActions'
import { ispAction} from '../actions/ispAction'
import { ISPList } from '../components/ISPList'
import { LandingPage } from '../components/LandingPage'

class LandingContainer extends Component {
    constructor(props) {
        super(props)
        this.state ={ 
            ispProvider: []
        }
    }
    componentDidMount(){
        this.props.ispAction() 
    } 
    render(){
        const {data} = this.props
        if(data) {
            return (
                <div>
                <LandingPage />
                {data.map(isp => {
                return <ISPList key={isp._id} isp={isp} />
            })}
                </div>
            )
        }
        return(
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
    {myTodo, ispAction},
)(LandingContainer)