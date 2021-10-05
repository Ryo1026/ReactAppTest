import React from "react";
import LoginInfo from "./LoginInfo";
import InputText from "./InputText";
import LoginBtn from "./LoginBtn";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false, content: "" };
  }
  setLogin = () => {
    this.setState({ isLogin: true });
  };
  setContent = (event) => {
    this.setState({ content: event.target.value });
  };

  render() {
    return (
      <>
        <LoginInfo isLogin={this.state.isLogin} content={this.state.content} />
        <InputText isLogin={this.state.isLogin} setContent={this.setContent} />
        <LoginBtn
          isLogin={this.state.isLogin}
          content={this.state.content}
          setLogin={this.setLogin}
        />
      </>
    );
  }
}

export default MyComponent;
