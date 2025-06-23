import './App.css'
import { Header } from './layout/header/Header.tsx'
import { Promo } from './layout/sections/promo/Promo.tsx'
import { Skills } from './layout/sections/skills/Skills.tsx'
import { Offer } from './layout/sections/offer/Offer.tsx'
function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Skills />
      <Offer />
    </div>
  )
}

export default App
