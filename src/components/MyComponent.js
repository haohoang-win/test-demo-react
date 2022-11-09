import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Hao Hoang",
        address: "hoo.hoang.hao",
        age: 26
    };

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;