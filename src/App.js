import React, { useState } from 'react'
import { hot } from 'react-hot-loader'

import { characterDict } from './Dictionary'

function getRandomCharacterFromDict() {
  return characterDict[Math.floor(Math.random() * characterDict.length)]
}

function App() {
  const [randomCharacter, setRandomCharacter] = useState({})

  return (
    <main>
      <h1>ㄅㄆㄇㄈ/注音 Trainer</h1>
      <button onClick={() => setRandomCharacter(getRandomCharacterFromDict())}>
        Get random character
      </button>
      <p>Random character: {randomCharacter.character}</p>
      <p>Reading: {randomCharacter.reading}</p>
      <p>Key: {randomCharacter.key}</p>
    </main>
  )
}

export default hot(module)(App)
