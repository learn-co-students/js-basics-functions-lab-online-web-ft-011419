// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
  return distanceFromHqInFeet(end) - distanceFromHqInFeet(start)
}

function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) < 400) {
    return 0
  }
  else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000) {
    return (distanceTravelledInFeet(start, end) - 400) * .02
  }
  else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) < 2500) {
    return 25
  }
  else if (distanceTravelledInFeet(start, end) > 2500) {
    return 'cannot travel that far'
  }
}