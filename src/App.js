import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import { Card } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Card style={{ width: "120px" }}>
          <Card.Img src={ logo } />
          <Card.Title>Learn React!!</Card.Title>
          <Card.Subtitle>This is a test react</Card.Subtitle>
        </Card>
      </header>
    </div>
  );
}

export default App;
