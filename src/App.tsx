import './App.css'
import { Header } from './layout/header/Header.tsx'
import { Promo } from './layout/promo/Promo.tsx'
import { Main } from './layout/Main/Main.tsx'
function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Main />
    </div>
  )
}

export default App
