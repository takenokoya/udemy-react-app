import React from 'react'
import PropTypes from 'prop-types';

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
    { name: 'Mr.Default', age: 20 }
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
