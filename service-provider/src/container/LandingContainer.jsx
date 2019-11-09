import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        count: 0,
      },
      isPaginate: {
        next: 'active',
        prev: 'disabled',
      },
    };
  }

  componentDidMount() {
    const { ispAction } = this.props;
    ispAction('sort=3&limit=4&skip=0');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    prevState.pager = nextProps.meta;
    return prevState;
  }

  handlePagination = (value) => {
    const { pager } = this.state;
    const { ispAction } = this.props;
    if (value === 'next' && pager.next != null) {
      this.setState({
        isPaginate: {
          next: 'disabled',
          prev: 'active',
        },
      });
      const next = pager.next.split('?')[1];
      ispAction(next);
    }
    if (value === 'previous' && pager.previous != null) {
      this.setState({
        isPaginate: {
          next: 'active',
          prev: 'disabled',
        },
      });
      const previous = pager.previous.split('?')[1];
      ispAction(previous);
    }
  };

  onChangeRating = (value) => this.setState({ rating: value })

  onChangeSort = (value) => this.props.ispAction(undefined, { sort: value })

  showSingleIsp = (id) => {
    const { getIspAction, singleList } = this.props;
    getIspAction(id).then(() => {
      this.setState({
        rating: { value: singleList.rating },
      });
    });
    this.setState({
      hideIsp: { display: 'block' },
    });
  }

  render() {
    const { data, singleList } = this.props;
    const { hideIsp, rating, isPaginate } = this.state;
    if (data) {
      return (
        <div>
          <LandingPage />
          <ISPSection
            data={data}
            showIsp={this.showSingleIsp}
            singleIsp={singleList}
            hideIsp={hideIsp}
            onChangeRating={this.onChangeRating}
            ratingValue={rating}
            onChangeSort={this.onChangeSort}
            handlePagination={this.handlePagination}
            isPaginate={isPaginate}
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
LandingContainer.propTypes = {
  ispAction: PropTypes.func,
  getIspAction: PropTypes.func,
  singleList: PropTypes.shape({}),
  data: PropTypes.shape([]),
  meta: PropTypes.shape({}),
};

LandingContainer.defaultProps = {
  ispAction: () => {},
  getIspAction: () => {},
  singleList: {},
  data: [],
  meta: {},
};

export const mapStateToProps = (state) => ({
  data: state.isp.responseData.data,
  meta: state.isp.responseData.meta,
  singleList: state.isp.singleList.data,
});

export default connect(
  mapStateToProps,
  { myTodo, ispAction, getIspAction },
)(LandingContainer);
