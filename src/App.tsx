import { Header } from './components/Header';
import { ListContent } from './components/ListContent';
import { NewTask } from './components/NewTask';
import "./global.css";

function App() {

  return (
    <div className="App">
      <Header />

      <NewTask />
      <ListContent/>
    </div>
  )
}

export default App
