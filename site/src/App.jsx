import { useEffect, useState } from 'react'
import CardContainer from './components/card_container';
import Comments from './components/comments';
import './App.css'

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [submittedTexts, setSubmittedTexts] = useState([]);

  const resetComments = () => {
    setSubmittedTexts([]);
  }

  useEffect(() => {
    try {
        fetch('http://localhost:5154/initiatives')
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message);
            });
    } catch (error) {
      console.error('Error reading data:', error);
      setError(error.message);
    }
  }, []);

  return (
    <div className = 'Main'>
      <div className = 'header'>
        <img src="https://junction2024-zeta.vercel.app//logo.png" alt="" />
      </div>
      <div className = 'bodyContainer'>
        <div className = 'cardPile'>
          <CardContainer resetComments={resetComments} clicked={clicked} setClicked={setClicked} cards = {cards}/>
        </div>
        <div className = 'comments'>
          <Comments setSubmittedTexts={setSubmittedTexts} submittedTexts={submittedTexts} clicked={clicked}/>
        </div>

    </div>
    

    </div>
  )
}


export default App;