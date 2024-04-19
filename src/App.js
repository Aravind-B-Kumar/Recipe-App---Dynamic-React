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
        <Route>
          <Routes path="/" element={<ViewAll/>}/>
          <Routes path="/add" element={<AddRecipe/>}/>
          <Routes path="/seach" element={<SearchRecipe/>}/>
        </Route>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
