import React from "react";
import { connect } from "react-redux";
import { setLogin } from "../actions/action";

// 該 component 需要存取的 store部分(state 與 dispatch)
const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus,
    content: state.content,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick: () => {
      dispatch(setLogin());
    },
  };
};

// UI component
class LoginBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    // connect 後 Redux store 會變成 props 這邊用解構來取得
    const { loginStatus, content, onBtnClick } = this.props;
    if (loginStatus) {
      return <button disabled>登入</button>;
    } else {
      if (content.trim()) {
        return (
          <button
            onClick={() => {
              onBtnClick();
            }}
          >
            登入
          </button>
        );
      } else {
        return <button disabled>登入</button>;
      }
    }
  }
}

// 資料層沒有獨立出來，與UI層做一起
const connectLoginBtn = connect(mapStateToProps, mapDispatchToProps)(LoginBtn);
export default connectLoginBtn;
