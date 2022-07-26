// Key Concepts: JavaScript Objects
  // Understanding how Objects work on JavaScript
  // How to create Objects 
  // How to access Objects' Properties 
  // Bracket Notation
  // Property Assignments
  // Use of Getter and Setters Methods

// Goal: Add functionability to a website by creating a function that allows a restaurant to 
// set a meal and price each morning for their Special of the Day.

//Create a Menu Object

const menu = { 
  _meal: '',
  _price: 0,
  
  //Add Setter Methods
  //Setter will type check the values being assigned 

  // Create a meal setter method with mealToCheck as a parameter
  set meal(mealToCheck){ 
    // create an if statement that checks if mealToCheck is a string
    if (typeof mealToCheck === 'string') {
      // If it is, return the object’s _meal property with mealToCheck assigned as the value
      return this._meal = mealToCheck;
    }
  },
  
  // Create a price setter method with priceToCheck as a paramenter  
  set price(priceToCheck){
    // Create an if statement that checks if priceToCheck is a number
    if (typeof priceToCheck === 'number') {
      // If it is, return the object’s _price property with priceToCheck assigned as the value
      return this._price = priceToCheck;
    }
  },
  
  //Add  Getter Method
  get todaysSpecial(){
    // Create an if…else statement to check if _meal and _price values exist (or are truthy values). 
    if (this._meal && this._price){
      // If so, return a string telling potential website visitors what Today’s Special is.
      return "Today's Special is " + `${this._meal}` + ' for $' + `${this._price}` + '!'
    }else{
      // If _meal and _price values do not exist (or are falsy) return the string 'Meal or price was not set correctly!'
      return 'Meal or price was not set correctly!
    }
  },
      
};

//Setting the values of _meal and _price using the setters
menu.meal = 'Tacos de Asada';
menu.price = 3;
// console.log(menu);

//Today's Special
console.log(menu.todaysSpecial);




