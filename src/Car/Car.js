import React from 'react';

const cars = ( props ) => {
    return (
        <div>
            <p onClick={props.click}>You {props.name} win !!</p>
            <button onClick={() => this.props.switchNameHandler('Mercedes!!')}>Switch Car</button>
        </div>
    )
};

export default cars;