import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ViewAll/>}/>
          <Route path='/add' element={<AddRecipe/>}/>
          <Route path='/search' element={<SearchRecipe/>}/>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
