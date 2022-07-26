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
    //create an if statement that checks if mealToCheck is a string
    if (typeof mealToCheck === 'string') {
      // If it is, return the object’s _meal property with mealToCheck assigned as the value
      return this._meal = mealToCheck;
  }
};


