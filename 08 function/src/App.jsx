import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Button Clicked')
  }
  return (
    <div>
      <button onClick={btnClicked}>Clicked</button>
    </div>
  )
}

export default App