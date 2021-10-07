import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus,
    content: state.content,
  };
};

class LoginInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { loginStatus, content } = this.props;
    if (loginStatus) {
      return <h1>您好,{content}</h1>;
    } else {
      return <h1>請先登入</h1>;
    }
  }
}

const connectLoginInfo = connect(mapStateToProps)(LoginInfo);
export default connectLoginInfo;
