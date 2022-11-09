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

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;