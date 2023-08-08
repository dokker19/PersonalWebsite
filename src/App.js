import './App.scss';
import { Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/PersonalWebsite"index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
