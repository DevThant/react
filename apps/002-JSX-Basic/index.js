const getNum = () => {
  return Math.floor(Math.random() * 10) + 1;
};

class RandLuck extends React.Component {
  render() {
    const num = getNum();
    let message = "";
    if (num === 7) {
      message = (
        <div>
          <h1>Congratulation!</h1>
          <img src="https://media1.giphy.com/media/s99VUdNNp2kzYJDq4B/giphy.gif" />
        </div>
      );
    } else {
      message = <p>Sorry, you are not lucky</p>;
    }

    return (
      <div>
        <h1>Your number is : {num}</h1>

        {message}
      </div>
    );
  }
}

ReactDOM.render(<RandLuck />, document.getElementById("root"));
