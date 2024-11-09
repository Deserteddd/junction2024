import { useEffect, useState } from 'react'
import CardContainer from './components/card_container';
import Comments from './components/comments';
import './App.css'
import aloitteetData from './public/aloitteet.json';

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
      setCards(aloitteetData);
    } catch (error) {
      console.error('Error reading data:', error);
      setError(error.message);
    }
  }, []);

  return (
    <div className = 'Main'>
      <div className = 'header'>
        <img src="./public/logo.png" alt="" />
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