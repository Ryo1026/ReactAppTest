import React from "react";

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
    const { isLogin } = this.props;
    if (isLogin) {
      return <></>;
    } else {
      return (
        <div>
          <input ref={this.textInput} onChange={this.props.setContent}></input>
        </div>
      );
    }
  }
}

export default InputText;
