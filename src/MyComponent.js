import React from "react";
import LoginInfo from "./components/LoginInfo";
import InputText from "./components/InputText";
import LoginBtn from "./components/LoginBtn";

class MyComponent extends React.Component {
  render() {
    return (
      <>
        <LoginInfo />
        <InputText />
        <LoginBtn />
      </>
    );
  }
}

export default MyComponent;
