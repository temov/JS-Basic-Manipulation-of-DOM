// Print the nymbers of given array and their Sum

let arrayofFive = [1,5,6,8,11];

let divElement = document.getElementById('list');
let sumElement = document.getElementById('sum');
let math = document.getElementById('mathEq');

function printSum(array,listElement,sumElement,calc){
   let sum =0;
   listElement.innerHTML+= ''; //clear element
   listElement.innerHTML+= '<ul>';
    for(elem of array){
        listElement.innerHTML+= `<li>${elem}</li>`;
        calc.innerHTML+=`${elem}`;
        sum+= elem;
    }
    listElement.innerHTML+= '</ul>';
    sumElement.innerHTML= `The sum of all numbers in the array is: ${sum} )`;

}
printSum(arrayofFive, divElement,sumElement,math);


