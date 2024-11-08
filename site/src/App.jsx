import { useState } from 'react'
import ApiRequest from './ApiRequest'
import Swr from './Swr'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hei mulkero</p>
      <Card info={{ title: 'Title', description: 'Description' }} />
      <ApiRequest />
      <Swr />
    </>
  )
}

export default App
