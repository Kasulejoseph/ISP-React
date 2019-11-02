import React from 'react';

import BeautyStars from 'beauty-stars';

export const Rating = ({ onChangeRating, ratingValue }) => (
  <BeautyStars
    value={ratingValue.value ? ratingValue.value : ratingValue}
    onChange={(value) => { onChangeRating(value); }}
    inactiveColor="#EAECEE"
    activeColor="#E67E22"
  />
);

export default Rating;
