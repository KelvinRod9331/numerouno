/* Question #1 
Create an object to hold information on your favorite recipe. 
It should have the following properties: title, number of servings, and ingredients (an array).  */

// var dessert_Recipes = {
//     Name: "flan",
//     Serving: 2,
//     Ingredients: [
//         "3/4 cup sugar",
//         "1 package (8 ounces) cream cheese, softened",
//         "5 large eggs",
//         "1 can (14 ounces) sweetened condensed milk",
//         "1 can (12 ounces) evaporated milk",
//         "1 teaspoon vanilla extract"
//     ]
// }

// function favoriteRecipes(recipe){
//     for (var key in recipe) {
//          console.log(key + ": " + recipe[key])
//     }
// }

/* Question 1B */

// var dessert_Recipes = {
//     Name: "flan",
//     Serving: 2,
//     Ingredients: [
//         "3/4 cup sugar",
//         "1 package (8 ounces) cream cheese, softened",
//         "5 large eggs",
//         "1 can (14 ounces) sweetened condensed milk",
//         "1 can (12 ounces) evaporated milk",
//         "1 teaspoon vanilla extract"
//     ]
// }

// function favoriteRecipes(recipe){
//     console.log(`Name: ${recipe.Name}`)
//     console.log(`Serving: ${recipe.Serving}\nIngredients:`)

//     for(var i = 0; i < recipe.Ingredients.length; i++){
//     console.log(recipe.Ingredients[i])
//     }

// }


// favoriteRecipes(dessert_Recipes)


/* Question #2 
Create a function prettyLog that logs a recipe information. 
A recipe is an object that has the following properties: title, number of servings, and ingredients (an array). */



// var dessert_Recipes = {
//     Name: "flan",
//     Serving: 2,
//     Ingredients: [
//         "3/4 cup sugar",
//         "1 package (8 ounces) cream cheese, softened",
//         "5 large eggs",
//         "1 can (14 ounces) sweetened condensed milk",
//         "1 can (12 ounces) evaporated milk",
//         "1 teaspoon vanilla extract"
//     ]
// }

// function prettyLog(recipe) {

//     var recipe_str = recipe.Ingredients.join(' > ')
//     console.log(`Name: ${recipe.Name}`)
//     console.log(`Serving: ${recipe.Serving}`)
//     console.log(`Ingredients: ${recipe_str}`)

// }
// prettyLog(dessert_Recipes)

/* Question #3
Write a function getProps that takes an object as an argument and returns all the keys of that object in an array. */

// var cat = {
//     family: 'Felidae',
//     genus: 'Felis',
//     species: 'Catus' 
//   }


//   function getProps(props){
//       var props_Arr = []
//       for (var key in props) {
//           props_Arr.push(key)
//       }
//       return props_Arr
//   }

//   console.log(getProps(cat))

/* Question #4 
Write a function getObjLength that returns the length of an object. 
For this exercise, the length is the number of properties the object has.*/

// var cat = {
//     family: 'Felidae',
//     genus: 'Felis',
//     species: 'Catus' 
//   }

//   function getObjLength(object){
//       var object_Arr = []

//       for (var key in object) {
//           object_Arr.push(key)
//       }
//       return object_Arr.length
//   }


//   console.log(getObjLength(cat))


/* Question 5 
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it. 
Create a function that iterates over the array and logs the title and director for each film. */

// var films = [

//     {
//         film: "It",
//         Director: 'Andrés Muschietti',
//         watched: true
//     },

//     {
//         film: "SpiderMan: Homecoming",
//         Director: "Jon Watts",
//         watched: true

//     },

//     {
//         film: "The Avengers: infinity war",
//         Director: "Anthony and Joe Russo",
//         watched: false
//     }


// ]


// function showFilms(films){

//     for(var i = 0; i < films.length; i++){
//         console.log(films[i].film + "," + " Director: " + films[i].Director)
//         if(films[i].watched){
//             console.log("You already watched " + films[i].film + "," + " Director: " + films[i].Director + "\n")
//         }else{
//             console.log("You Still Need To Watch " + films[i].film + "," + " Director: " + films[i].Director)
//         }

//     }

// }

// showFilms(films)


/* Question #6

Let's put everything together by building a small todo list program. Here are the steps:

Decide what each todo task will look like: create a javascript object with at minimum the properties description and completed
Create a todos array to hold all todo objects.
Create a function that adds a todo to the todos array.
Create a function that shows all todos.
Create function that marks a todo as completed (based on the index number). */


// var todo = [
//     todoA = {
//         description: "Clean My Room",
//         completed: false

//     },

//     todoB = {
//         description: "Inflate my bike tires",
//         completed: true

//     },

//     todoC = {
//         description: "Go to the Bank",
//         completed: true

//     }


// ]


// function addTodo(todolist) {
//     todo.push(todolist)
//     return todo

// }

// function showTodo(todo) {
//     for (var i = 0; i < todo.length; i++) {
//         console.log('Description: ' + todo[i].description)
//     }
//     console.log('\n')
// }

// function completedTodo(todo) {
//     for (var i = 0; i < todo.length; i++) {
//         console.log('Description: ' + todo[i].description  + ' Completed: ' + todo[i].completed)

//     }
// }

// var todoD = {
//     description: "Go get a new phone",
//     completed: false

// }

// addTodo(todoD)
// showTodo(todo)
// completedTodo(todo)