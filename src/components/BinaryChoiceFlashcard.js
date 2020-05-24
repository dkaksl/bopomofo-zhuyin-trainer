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
    var randomCharacterFromDict = getRandomCharacterFromDict(true)
    setRandomCharacter(randomCharacterFromDict)
    setWrongCharacter(
      getRandomCharacterFromDictExcept(randomCharacterFromDict, true)
    )
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
    <div className="binary-flashcard-container">
      <div className="random-character">{randomCharacter.character}</div>
      <div className="guess-button-container">
        <button
          className="guess-button"
          onClick={() =>
            handleButtonPress(heads ? randomCharacter : wrongCharacter)
          }
        >
          {heads ? randomCharacter.reading : wrongCharacter.reading}
        </button>
        <button
          className="guess-button"
          onClick={() =>
            handleButtonPress(!heads ? randomCharacter : wrongCharacter)
          }
        >
          {!heads ? randomCharacter.reading : wrongCharacter.reading}
        </button>
      </div>
    </div>
  )
}

export default BinaryChoiceFlashcard
