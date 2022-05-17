import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Techasthra from './components/Techasthra';





function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes >
          <Route path='/techasthra' element={<Techasthra/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
