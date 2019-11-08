import React, { Component } from 'react';
import { connect } from 'react-redux';
import { myTodo } from '../actions/testActions';
import { ispAction, getIspAction } from '../actions/ispAction';
import { ISPSection } from '../components/ISPSection';
import { LandingPage } from '../components/LandingPage';

class LandingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ispProvider: [],
      hideIsp: { display: 'none' },
      rating: { value: 2 },
      pager: {
        nextPage: '',
        previousPage: '',
        count: 0
      },
      isPaginate: {
        next: 'active',
        prev: 'disabled'
      }
    };
  }

  componentDidMount() {
    this.props.ispAction('sort=3&limit=4&skip=0');        
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    prevState.pager = nextProps.meta
    return prevState
  }
  handlePagination = (value) => {    
    if(value === 'next') {
      this.setState({
        isPaginate: {
          next: 'disabled',
          prev: 'active'
        }
      })
      const next = this.state.pager.next ? this.state.pager.next.split('?')[1] : null    
      this.props.ispAction(next)
    }
    if(value === 'previous') {
      this.setState({
        isPaginate: {
          next: 'active',
          prev: 'disabled'
        }
      })
      const previous = this.state.pager.previous ? this.state.pager.previous.split('?')[1] : null
      this.props.ispAction(previous)
    }

  };
  onChangeRating = (value) => this.setState({ rating: value })
  onChangeSort = (value) => this.props.ispAction(undefined, {sort: value})
  showSingleIsp = (id) => {
    this.props.getIspAction(id).then(() => {
      this.setState({
        rating: { value: this.props.singleList.rating },
      });
    });
    this.setState({
      hideIsp: { display: 'block' },
    });
  }

  render() {
    const { data } = this.props;        
    if (data) {
      return (
        <div>
          <LandingPage />
          <ISPSection
            data={data}
            showIsp={this.showSingleIsp}
            singleIsp={this.props.singleList}
            hideIsp={this.state.hideIsp}
            onChangeRating={this.onChangeRating}
            ratingValue={this.state.rating}
            onChangeSort={this.onChangeSort}
            handlePagination={this.handlePagination}
            isPaginate ={this.state.isPaginate}
          />
        </div>
      );
    }
    return (
      <div className="progress">
        <div className="indeterminate" />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.isp.responseData.data,
  meta: state.isp.responseData.meta,
  singleList: state.isp.singleList.data,
});

export default connect(
  mapStateToProps,
  { myTodo, ispAction, getIspAction },
)(LandingContainer);
