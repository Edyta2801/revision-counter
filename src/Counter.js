import React from 'react'


class Counter extends React.Component {
    state = { number: 0 }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button
                    onClick={() => this.setState({ number: this.state.number + 1 })}>
                    +
</button>
                <button
                    onClick={() => this.setState({ number: this.state.number - 1 })}
                >
                    -
</button>


            </div>
        )
    }
}

export default Counter