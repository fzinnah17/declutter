import React from "react";

import cleanroom from './images/1clean.png';
import uncleanroom from './images/2clean.png';
import dirtyroom from './images/3dirty.png';
import verydirtyroom from './images/4dirty.png';


class ImageState extends React.Component {
    render() {
        return (
            <div className="Image" >
                <Room count={5}/>
            </div>
        );
    }

}

function Room(props) {
    let count = props.count;
    if (count <= 3) {
        return (
            <img src={cleanroom} alt={"clean room"} />
        );
    } else if (count <= 6) {
        return (<img src={uncleanroom} alt={"unclean room"} />);
    } else if (count <= 9) {
        return (
        <img src={dirtyroom} alt={"dirty room"} />
        );
    } else {
        return (
            <img src={verydirtyroom} alt={"very dirty room"} />
        );
    }

}

export default ImageState;