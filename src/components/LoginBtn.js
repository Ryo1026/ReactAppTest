import React from "react";
import { connect } from "react-redux";
import { setLogin } from "../actions/action";

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

class LoginBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
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

const connectLoginBtn = connect(mapStateToProps, mapDispatchToProps)(LoginBtn);
export default connectLoginBtn;
