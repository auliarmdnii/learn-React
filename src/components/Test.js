function Test(props) {
  return (
    <div style={{ color: props.fontColor, fontFamily: `monospace` }}>
      <img src={props.avatar}
      style={{width:`100px`, height:`100px`, borderRadius:`50%`}}/>
      <h4>Name: {props.name}</h4>
      <h4>City: {props.city}</h4>
      <p>{props.childern}</p>
    </div>
  );
}
export default Test;
