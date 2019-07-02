// Code your solution in this file!
function distanceFromHqInBlocks(dist) { 
  if  (dist > 42){  
    return dist- 42;
  }else  {
    return 42-dist 
} }


function distanceFromHqInFeet(someValue){
  result = distanceFromHqInBlocks(someValue);
return  result* 264
}
 function distanceTravelledInFeet(start ,finish){
if (start > finish)  { 
  return (start -finish) * 264;
}
else{
   return  (finish - start) * 264; 
}
 }
function calculatesFarePrice(start, finish){
  result = distanceTravelledInFeet(start, finish) 
  if (result > 2500) {
     return 'cannot travel that far';}
  else if (result >400 && result > 2000){
  return  25;
  } else if (result > 400 && result < 2000){
    return (result - 400) * .02;
  }else   {
    return 0;}
  


}