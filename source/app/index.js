
import document from 'document' // eslint-disable-line import/no-unresolved
import detectMove from '../common/detectMove'
import randomBetween from '../common/math_utils'

const resultLabel = document.getElementById('result')
const selectedDieLabel = document.getElementById('selected-die')

const diceType = [4, 6, 8, 10, 12, 20, 100]
let selectedDieIndex = 0

const dice = document.getElementById('dice')

const updateSelectedDieIndex = () => {
  selectedDieIndex += 1
  if (selectedDieIndex > diceType.length - 1) {
    selectedDieIndex = 0
  }
}

const selectDie = () => {
  updateSelectedDieIndex()
  const nextDie = diceType[selectedDieIndex]
  dice.href = `images/d${nextDie}.png`
  selectedDieLabel.text = `d${nextDie}`
}

const hideResultLabel = () => {
  resultLabel.text = ''
  dice.style.visibility = 'visible'
}

const rollDie = () => {
  const diceResult = randomBetween(1, diceType[selectedDieIndex])
  dice.style.visibility = 'hidden'
  resultLabel.text = diceResult
}

detectMove(dice, {
  swipeUp: selectDie,
  swipeDown: selectDie,
  swipeLeft: rollDie,
  swipeRight: rollDie,
})

detectMove(resultLabel, {
  swipeUp: hideResultLabel,
  swipeDown: hideResultLabel,
  swipeLeft: hideResultLabel,
  swipeRight: hideResultLabel,
})
