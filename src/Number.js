import {useState} from "react";

function Number(props) {
    return (
        <div>
            <div className='number-one'>
                {props.counter}
            </div>
        </div>
    );
}

export default Number;