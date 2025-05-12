import './index.css'

const Card = ({ title }) => {
  return (
    <div style={{
      border: '1px solid #4b5362',
      
    }}>
      <h2>{title}</h2>
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
