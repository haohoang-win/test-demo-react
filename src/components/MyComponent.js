import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan It", age: "16" },
            { id: 2, name: "Hao Hoang", age: "24" },
            { id: 3, name: "ERIC", age: "20" }
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    // JSX
    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;