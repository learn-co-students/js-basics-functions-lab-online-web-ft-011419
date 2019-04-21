// Code your solution in this file!


// returns the distance between two set points
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber- 42;
  } else {
    return 42 - blockNumber;
  }
}

// returns the distance between two points in feet given the block is 264 feet
function distanceFromHqInFeet(feetNumber) {
  return distanceFromHqInBlocks(feetNumber) * 264;
}

// returns the distance traveled from start destination to the end destination in feet
function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
