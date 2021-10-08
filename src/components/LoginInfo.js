import React from "react";
import { connect } from "react-redux";

// 該 component 需要存取的 store部分(state)
const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus,
    content: state.content,
  };
};

// UI component
class LoginInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // connect 後 Redux store 會變成 props 這邊用解構來取得
    const { loginStatus, content } = this.props;
    if (loginStatus) {
      return <h1>您好,{content}</h1>;
    } else {
      return <h1>請先登入</h1>;
    }
  }
}

// 資料層沒有獨立出來，與UI層做一起
const connectLoginInfo = connect(mapStateToProps)(LoginInfo);
export default connectLoginInfo;
