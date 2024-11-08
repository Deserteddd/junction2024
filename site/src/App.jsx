import { useState } from 'react'
import ApiRequest from './ApiRequest'
import Swr from './Swr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hei mulkero</p>
      <ApiRequest />
      <Swr />
    </>
  )
}

export default App
