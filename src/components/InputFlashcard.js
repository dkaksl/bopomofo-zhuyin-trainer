import React, { useState, useEffect, useRef } from 'react'
import HelperModal from './HelperModal'

import {
  getRandomCharacterFromDict,
  getRandomCharacterFromDictExcept,
} from './Dictionary'

import { inputFlashcardHelp } from './HelperText'

function InputFlashcard() {
  useEffect(() => {
    inputRef.current.focus()
    setRandomCharacter(getRandomCharacterFromDict())
  }, [])

  const inputRef = useRef(null)

  const [randomCharacter, setRandomCharacter] = useState({})

  function handleKeyInput(event) {
    var input = event.target.value
    event.target.value = ''
    if (input === randomCharacter.key) {
      setRandomCharacter(getRandomCharacterFromDictExcept(randomCharacter))
    }
  }

  const [modalActive, setModalActive] = useState(false)

  return (
    <div>
      <HelperModal
        text={inputFlashcardHelp}
        active={modalActive}
        setActive={setModalActive}
      />
      <div className="flash-card">
        <button className="modal-button" onClick={() => setModalActive(true)}>
          ？
        </button>
        <div className="input-flashcard-container">
          <div className="random-character">{randomCharacter.character}</div>
          <input
            id="key-input"
            className="key-input"
            ref={inputRef}
            onChange={(event) => handleKeyInput(event)}
          ></input>
        </div>
      </div>
    </div>
  )
}

export default InputFlashcard
