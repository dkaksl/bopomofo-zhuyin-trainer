import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import Flashcard from './components/Flashcard'
import BinaryChoiceFlashcard from './components/BinaryChoiceFlashcard'

function App() {
  const [mode, setMode] = useState('binary-flash')

  return (
    <main className="main">
      <nav className="nav-buttons-container">
        <button
          className={`nav-button ${
            mode === 'binary-flash' ? 'nav-button-active' : ''
          }`}
          onClick={() => setMode('binary-flash')}
        >
          Reading Trainer
        </button>
        <button
          className={`nav-button ${
            mode === 'input' ? 'nav-button-active' : ''
          }`}
          onClick={() => setMode('input')}
        >
          Typing Trainer
        </button>
      </nav>
      <h1>ㄅㄆㄇㄈ／注音 Trainer</h1>
      {mode === 'input' ? <Flashcard /> : <BinaryChoiceFlashcard />}
      <footer>
        {new Date().getFullYear()} &copy;{' '}
        <a
          href="https://amani.kilumanga.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amani Kilumanga
        </a>
      </footer>
    </main>
  )
}

export default hot(module)(App)
