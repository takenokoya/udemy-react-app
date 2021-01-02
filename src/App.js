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
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 25 }, 
    { name: 'Mr.Default' }, 
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} /> 
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
  <div>Hi, I am {props.name}, and I am {props.age} years old</div>
  )
}

User.defaultProps = {
  age: 1
}

export default App;
