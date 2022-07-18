class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting from="Dex" to="Sara" bangs={3} />
        <Greeting to="Chief" bangs={5} />
        <Greeting to="Chris" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
