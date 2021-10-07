import React from "react";

class LoginInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isLogin, content } = this.props;
    if (isLogin) {
      return <h1>您好,{content}</h1>;
    } else {
      return <h1>請先登入</h1>;
    }
  }
}

export default LoginInfo;
