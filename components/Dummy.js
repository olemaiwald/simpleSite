class Dummy extends React.Component {
  state = {
      size : "size",
      timeout: "timeout"
    };


  render() {
    return (
      <div>
        <p>size: {this.props.val.size}</p>
        <p>timeout: {this.props.val.timeout}</p>
      </div>
    );
  }
}

export default Dummy;
