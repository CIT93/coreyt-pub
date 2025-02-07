const CFPDATA = [] ;

function determineHouseSizePts(size) {
let carbonFootprintPoints = 0
  console.log("inside block scope");
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints =  10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
     houseSizePoints=  4;
  } else if (size === " apt") {
    houseSizePoints =  2;
  }
  
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  console.log("inside block scope");
  let householdPoints = 0;
  if (numberInHousehold === 1) {
    householdPoints = 14
  } else if (numberInHousehold === 2) {
    householdPoints = 12
  } else if (numberInHousehold === 3) {
    householdPoints = 10
  } else if (numberInHousehold === 4) {
    householdPoints = 8
  } else if (numberInHousehold === 5) {
    householdPoints = 6
  } else if (numberInHousehold >= 6) {
    householdPoints = 4
  } else if(numberInHousehold > 6){
    householdPoints = 2
  }
   return householdPoints
    }

    
function start(houseHoldMembers, houseSize) {
 const householdPTS = determineHouseHoldPts(houseHoldMembers);
 const houseSizePTS= determineHouseHoldPts(houseSize)
 const total =householdPTS + houseSizePTS
 CFPDATA.push([houseHoldMembers, houseSize, householdPTS, houseSizePTS, total]);

}
function displayOutput(){
}

 
start(5,"apt");
start(4, "large");
start(3, "medium");

displayOutput()

// 4 in the Housesize Points plus 7 in the householdPts. I multiplied 4 times 7
 start(6, "apt")
 start(5) "large
 start(4 "medium")
// Before the code

//Arrays

const MyArr =[1, 2, 3, 4, 5];
console.log(MyArr);
console.log(MyArr[1]);
console.log(MyArr[4]);
console.log(MyArr[0] = 10)
console.log(MyArr.push(1))

// Honestly I kinda do, surprisingly