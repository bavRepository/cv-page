import { HeaderMenu } from './layout/header/headerMenu/HeaderMenu.tsx'
import { Promo } from './layout/sections/promo/Promo.tsx'
import { Skills } from './layout/sections/skills/Skills.tsx'
import { Projects } from './layout/sections/projects/Projects.tsx'
import { Contacts } from './layout/sections/contacts/Contacts.tsx'
import { Footer } from './layout/footer/Footer.tsx'
import { Offers } from './layout/sections/offer/Offers.tsx'
import { Particle } from './components/particle/Particles.tsx'
import { GoTopBtn } from './components/goTopBtn/GoTopBtn.tsx'
function App() {
  return (
    <div className="App">
      <Particle />
      <HeaderMenu />
      <Promo />
      <Skills />
      <Offers />
      <Projects />
      <Contacts />
      <Footer />
      <GoTopBtn />
    </div>
  )
}

export default App
