import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan It", age: 30 },
            { id: 2, name: "Hao Hoang", age: 24 },
            { id: 3, name: "ERIC", age: 20 }
        ]
    }


    // JSX
    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;