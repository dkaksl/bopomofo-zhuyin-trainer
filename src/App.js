import React, { useState } from 'react'
import { hot } from 'react-hot-loader'

import { characterDict } from './Dictionary'

/*
 '2': 'ㄉ',
 'w': 'ㄊ',
 's': 'ㄋ',
 'x': 'ㄌ',
 '3': 'ˇ',
 'e': 'ㄍ',
 'd': 'ㄎ',
 'c': 'ㄏ',
 '4': 'ˋ',
 'r': 'ㄐ',
 'f': 'ㄑ',
 'v': 'ㄒ',
 '5': 'ㄓ',
 't': 'ㄔ',
 'g': 'ㄕ',
 'b': 'ㄖ',
 '6': 'ˊ',
 'y': 'ㄗ',
 'h': 'ㄘ',
 'n': 'ㄙ',
 '7': '˙',
 'u': 'ㄧ',
 'j': 'ㄨ',
 'm': 'ㄩ',
 '8': 'ㄚ',
 'i': 'ㄛ',
 'k': 'ㄜ',
 '9': 'ㄞ',
 'o': 'ㄟ',
 'l': 'ㄠ',
 '.': 'ㄡ',
 '0': 'ㄢ',
 'p': 'ㄣ',
 ';': 'ㄤ',
 '/': 'ㄥ',
 '-': 'ㄦ'
 */

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
    </main>
  )
}

export default hot(module)(App)
