import "./display.css";

function Display({ value }) {
  console.log(value);
  return <div className='display'>{value}</div>;
}

export default Display;
