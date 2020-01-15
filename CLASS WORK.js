function squareNumber(number){
    const square = number * number;
    console.log(`the result of squaring the number ${number} is ${square}`);   
    return square;
   }
   squareNumber(3);
   
   function halfNumber(number){
       const half = number / 2;
       console.log(`Half of a number ${number} is ${half}`);
       return half;
   }

   halfNumber(5);
   
   
   function percentOf(numberOne, numberTwo){
       const percent = (numberOne * 100) /numberTwo;
       console.log(`${numberOne} is ${percent}% of ${numberTwo}`);
       return percent;
             }
   
   percentOf(2,4);

   function areaOf(number){
       const area =((22/7)*(number * number)).toFixed(2);
       console.log(`the area of a circle with radius ${number} is ${area}`);
       return area;
   }
  areaOf(2); 
   
function calculateNumber(number){
   const calculate = halfNumber(number);
    const square =squareNumber(calculate);
    const area = areaOf(square);
   const percent = percentOf(square, square);

}
console.log(calculateNumber(5));
