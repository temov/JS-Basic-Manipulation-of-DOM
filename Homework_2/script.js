// Print the nymbers of given array and their Sum

let arrayofFive = [1,5,6,8,11];

let divElement = document.getElementById('list');
let sumElement = document.getElementById('sum');
let math = document.getElementById('mathEq');

function printSum(array,listElement,sumElement,calc){
   let sum =0;
//    calc.innerHTML += `The math equiation of the sum is:(`;
   listElement.innerHTML+= ''; //clear element
   listElement.innerHTML+= '<ul>';
    for(let i =0; i < array.length; i++){
        listElement.innerHTML+= `<li>${array[i]}</li>`;
        // calc.innerHTML+= `${array[i]}+`;
        sum+= array[i];
        calc.innerHTML='The math equiation of the sum is:' +'('+  array[0] + '+' + array[1] + '+' + array[2]  + '+' + array[3]  + '+' + array[4] + ' ' +'='+  sum +')';
        
        
    }
    // calc.innerHTML += `) = ${sum}`;
    listElement.innerHTML+= '</ul>';
    sumElement.innerHTML= `The sum of all numbers in the array is: ${sum} `;

}
printSum(arrayofFive, divElement,sumElement,math);


