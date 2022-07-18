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
    let msg;
    if (s1 === s2 && s2 === s3) {
      msg = "YOU HIT JACKPOT!!!!";
    } else if (s1 === s2 || s2 === s3 || s1 === s3) {
      msg = "YOU WIN!!!!";
    } else {
      msg = "YOU LOSE!!!!";
    }
    return (
      <div>
        <h1>Slot Machine</h1>
        <h3>
          {s1} | {s2} | {s3}
        </h3>
        <h3>{msg}</h3>
      </div>
    );
  }
}
