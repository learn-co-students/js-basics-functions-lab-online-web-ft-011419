// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
}
function distanceFromHqInFeet(distance) {
    return 264 * distanceFromHqInBlocks(distance);
}
function distanceTravelledInFeet(startBlock, endBlock) {
return 264 * Math.abs(endBlock - startBlock);
}
function calculatesFarePrice(start, destination) {
  let ride = distanceTravelledInFeet(start, destination)

  if(ride > 2500){
      return "cannot travel that far";
    } else if(ride > 2000){
      return 25;
    } else if(ride < 400) {
      return 0;
    } else{
      let chargeableDistance = ride - 400;
      return 0.02 * chargeableDistance;
    }
  }
