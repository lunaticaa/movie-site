import { useEffect, useState } from 'react'
import './index.css'
const Card = ({ title }) => {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  }, [hasLiked]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} <br />{count || null}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>{hasLiked ? '❤️' : '🤍'}</button>
    </div>
  )
}
const App = () => {
  return (
    <div className='card-container'>
      <Card title="star wars" />
      <Card title="avatars" />
      <Card title="lion" />

    </div>
  )
}

export default App
