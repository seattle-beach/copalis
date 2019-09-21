
const formStyle = {
  display: "inline-block",
};

const Ava = () => {
  const [firstNumber, setFirstNumber] = React.useState(null);
  const [secondNumber, setsecondNumber] = React.useState(null);

  const result = firstNumber + secondNumber;

  const changeFirstNumber = event => {
    const valueString = event.target.value;
    const parsedNumber = parseInt(valueString);
    if (isNaN(parsedNumber)) {
      setFirstNumber(null);
    } else {
      setFirstNumber(parsedNumber);
    }
  };

  const changesecondNumber = event => {
    const valueString = event.target.value;
    const parsedNumber = parseInt(valueString);
    if (isNaN(parsedNumber)) {
      setsecondNumber(null);
    } else {
      setsecondNumber(parsedNumber);
    }
  };

  return (
    <React.Fragment>
      <form style={formStyle}>
        <input value={firstNumber} onChange={changeFirstNumber} />
        +
        <input value={secondNumber} onChange={changesecondNumber}/>
        =
      </form>
      <span>{result}</span>
    </React.Fragment>
  );
};

ReactDOM.render(<Ava />, document.getElementById("root"));