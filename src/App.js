import './App.css'
import { NavProvider } from './NavContext'
import Experience from './experience/Experience'

function App() {

  return (
    <div className="App">
      <NavProvider>
        <Experience/>
      </NavProvider>     
   </div>
  );
}

export default App;
