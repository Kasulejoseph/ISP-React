import React from 'react'
import PropTypes from 'prop-types';

export const IspSort = ({ onChangeSort, handlePagination, isPaginate }) => (
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
        <div className="col s4">
            <ul className="pagination">
                <li onClick={() => handlePagination('previous')} className={isPaginate.prev === 'active' ? 'waves-effect' : 'disabled'}><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li className={isPaginate.prev}><a href="#!" onClick={handlePagination} >Previous</a></li>
                <li className={isPaginate.next}><a href="#!" onClick={handlePagination} >Next</a></li>
                <li className={isPaginate.next === 'active' ? 'waves-effect' : 'disabled'} onClick={() => handlePagination('next')}><a href="#!" ><i className="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    </div>
);


IspSort.propTypes = {
    setValue: PropTypes.string
};

export default IspSort;
