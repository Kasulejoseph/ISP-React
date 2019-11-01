import React from "react";
import defaultImage from '../assets/default-image.jpg'
export const SingleIsp = () => {
    return (
        <div className="">
            <div className="">
                {/* <h6 className="header">Horizontal Card</h6> */}
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={defaultImage} height="180px" alt="isp avatar" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content isp-spec">
                            <ul class="collapsible p-0 mt-0">
                                <div class="collapsible-header"><i class="material-icons">wifi</i>Max. speed</div>
                                <div class="collapsible-header"><i class="material-icons">local_phone</i>099909 0 9</div>
                                <div class="collapsible-header"><i class="material-icons">email</i>me@gmail.com</div>
                                <div class="collapsible-header"><i class="material-icons">attach_money</i>Min. Plan</div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-justify">
                Ratings: ******
            </div>
            <div class="">
                <div className="text-justify">
                    <div className="card-panel teal">
                        <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                        </span>
                    </div>
                </div>
            </div>
            <a className="waves-effect waves-light btn pl-3" href="!#"><i class="material-icons left">link</i>on</a>
            <a className="waves-effect waves-light btn" href="!#"><i class="material-icons left">share</i>Share</a>
            <a className="waves-effect waves-light btn" href="!#"><i class="material-icons left">link</i>Download</a>

        </div>
    )
}

export default SingleIsp