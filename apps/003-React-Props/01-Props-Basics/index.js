class App extends React.Component {
  render() {
    return (
      <div>
        <Hello p1="Unas" p2="Dahlia" />
        <Hello p1="Long" p2="Berenice" bangs={3} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
