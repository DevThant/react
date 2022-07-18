class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Dex" hobbies={["Driving", "Travelling", "Coding"]} />
        <Friend name="John" hobbies={["Painting", "Podcast"]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
