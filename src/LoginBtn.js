import React from "react";

class LoginBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.setLogin = props.setLogin;
  }

  componentDidMount() {}

  render() {
    const { isLogin, content } = this.props;
    if (isLogin) {
      return <button disabled>登入</button>;
    } else {
      if (content) {
        return <button onClick={this.props.setLogin}>登入</button>;
      } else {
        return <button disabled>登入</button>;
      }
    }
  }
}

export default LoginBtn;
