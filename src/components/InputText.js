import React from "react";
import { connect } from "react-redux";
import { setInput } from "../actions/action";

// 該 component 需要存取的 store部分(state 與 dispatch)
const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (input) => {
      dispatch(setInput(input));
    },
  };
};

// UI component
class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focus();
  }
  render() {
    // connect 後 Redux store 會變成 props 這邊用解構來取得
    const { loginStatus, onInputChange } = this.props;
    if (loginStatus) {
      return <></>;
    } else {
      return (
        <div>
          <input
            placeholder="請輸入姓名"
            ref={this.textInput}
            onChange={() => onInputChange(this.textInput.current.value)}
          />
        </div>
      );
    }
  }
}

// 資料層沒有獨立出來，與UI層做一起
const connectInputText = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputText);
export default connectInputText;
