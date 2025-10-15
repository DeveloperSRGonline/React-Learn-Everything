import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='shivam' age={21} img='https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074'/>
      <Card user='shyam' age={34} img='https://images.unsplash.com/photo-1664044020180-b75bfddf9776?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032'  />
      <Card user='sagar' age={34} img='https://images.unsplash.com/photo-1760312379880-1a5623c5f835?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500'  />
    </div>
  )
}

export default App