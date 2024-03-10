import ButtonT from './components/templates/ButtonT'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Objet from './components/templates/boubou'
import ProgressBarT from './components/templates/ProgressBarT'

function App() {

  return (
    <BrowserRouter>
    
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<HomePage/>} />
        <Route path='/faq' element={<HomePage/>} />
        <Route path='/portfolio' element={<HomePage/>} />
        <Route path='/services' element={<HomePage/>} />
        <Route path='/contact' element={<HomePage/>} />

      </Routes>

      <ButtonT content="Yoyo"/>
      <ProgressBarT bar_w={80} barCont_w={40} barCont_h={30}/>
      
      <ButtonT content="bouboubouboubou"/>
      <ProgressBarT bar_w={20} barCont_w={40} barCont_h={30000}/>
    
    </BrowserRouter>

      
  )
}

export default App 