export const characterDict = [
  {
    id: 1,
    character: 'ㄅ',
    reading: 'b',
    key: '1',
  },
  {
    id: 2,
    character: 'ㄆ',
    reading: 'p',
    key: 'q',
  },
  {
    id: 3,
    character: 'ㄇ',
    reading: 'm',
    key: 'a',
  },
  {
    id: 4,
    character: 'ㄈ',
    reading: 'f',
    key: 'z',
  },
  {
    id: 5,
    character: 'ㄉ',
    reading: 'd',
    key: '2',
  },
  {
    id: 6,
    character: 'ㄊ',
    reading: 't',
    key: 'w',
  },
  {
    id: 7,
    character: 'ㄋ',
    reading: 'n',
    key: 's',
  },
  {
    id: 8,
    character: 'ㄌ',
    reading: 'l',
    key: 'x',
  },
  {
    id: 9,
    character: 'ˇ',
    reading: '',
    key: '3',
  },
  {
    id: 10,
    character: 'ㄍ',
    reading: 'g',
    key: 'e',
  },
  {
    id: 11,
    character: 'ㄎ',
    reading: 'k',
    key: 'd',
  },
  {
    id: 12,
    character: 'ㄏ',
    reading: 'h',
    key: 'c',
  },
  {
    id: 13,
    character: 'ˋ',
    reading: '',
    key: '4',
  },
  {
    id: 14,
    character: 'ㄐ',
    reading: 'j',
    key: 'r',
  },
  {
    id: 15,
    character: 'ㄑ',
    reading: 'q',
    key: 'f',
  },
  {
    id: 16,
    character: 'ㄒ',
    reading: 'x',
    key: 'v',
  },
  {
    id: 17,
    character: 'ㄓ',
    reading: 'zh',
    key: '5',
  },
  {
    id: 18,
    character: 'ㄔ',
    reading: 'ch',
    key: 't',
  },
  {
    id: 19,
    character: 'ㄕ',
    reading: 'sh',
    key: 'g',
  },
  {
    id: 20,
    character: 'ㄖ',
    reading: 'r',
    key: 'b',
  },
  {
    id: 21,
    character: 'ˊ',
    reading: '',
    key: '6',
  },
  {
    id: 22,
    character: 'ㄗ',
    reading: 'z',
    key: 'y',
  },
  {
    id: 23,
    character: 'ㄘ',
    reading: 'c',
    key: 'h',
  },
  {
    id: 24,
    character: 'ㄙ',
    reading: 's',
    key: 'n',
  },
  {
    id: 25,
    character: '˙',
    reading: '',
    key: '7',
  },
  {
    id: 26,
    character: 'ㄧ',
    reading: 'y',
    key: 'u',
  },
  {
    id: 27,
    character: 'ㄨ',
    reading: 'w',
    key: 'j',
  },
  {
    id: 28,
    character: 'ㄩ',
    reading: 'yu',
    key: 'm',
  },
  {
    id: 29,
    character: 'ㄚ',
    reading: 'a',
    key: '8',
  },
  {
    id: 30,
    character: 'ㄛ',
    reading: 'o',
    key: 'i',
  },
  {
    id: 31,
    character: 'ㄜ',
    reading: 'e',
    key: 'k',
  },
  {
    id: 32,
    character: 'ㄝ',
    reading: 'e^',
    key: ',',
  },
  {
    id: 33,
    character: 'ㄞ',
    reading: 'ai',
    key: '9',
  },
  {
    id: 34,
    character: 'ㄟ',
    reading: 'ei',
    key: 'o',
  },
  {
    id: 35,
    character: 'ㄠ',
    reading: 'au',
    key: 'l',
  },
  {
    id: 36,
    character: 'ㄡ',
    reading: 'ou',
    key: '.',
  },
  {
    id: 37,
    character: 'ㄢ',
    reading: 'an',
    key: '0',
  },
  {
    id: 38,
    character: 'ㄣ',
    reading: 'en',
    key: 'p',
  },
  {
    id: 39,
    character: 'ㄤ',
    reading: 'ang',
    key: ';',
  },
  {
    id: 40,
    character: 'ㄥ',
    reading: 'eng',
    key: '/',
  },
  {
    id: 41,
    character: 'ㄦ',
    reading: 'er',
    key: '-',
  },
]

export function getRandomCharacterFromDict() {
  return characterDict[Math.floor(Math.random() * characterDict.length)]
}

export function getRandomCharacterFromDictExcept(except) {
  var randomCharacterFromDict = getRandomCharacterFromDict()
  if (randomCharacterFromDict === except) {
    randomCharacterFromDict = getRandomCharacterFromDictExcept(except)
  }
  return randomCharacterFromDict
}
