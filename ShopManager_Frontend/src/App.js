import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import NewArticle from './components/NewArticle';
import UpdateArticle from './components/UpdateArticle';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [route,setRoute]= useState();

  return (
    <BrowserRouter>
      <nav className='navbar border border-primary p-3 m-3'>
        <ul className='nav na-pills'>
          <li>
          <Link onClick={()=>setRoute("Article")}
           className='btn btn-outline-primary m-2 p-2' to={'/Article' }>Article
          </Link>
          </li>
          <li>
          <Link  onClick={()=>setRoute("NewArticle")}
           className='btn btn-outline-primary m-2 p-2'  to={'/NewArticle' }>New Article
          </Link>
          </li>
          <li>
          <Link  onClick={()=>setRoute("UpdateArticle")}
           className='btn btn-outline-primary m-2 p-2'  to={'/UpdateArticle' }>update article
          </Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path='/Article' element={<Article/>}></Route>
        <Route path='/NewArticle' element={<NewArticle/>}></Route>
        <Route path='/UpdateArticle' element={<UpdateArticle/>} ></Route>
      </Routes>
    </BrowserRouter>
      
  
  );
}

export default App;
