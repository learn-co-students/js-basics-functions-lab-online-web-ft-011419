function distanceFromHqInBlocks (blocks) {
  //returns the number of blocks given a value
  return blocks > 42 ? blocks - 42 : 42 - blocks;
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, end) {
  return start < end ? (end - start) * 264 : (start - end) * 264;
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)

  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance < 2000) {

    return (distance - 400) * .02
  } else if (distance < 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
