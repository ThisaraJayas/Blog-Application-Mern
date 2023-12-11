import logo from './logo.svg';
import './App.css';
import Post from './component/Post';
import Header from './component/Header';
import{Route, Routes} from 'react-router-dom'
import Layout from './component/Layout';
import IndexPage from './component/pages/IndexPages';
import LoginPage from './component/pages/Login';
import RegisterPage from './component/pages/Register';
import { UserContextProvider } from './component/UserContext';
import CreatePost from './component/pages/CreatePost';
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/create' element={<CreatePost/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
      

  );
}

export default App;
