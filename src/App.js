import React from 'react'
import { hot } from 'react-hot-loader'
import Flashcard from './components/Flashcard'

function App() {
  return (
    <main>
      <h1>ㄅㄆㄇㄈ／注音 Trainer</h1>
      <Flashcard />
    </main>
  )
}

export default hot(module)(App)
