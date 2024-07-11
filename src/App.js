import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [randomQuote, setRandomQuote] = useState('')

  useEffect(() => {
    getQuote();
    console.log("Updated on page load");
  }, [])

  const getQuote = () => {
    
    axios.get('https://type.fit/api/quotes')
    
    .then(res => {
      
      let randomQuote = res.data[Math.floor(Math.random() * res.data.length)];
      
      randomQuote.text = '"' + randomQuote.text + '"';
      randomQuote.author = '- ' + randomQuote.author.split(",")[0];
      
      setRandomQuote(randomQuote)
    })
  }

  return (
    <div className='App'>
      <div className='Display'>
        <p className='Text'>{randomQuote.text}</p>
        <p className='Author'>{randomQuote.author}</p>
      </div>
      <div className='Control'>
        <button onClick={getQuote}>Get Quote</button>
      </div>
    </div>
  )
}

export default App;
