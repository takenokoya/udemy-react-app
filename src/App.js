import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor='bar'>
//         bar
//       </label>
//       <input type='test' onChange={() => { console.log('I am clicked!') }} />
//     </React.Fragment>
//     // <h1>Hello World!!</h1>
//   );
// }

const App = () => { 
  return <Cat />
}

const Cat = () => {
  return (
    <div>Meow!</div>
  )
}
export default App;
