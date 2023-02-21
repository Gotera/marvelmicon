import './App.scss';
import { Card } from './components/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e8abfc4d7ead0b8b0362ac59e7b75afb&hash=88038bcab9713de5733969f620c1fa31')
  const [item, setItem] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url)
      setItem(res.data.data.results)
    }
    fetch()
  }, [url])

  return (
    <div className="App">
      <div className="content">
        {
          (!item) ? <p>Not Found</p> : <Card data={item} />
        }
      </div>
    </div>
  );
}

export default App;
