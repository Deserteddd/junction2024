import { useState } from 'react'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hei mulkero</p>
      <Card info={{ title: 'Title', description: 'Description' }} />
    </>
  )
}

export default App
