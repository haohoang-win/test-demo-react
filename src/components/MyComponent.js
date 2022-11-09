import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {


    // JSX
    render() {
        const myArr = ['123', 'abc', 23]
        return (
            <div>
                <UserInfor />
                <br />
                <br />
                <DisplayInfor name="Hao Hoang123" age={26} myInfor={myArr} />
            </div>
        );
    }
}

export default MyComponent;