import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import data from './mock.json';
import Header from './components/header/heder';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState(data)
  return (
    <div className='wrapper'>
      <Router>
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </Router>
    </div>
  );
}

export default App;
