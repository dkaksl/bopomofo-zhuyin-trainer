import React from 'react'
import { hot } from 'react-hot-loader'
import Flashcard from './components/Flashcard'
import BinaryChoiceFlashcard from './components/BinaryChoiceFlashcard'

function App() {
  return (
    <main>
      <h1>ㄅㄆㄇㄈ／注音 Trainer</h1>
      <Flashcard />
      <BinaryChoiceFlashcard />
    </main>
  )
}

export default hot(module)(App)
