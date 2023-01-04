// Print the nymbers of given array and their Sum



let recipeNameElement = prompt('What is the name of the recipe');
let ingredientsNumber = parseInt(prompt('How much ingredients do you need for the recipe'));
let recipeHeading = document.getElementById('recipeTitle');
let listIngredients = document.getElementById('listIngredients');



let arrayIngredients = [];
function printRecipe(recipeNameElement,arrayIngredients,recipeHeading,listIngredients){
    
    
        listIngredients.innerHTML += `<ul>`;

        for(let i=0; i< ingredientsNumber;i++){
            let ingredient = prompt(`Enter the names of the ingredients one by one`);
            arrayIngredients.push(ingredient);
            listIngredients.innerHTML+= `<li>${arrayIngredients[i]}</li>`;
        }
        listIngredients.innerHTML += `</ul>`;
        recipeHeading.innerHTML = `The name of the recipe is: ${recipeNameElement.valueOf()}`;

    // sumElement.innerHTML= `The sum of all numbers in the array is: ${sum} `;

}
printRecipe(recipeNameElement,arrayIngredients,recipeHeading,listIngredients);


