
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Apropos from './Pages/Apropos';
import Layout from './Pages/Layout';
import SingleBlog from './Pages/SingleBlog';
import SingleProduct from './Pages/SingleProduct';
import Store from './Pages/Store';
import Blog from './Pages/blog';
import Contact from './Pages/contact';
import Home from './Pages/home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Layout/>}>
     <Route index element={ <Home/>} />
     <Route path='Produits' element={<Store/> } />
     <Route path='product/:id' element={ <SingleProduct/>} />
     <Route path='Apropos' element={ <Apropos/>} />
     <Route path='contact' element={ <Contact/>} />
     <Route path='blogs' element={ <Blog/>} />
    <Route path='blog/:id' element={ <SingleBlog/>} />
</Route></Routes></BrowserRouter>
  );
}

export default App;
