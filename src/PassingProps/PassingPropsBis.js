import React from 'react'



const PassingPropsBis = (props) => (
    <div>
        <h4>
            {props.passingValue}
        </h4>
        <button
            onClick={props.passingFun}
        >
            b
                </button>
    </div>
)


export default PassingPropsBis