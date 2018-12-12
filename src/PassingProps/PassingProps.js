import React from 'react'

class PassingProps extends React.Component{
    render(){
        return(
            <div>
                passingValue={this.props.passingValue}
                passingFun={this.props.passingFun}

            </div>
        )
    }
}
export default PassingProps