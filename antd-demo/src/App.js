import React from "react";
import './App.css';

function App() {
  const [num, updateNum] = React.useState(0);
  window.updateNum = updateNum;
  console.log(updateNum);
  return num;
}

// function App() {
//   const [num, updateNum] = React.useState(0);
  
//   function increment() {
//     setTimeout(() => {
//       updateNum(num + 1);
//     }, 1000);
//   }
  
//   return <p onClick={increment}>{num}</p>;
// }

export default App;
