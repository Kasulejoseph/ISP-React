import React from 'react'
import PropTypes from 'prop-types';

export const IspSort = ({ onChangeSort, pager }) => (
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
        <div>
            <ul className="pagination">
                <li className="disabled"><a href="#!" onClick={() => pager.previousPage}><i class="material-icons">chevron_left</i></a></li>
                <li className="disabled"><a href="#!" onClick={() => pager.previousPage} >Previous</a></li>
                <li className="waves-effect active"><a href="#!" onClick={() => pager.nextPage} >Next</a></li>
                <li className="waves-effect"><a href="#!" onClick={() => pager.nextPage}><i class="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    </div>
);


IspSort.propTypes = {
    setValue: PropTypes.string
};

export default IspSort;
