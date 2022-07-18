class Greeting extends React.Component {
  static defaultProps = {
    from: "Anonymous",
    bangs: 1,
  };
  render() {
    const { from, to, bangs } = this.props;
    let totalBangs = "!".repeat(bangs);
    return (
      <h1>
        {from} says hello to {to} {totalBangs}
      </h1>
    );
  }
}
