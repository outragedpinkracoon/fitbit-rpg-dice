const detectMove = (element, callbacks) => {
  let y,x = 0

  element.onmousedown = function(evt) {
    y = evt.screenY
    x = evt.screenX
  }
  
  element.onmouseup = function(evt) {
    let yMove = evt.screenY-y
    let xMove = evt.screenX-x
    
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