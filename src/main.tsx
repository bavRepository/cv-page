import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/Global.styled.ts'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
