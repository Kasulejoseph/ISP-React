import React from 'react';

import { SingleIsp } from './SingleIsp';
import { ISPList } from './ISPList';

export const ISPSection = ({
  data, showIsp, singleIsp, hideIsp, onChangeRating, ratingValue,
}) => (
  <div className="row">
    <div className="col m8 s8">
      {data.map((isp) => <ISPList key={isp._id} isp={isp} handleClick={showIsp} />)}
    </div>
    <div className="col s4 single-isp" style={{ display: hideIsp.display }}>
      <SingleIsp singleIsp={singleIsp} onChangeRating={onChangeRating} ratingValue={ratingValue} />
    </div>
  </div>
);

export default ISPSection;
