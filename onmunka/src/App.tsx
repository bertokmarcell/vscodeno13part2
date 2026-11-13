import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Airlines from './components/Airlines'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        fate store
      </header>
      <article>
        <Airlines/>
      </article>
      <footer>
        bertok maximillian
      </footer>
    </>
  )
}

export default App
