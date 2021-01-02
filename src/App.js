import React from 'react';

function App() {
  // const greeting = 'Hi, Takuya!';
  // const dom = <h1 className="foo">{greeting}</h1>;
  // return (
  //   dom
  // );
  return (
    <React.Fragment>
      <label htmlFor='bar'>
        bar
      </label>
      <input type='test' onChange={() => { console.log('I am clicked!') }} />
    </React.Fragment>
    // <h1>Hello World!!</h1>
  );
}

export default App;
