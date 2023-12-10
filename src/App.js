import logo from './logo.svg';
import './App.css';
import Post from './component/Post';
import Header from './component/Header';
import{Route, Routes} from 'react-router-dom'
import Layout from './component/Layout';
import IndexPage from './component/IndexPages';
function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='/login' element={<div>Login</div>}/>
        </Route>
      </Routes>

  );
}

export default App;
