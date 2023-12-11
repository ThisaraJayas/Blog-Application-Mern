import logo from './logo.svg';
import './App.css';
import Post from './component/Post';
import Header from './component/Header';
import{Route, Routes} from 'react-router-dom'
import Layout from './component/Layout';
import IndexPage from './component/IndexPages';
import LoginPage from './component/Login';
import RegisterPage from './component/Register';
import { UserContextProvider } from './component/UserContext';
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
      

  );
}

export default App;
