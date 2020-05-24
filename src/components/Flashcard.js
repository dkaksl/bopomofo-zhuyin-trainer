import React, { useState, useEffect } from 'react'

import {
  getRandomCharacterFromDict,
  getRandomCharacterFromDictExcept,
} from './Dictionary'

function Flashcard() {
  useEffect(() => {
    setRandomCharacter(getRandomCharacterFromDict())
  }, [])

  const [randomCharacter, setRandomCharacter] = useState({})

  function handleKeyInput(event) {
    var input = event.target.value
    event.target.value = ''
    if (input === randomCharacter.key) {
      setRandomCharacter(getRandomCharacterFromDictExcept(randomCharacter))
    }
  }

  return (
    <div>
      <label htmlFor="keyInput">
        Input the key corresponding to {randomCharacter.character}:
      </label>
      <input id="keyInput" onChange={(event) => handleKeyInput(event)}></input>
    </div>
  )
}

export default Flashcard
