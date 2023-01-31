# JavaScript Syntax: Classes

## Class
- JavaScript supports the concept of classes as a syntax for creating objects. Classes specify the shared properties and methods that objects produced from the class will have.

- When an object is created based on the class, the new object is referred to as an instance of the class. New instances are created using the `new` keyword.

## Class Constructor
- Classes can have a `constructor` method. This is a special method that is called when the object is created (instantiated). Constructor methods are usually used to set initial values for the object.

- Syntax to set properties to constructor() inputs:

``` 
constructor(inputOne, inputTwo) {
  this.inputOne = inputOne;
  this.inputTwo = inputTwo;
}
```

- Syntax to create an instance of a class:

```
const instance = new ClassName('arg1', 'arg2');

```

## Class Methods
Properties in objects are separated using commas. This is not the case when using the class syntax. Methods in classes do not have any separators between them.

## extends
JavaScript classes support the concept of inheritance — a child class can extend a parent class. This is accomplished by using the `extends` keyword as part of the class definition.

Child classes have access to all of the instance properties and methods of the parent class. They can add their own properties and methods in addition to those. A child class constructor calls the parent class constructor using the `super()` method.

