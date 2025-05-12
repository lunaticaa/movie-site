import { useState } from 'react'
import './index.css'
const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(true)}>Like</button>
    </div>
  )
}
const App = () => {
  const [hasLiked, setHasLiked] = useState(initialState: 'false')
  return (
    <div className='card-container'>
      <Card title="star wars" />
      <Card title="avatars" />
      <Card title="lion" />

    </div>
  )
}

export default App
