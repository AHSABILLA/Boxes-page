const Box = (props) => {
  //  Write your code here.
  const { boxContainer, name } = props;
  return (
    <div className={boxContainer}>
      <p>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxContainer="yellow-box" name="Small" />
      <Box boxContainer="blue-box" name="Medium" />
      <Box boxContainer="pink-box" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
