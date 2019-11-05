import React from 'react'
import PropTypes from 'prop-types';

export const IspSort = ({ onChangeSort }) => (
    <div className="container row">
        <div className=" col s1 sort-item-list border">
            <i className="material-icons">style</i> Sort By
            </div>
        <div className="col s1 sort-item-list">
            <label>
                <input value='lowest_price' className="with-gap" name="group3" type="radio" onChange={(value) => { onChangeSort('lowest_price') }} />
                <span>Price</span>
            </label>
            <label>
                <input value='rating' className="with-gap" name="group3" type="radio" onChange={() => { onChangeSort('rating') }} />
                <span>Rating</span>
            </label>
        </div>
    </div>
);


IspSort.propTypes = {
    setValue: PropTypes.string
};

export default IspSort;
