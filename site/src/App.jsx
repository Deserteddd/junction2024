import { useEffect, useState } from 'react'
import ApiRequest from './components/ApiRequest'
import CardContainer from './components/card_container';

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  return (
    <>
      <ApiRequest />
    </>
  )
}

export default App
