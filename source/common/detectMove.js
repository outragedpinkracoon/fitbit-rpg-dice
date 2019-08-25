/* eslint no-param-reassign: 0 */ // --> OFF
/* eslint func-names: 0 */ // --> OFF
const detectMove = (element, callbacks) => {
  let y; let x = 0

  element.onmousedown = function (evt) {
    y = evt.screenY
    x = evt.screenX
  }

  element.onmouseup = function (evt) {
    const yMove = evt.screenY - y
    const xMove = evt.screenX - x

    const tolerance = 40
    if (yMove < -tolerance) {
      callbacks.swipeUp()
    }

    if (yMove > tolerance) {
      callbacks.swipeDown()
    }

    if (xMove < -tolerance) {
      callbacks.swipeLeft()
    }

    if (xMove > tolerance) {
      callbacks.swipeRight()
    }
  }
}

export default detectMove
