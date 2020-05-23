import React from 'react'
import { hot } from 'react-hot-loader'

const characterDict = {
  '1': 'ㄅ',
  q: 'ㄆ',
  a: 'ㄇ',
  z: 'ㄈ',
  '2': 'ㄉ',
  w: 'ㄊ',
  s: 'ㄋ',
  x: 'ㄌ',
  '3': 'ˇ',
  e: 'ㄍ',
  d: 'ㄎ',
  c: 'ㄏ',
  '4': 'ˋ',
  r: 'ㄐ',
  f: 'ㄑ',
  v: 'ㄒ',
  '5': 'ㄓ',
  t: 'ㄔ',
  g: 'ㄕ',
  b: 'ㄖ',
  '6': 'ˊ',
  y: 'ㄗ',
  h: 'ㄘ',
  n: 'ㄙ',
  '7': '˙',
  u: 'ㄧ',
  j: 'ㄨ',
  m: 'ㄩ',
  '8': 'ㄚ',
  i: 'ㄛ',
  k: 'ㄜ',
  '9': 'ㄞ',
  o: 'ㄟ',
  l: 'ㄠ',
  '.': 'ㄡ',
  '0': 'ㄢ',
  p: 'ㄣ',
  ';': 'ㄤ',
  '/': 'ㄥ',
  '-': 'ㄦ',
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      randomCharacter: '',
    }

    this.updateRandomCharacter = this.updateRandomCharacter.bind(this)
  }

  getRandomCharacterFromDict() {
    var keys = Object.keys(characterDict)
    return characterDict[keys[(keys.length * Math.random()) << 0]]
  }

  updateRandomCharacter() {
    this.setState({ randomCharacter: this.getRandomCharacterFromDict() })
  }

  render() {
    return (
      <main>
        <h1>ㄅㄆㄇㄈ/注音 Trainer</h1>
        <button onClick={this.updateRandomCharacter}>
          Get random character
        </button>
        <p>{this.state.randomCharacter}</p>
      </main>
    )
  }
}

export default hot(module)(App)
