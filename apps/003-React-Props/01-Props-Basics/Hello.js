class Hello extends React.Component {
  render() {
    const props = this.props;
    const bangs = "!".repeat(props.bangs);
    return (
      <p>
        {props.p1} waves at {props.p2} {bangs}
      </p>
    );
  }
}
