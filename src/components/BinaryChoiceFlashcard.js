import React, { useState, useEffect } from 'react'

import {
  getRandomCharacterFromDict,
  getRandomCharacterFromDictExcept,
} from './Dictionary'

function BinaryChoiceFlashcard() {
  useEffect(() => {
    initializeState()
  }, [])

  function initializeState() {
    setRandomCharacter(getRandomCharacterFromDict())
    setWrongCharacter(getRandomCharacterFromDictExcept(randomCharacter))
    setHeads(Math.floor(Math.random() * 2) == 0)
  }

  const [randomCharacter, setRandomCharacter] = useState({})
  const [wrongCharacter, setWrongCharacter] = useState({})
  const [heads, setHeads] = useState(false)

  function handleButtonPress(character) {
    if (character === randomCharacter) {
      initializeState()
    }
  }

  return (
    <div>
      <div>{randomCharacter.character}</div>
      <button
        onClick={() =>
          handleButtonPress(heads ? randomCharacter : wrongCharacter)
        }
      >
        {heads ? randomCharacter.reading : wrongCharacter.reading}
      </button>
      <button
        onClick={() =>
          handleButtonPress(!heads ? randomCharacter : wrongCharacter)
        }
      >
        {!heads ? randomCharacter.reading : wrongCharacter.reading}
      </button>
    </div>
  )
}

export default BinaryChoiceFlashcard
