// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance < 2000) {
    return price = (distance - 400) * .02;
  } else if (distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
