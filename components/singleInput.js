export default function SingleInput () {
  const [userInput, setUserInput] = useState("");

  const codeChangeHandler = (event) => {
    const element = event.target;
    const nextSibling = element.nextElementSibling;
    nextSibling ? nextSibling.focus() : element.blur();
  };

  const codeInputFields = new Array(4)
    .fill(0)
    .map((item, index) => (
      <input
        name={`code-${index}`}
        key={index}
        style={{ width: "20px", height: "20px" }}
        onChange={(event) => codeChangeHandler(event)}
        maxLength={1}
      />
    ));

  return <>{codeInputFields}</>;
};