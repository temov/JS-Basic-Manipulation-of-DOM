// Print the nymbers of given array and their Sum



let recipeNameElement = prompt('What is the name of the recipe');
let ingredientsNumber = parseInt(prompt('How much ingredients do we need for the recipe'));
let ingredientFirst = prompt('Enter the name of the first ingredient');
let ingredientSecond = prompt('Enter the name of the second ingredient');
let ingredientThird = prompt('Enter the name of the third ingredient');
let ingredientFourth = prompt('Enter the name of the fourth ingredient');

let recipeHeading = document.getElementById('recipeTitle');
let listIngredients = document.getElementById('listIngredients');


let arrayIngredients = [ingredientFirst,ingredientSecond,ingredientThird,ingredientFourth];

function printRecipe(recipeNameElement,arrayIngredients,recipeHeading,listIngredients){
    
        console.log(arrayIngredients);
    
        listIngredients.innerHTML += `<ul>`;

        for(let i=0; i< arrayIngredients.length;i++){
            listIngredients.innerHTML+= `<li>${arrayIngredients[i]}</li>`;
        }
        listIngredients.innerHTML += `</ul>`;
        recipeHeading.innerHTML = `The name of the recipe is: ${recipeNameElement.valueOf()}`;

    // sumElement.innerHTML= `The sum of all numbers in the array is: ${sum} `;

}
printRecipe(recipeNameElement,arrayIngredients,recipeHeading,listIngredients);


