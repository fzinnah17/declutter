import React from "react";

import cleanroom from './images/1clean.png';


class ImageState extends React.Component {
    render() {
        return (
            <div className="Image" >
                <img className="Clean-Room" src={cleanroom} alt={"clean room"} />

            </div>
        );
    }

}

export default ImageState;