import React from "react";
import { connect } from "react-redux";
import { setInput } from "../actions/action";

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
    const { loginStatus, onInputChange } = this.props;
    if (loginStatus) {
      return <></>;
    } else {
      return (
        <div>
          <input
            ref={this.textInput}
            onChange={() => onInputChange(this.textInput.current.value)}
          />
        </div>
      );
    }
  }
}

const connectInputText = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputText);
export default connectInputText;
