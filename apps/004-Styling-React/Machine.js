const slots = ["🍎", "🍒", "🍇"];

// function to get random slot values
function getRandomSlot() {
  return slots[Math.floor(Math.random() * slots.length)];
}

class Machine extends React.Component {
  render() {
    const s1 = getRandomSlot();
    const s2 = getRandomSlot();
    const s3 = getRandomSlot();
    const jackpot = s1 === s2 && s2 === s3;

    return (
      <div className="Machine">
        <h1>Slot Machine</h1>
        <h3 style={{ fontSize: "50px", backgroundColor: "black" }}>
          {s1} | {s2} | {s3}
        </h3>
        <h3 className={jackpot ? "Machine-jackpot" : "Machine-lose"}>
          {jackpot ? "JACKPOT!!!" : "NOPE"}
        </h3>
      </div>
    );
  }
}
