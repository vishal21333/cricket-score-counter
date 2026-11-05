import { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Cricket Score Counter</h1>
      <h2>Score: {score}</h2>

      <button onClick={() => setScore(score + 1)}>+1</button>
      <button onClick={() => setScore(score + 4)}>+4</button>
      <button onClick={() => setScore(score + 16)}>+16</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}

export default App;