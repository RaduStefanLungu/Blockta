
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import FaqPage from './pages/FaqPage'

function App() {

  return (
    <BrowserRouter>
    
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<HomePage/>} />
        <Route path='/faq' element={<FaqPage/>} />
        <Route path='/portfolio' element={<HomePage/>} />
        <Route path='/services' element={<HomePage/>} />
        <Route path='/contact' element={<HomePage/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App 