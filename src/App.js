import React from 'react'
import { hot } from 'react-hot-loader'
import Flashcard from './components/Flashcard'
import BinaryChoiceFlashcard from './components/BinaryChoiceFlashcard'

function App() {
  return (
    <main className="main">
      <h1>ㄅㄆㄇㄈ／注音 Trainer</h1>
      <Flashcard />
      <BinaryChoiceFlashcard />
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
