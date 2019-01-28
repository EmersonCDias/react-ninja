import React from 'react'

const App = ({ name, lastname }) => (
  <div>
    <h1>{`${name} ${lastname}`}</h1>
  </div>
)

App.defaultProps = {
  name: 'Unkown',
  lastname: 'No lastname'
}

export default App
