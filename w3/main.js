function determineHouseHoldPts(){} {
 console.log(" Inside the function") ;
}
let carbonFootprintPoints = 0;
const numberInHousehold = 3;

if (numberInHousehold === 1)  {
 carbonFootprintPoints = carbonFootprintPoints + 14;
}else if (numberInHousehold === 2) {
carbonFootprint = carbonFootprintPoint + 12;
} else if(numberInHousehold ===3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  }  else if(numberInHousehold ===4) { 
 carbonFootprintPoints = carbonFootprintPoints + 8;
   } else if(numberInHousehold===5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
   }else if(numberInHousehold===6)  {
    carbonFootprintPoints = carbonFootprintPoints + 4;
   }else if(numberInHousehold > 6)  {
    carbonFootprintPoints = carbonFootprintPoints + 2;
   }
   console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);

let carbonFootprintPoint = 0;
// const numberInHousehold = 3;


  // global scope

  determineHouseHoldPts(3)
  determineHouseHoldPts(4)

 let(areaSpace) = 0
 const(squareFeet) =3

  if(squareFeet=== 1) {
  areaSpace = areaSpace + 10 ;
  } else if(squareFeet=== 2) ;{
    areaSpace = areaSpace + 7 ;
  } else if(squareFeet=== 3) ; {
   areaSpace = areaSpace + 4 ;
  } else if (squareFeet===4) ; {
   areaSpace = areaSpace + 2 ;



