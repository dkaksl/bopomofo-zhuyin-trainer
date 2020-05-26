import React, { useState, useEffect } from 'react'
import HelperModal from './HelperModal'

import {
  getRandomCharacterFromDict,
  getRandomCharacterFromDictExcept,
} from './Dictionary'

import { binaryFlashcardHelp } from './HelperText'

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
  const [modalActive, setModalActive] = useState(false)

  function handleButtonPress(character) {
    if (character === randomCharacter) {
      initializeState()
    }
  }

  return (
    <div>
      <HelperModal
        text={binaryFlashcardHelp}
        active={modalActive}
        setActive={setModalActive}
      />
      <div className="flash-card">
        <button className="modal-button" onClick={() => setModalActive(true)}>
          ？
        </button>
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
      </div>
    </div>
  )
}

export default BinaryChoiceFlashcard
