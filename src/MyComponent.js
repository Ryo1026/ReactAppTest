import React from "react";
import LoginInfo from "./components/LoginInfo";
import InputText from "./components/InputText";
import LoginBtn from "./components/LoginBtn";

class MyComponent extends React.Component {
  render() {
    // 類別型元件解構寫在這
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
