import { useState } from 'react'
import ApiRequest from './components/ApiRequest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApiRequest />
    </>
  )
}

export default App
