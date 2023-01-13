// react arrow function component  with export- rafce
// Export and import : part of ecmascript 2015 
//<React.fragment> needs importing react  


import React from 'react';
import Resturant from './Component/Basics/Resturant'
const App = () => {
  return <div>
      <Resturant/>
  </div>
}
export default App;
// bcz of default export we not need to write .js after file name.







// const MyName= () => {
//   return <h1> Mitali</h1>
// }
// const App = () =>{
//   return React.createElement("h1", {}, "Hello World");
// }