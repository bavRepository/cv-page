import './App.css'
import { Header } from './layout/header/Header.tsx'
import { Promo } from './layout/sections/promo/Promo.tsx'
import { Main } from './layout/main/Main.tsx'
import { Projects } from './layout/sections/projects/Projects.tsx'
import { Contacts } from './layout/sections/contacts/Contacts.tsx'
import { Footer } from './layout/footer/Footer.tsx'
import { Offers } from './layout/sections/offer/Offers.tsx'
function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Main />
      <Offers />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
