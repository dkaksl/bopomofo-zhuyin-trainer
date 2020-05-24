import React, { useState, useEffect, useRef } from 'react'

import {
  getRandomCharacterFromDict,
  getRandomCharacterFromDictExcept,
} from './Dictionary'

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

  return (
    <div className="input-flashcard-container">
      <div className="random-character">{randomCharacter.character}</div>
      <input
        id="key-input"
        className="key-input"
        ref={inputRef}
        onChange={(event) => handleKeyInput(event)}
      ></input>
    </div>
  )
}

export default InputFlashcard
