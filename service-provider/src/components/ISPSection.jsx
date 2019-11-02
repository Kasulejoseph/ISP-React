import React from "react";
import { SingleIsp } from '../components/SingleIsp'
import { ISPList } from '../components/ISPList'

export const ISPSection = ({ data, showIsp, singleIsp, hideIsp, onChangeRating, ratingValue }) => {            
    return (
        <div className="row">
            <div className="col m8 s8">
            {data.map(isp => {
                    return <ISPList key={isp._id} isp={isp} handleClick={showIsp} />
                })}
            </div>
            <div className="col s4 single-isp" style={{display: hideIsp.display}}>
                <SingleIsp singleIsp ={singleIsp} onChangeRating={onChangeRating} ratingValue={ratingValue}/>
            </div>
        </div>
    )
}

export default ISPSection