import { useState } from 'react'
import './index.css'
const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(true)}>{hasLiked ? 'Liked' : 'Like'}</button>
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
