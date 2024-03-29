import ButtonT from './components/templates/ButtonT'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import FaqPage from './pages/FaqPage'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import Menu from './components/Menu'


function App() {

  return (
    <div className='bg-[var(--color-primary)]'>
      <BrowserRouter>
    
        <Menu/>

        <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/faq' element={<FaqPage/>} />
          <Route path='/portfolio' element={<PortfolioPage/>} />
          <Route path='/services' element={<ServicesPage/>} />
          <Route path='/contact' element={<ContactPage/>} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App 