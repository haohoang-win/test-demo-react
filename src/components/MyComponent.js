import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Hao Hoang",
        address: "hoo.hoang.hao",
        age: 26
    };

    handleClick = (event) => {
        this.setState({
            name: 'Eric',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        type='text'
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;