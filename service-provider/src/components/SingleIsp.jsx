import React from "react";
import defaultImage from '../assets/default-image.jpg'
export const SingleIsp = (singleIspData) => {
    
    return (
        <div className="">
            <div className="">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={defaultImage} height="180px" alt="isp avatar" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content isp-spec">
                            <ul className="collapsible p-0 mt-0">
                                <div className="collapsible-header"><i className="material-icons">wifi</i>Max. speed: {singleIspData.singleIsp ? singleIspData.singleIsp.max_speed: 'mps'}</div>
                                <div className="collapsible-header"><i className="material-icons">local_phone</i>{singleIspData.singleIsp ? singleIspData.singleIsp.contact_no: '+250'}</div>
                                <div className="collapsible-header"><i className="material-icons">email</i>{singleIspData.singleIsp ? singleIspData.singleIsp.email: 'me@gmail.com'}</div>
                                <div className="collapsible-header"><i className="material-icons">attach_money</i>{singleIspData.singleIsp ? singleIspData.singleIsp.lowest_price: '$100'}</div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-justify">
                Ratings: ******
            </div>
                <div className="text-justify">
                    <div className="card-panel teal">
                        <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                        </span>
                </div>
            </div>
            <a className="waves-effect waves-light btn pl-3" href="!#"><i className="material-icons left">link</i>on</a>
            <a className="waves-effect waves-light btn" href="!#"><i className="material-icons left">share</i>Share</a>
            <a className="waves-effect waves-light btn" href="!#"><i className="material-icons left">link</i>Download</a>

        </div>
    )
}

export default SingleIsp