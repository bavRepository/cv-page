import './App.css'
import { Header } from './layout/header/Header.tsx'
import { Promo } from './layout/sections/promo/Promo.tsx'
import { Skills } from './layout/sections/skills/Skills.tsx'
function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Skills />
    </div>
  )
}

export default App
