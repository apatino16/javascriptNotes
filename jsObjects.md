# Objects
### Objects
- An object is a **built-in data type for storing key-value pairs**. 
- Data inside objects are **unordered**, and the values can be of **any type**.

### Properties and values of a JavaScript object
- **Properties** are the object's key-value pairs. 
- A JavaScript **object literal** is enclosed with curly braces `{ }`. Values are mapped to keys in the object with a colon `:`, and the key-value pairs are separated by commas. All the keys are unique, but values are not.

#### Creating Object Literals:
- Use curly braces, `{ }`, to designate an object literal
- Fill an object with unordered data. This data is organized into key-value pairs
- write the key’s name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma `,`.

```
let objectName = {
  'Property Name': 'Property Value',
  propName: 'Prop Value'};
```

### Restrictions in Naming Properties
- JavaScript object key names must adhere to some restrictions to be valid. Key names must either be **strings** or **valid identifiers** or **variable names** (i.e. special characters such as - are not allowed in key names that are not strings).

### Accessing Properties
#### Dot Notation
- Dot Notation for Accessing Object Properties
- Properties of a JavaScript object can be accessed using the dot notation in this manner: `object.propertyName`. Nested properties of an object can be accessed by chaining key names in the correct order.
- Example of a variable with a value of the object’s property:
`const variableName = objectName.propertyName;`

#### Accessing non-existent JavaScript properties
- When trying to access a JavaScript object property that has not been defined yet, the value of **undefined** will be returned by default.

#### Bracket Notation 
- Bracket Notation for Accessing Object Properties 
- To use bracket notation to access an object’s property, we pass in the property name (key) as a string.
> Note: use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, the code would throw an error.
`let variableName = objectName['propertyName']`

### Property Assignment 
- If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
- If there was no property with that name, a new property will be added to the object.

### JavaScript Objects are Mutable
- JavaScript objects are mutable, meaning their contents can be changed, even when they are declared as const. New properties can be added, and existing property values can be changed or deleted.
- It is the reference to the object, bound to the variable, that cannot be changed.

### Delete operator
- Once an object is created in JavaScript, it is possible to remove properties from the object using the delete operator. The delete keyword **deletes both the value of the property and the property itself from the object**. The delete operator only works on properties, not on variables or functions

### JavaScript Object Methods
- A **method** is a property with a fuctions as it's value. 
- Methods may be defined using anonymous arrow function expressions, or with shorthand method syntax.
- Object methods are invoked with the syntax: 
`objectName.methodName(arguments)`

```
let objectName = {
             methodName() {
                        console.log('The methodName method was invoked!')
              }
      };
```

### javascript passing objects as arguments
- When JavaScript objects are passed as arguments to functions or methods, they are passed by reference, not by value. This means that the object itself (not a copy) is accessible and mutable (can be changed) inside that function.

- Example on how to write a function that has an object as a parameter and sets that object’s property to a new property value.
```
let functionName = objectParam => {
  objectParam['Property Name'] = 'New Property Value';
};
```

or 

```
let functionName = objectParam => {
  objectParam.propertyName = 'A Property Value';
};
```

### JavaScript for...in loop
- The JavaScript for...in loop can be used to iterate over the keys of an object. In each iteration, one of the properties from the object is assigned to the variable of that loop.
```
for (let variableName in outerObject.innerObject) {
  console.log(`${variableName}: ${outerObject.innerObject[variableName].propertyName}`)
};
```

## `This`
### `this` Keyword
- The object that a method belongs to is called **the calling object**.
- The reserved keyword `this` refers to a method’s calling object, and it can be used to access properties belonging to that object.
- Methods do not automatically have access to other internal properties of the calling object.
- The value of `this` depends on where the`this` is being accessed from.


### javascript function this
- Every JavaScript function or method has a this context. For a function defined inside of an object, this will refer to that object itself. For a function defined outside of an object, this will refer to the global object (window in a browser, global in Node.js).

### JavaScript Arrow Function this Scope
- JavaScript arrow functions do not have their own `this` context, but use the `this` of the surrounding lexical context. Thus, they are generally a poor choice for writing object methods.
- We cannot use arrow functions as methods if we want to access other internal properties.
> Note: avoid using arrow functions when using this in a method!

## Privacy
### JavaScript getters and setters restricted
- Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. Privacy in objects, is the idea that **only certain properties should be mutable or able to change in value**.
- JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
- JavaScript object properties are not private or protected. Since JavaScript objects are passed by reference, there is no way to fully prevent incorrect interactions with object properties.
- One way to implement more restricted interactions with object properties is to use getter and setter methods.
- One common convention is to place an underscore `_` before the name of a property to mean that the property should not be altered. Typically, the internal value is stored as a property with an identifier that matches the getter and setter method names, but begins with an underscore (_).

### getters and setters intercept property access
- JavaScript getter and setter methods are helpful in part because they offer a way to intercept property access and assignment, and allow for additional actions to be performed before these changes go into effect.

#### Getters
- **Getters ** are methods that get and return the internal properties of an object. 
- Getters can perform an action on the data when getting a property.
- Getters can return different values using conditionals.
- In a getter, we can access the properties of the calling object using this.
- The functionality of our code is easier for other developers to understand.
> Note: Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. 
> To call a getter method, it looks syntactically like accessing a property. You do not need to include a set of parentheses.

#### Setters
- setter methods reassign values of existing properties within an object. 
> Note: All setters need at least one parameter

### JavaScript Factory Functions
- A factory function is a JavaScript **function that returns an object**. 
- A factory functions often accept parameters in order to customize the returned object.
- A factory function can be reused to make multiple object instances.

### Object Destructuring
- There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.

#### shorthand property name syntax for object creation
##### Property Value Shorthand
- The shorthand property name syntax in JavaScript allows creating objects without explicitly specifying the property names (ie. explicitly declaring the value after the key). In this process, an object is created where the property names of that object match variables which already exist in that context. Shorthand property names populate an object with a key matching the identifier and a value matching the identifier’s value.
- There are a few instances where the property’s key and value share the same name, you can remove the key : portion to destructure the object.

#### JavaScript destructuring assignment shorthand syntax
##### Destructured Assignment
- The JavaScript destructuring assignment is a shorthand syntax that allows object properties to be extracted into specific variable values.
- It uses a pair of curly braces ({}) with property names on the left-hand side of an assignment to extract values from objects. The number of variables can be less than the total properties of an object.
`const { propertyName } = obj;`

### Built-in Object Methods
`Object.assign( )`
-
- The `Object.assign( )` method only copies enumerable and own properties from a source object to a target object. It uses `[[Get]]` on the source and `[[Set]]` on the target, so it will invoke getters and setters. Therefore it assigns properties, versus copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain getters.
- Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
- Syntax: `Object.assign(target, ...sources)`
- Parameter: The **target** object — what to apply the sources' properties to, which is returned after it is modified. The **source** object(s) — objects containing the properties you want to apply.
- Return Value: The target object.
> Note: `Object.assign( )` does not throw on null or undefined sources.

`Object.create( )`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.defineProperties()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.defineProperty()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.entries( )`
- 
- `Object.entries( )` returns an **array** whose elements are arrays corresponding to the **enumerable string-keyed property [key, value] pairs** found directly upon object. The ordering of the properties is the same as that given by looping over the property values of the object manually.
- Syntax: `Object.entries(obj)`
- Parameter: The object whose own enumerable string-keyed property [key, value] pairs are to be returned.
- Return Value: An array of the given object's own enumerable string-keyed property [key, value] pairs.

`Object.freeze()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.fromEntries()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.getOwnPropertyDescriptor()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.getOwnPropertyDescriptors()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.getOwnPropertyNames()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.getOwnPropertySymbols()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.getPrototypeOf()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.prototype.hasOwnProperty()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.is()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.isExtensible()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.isFrozen()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.prototype.isPrototypeOf()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.isSealed()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.keys( )`
- 
- The `Object.keys( )` returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually.
- Syntax `Object.keys(obj)`
- Parameter: The object of which the enumerable's own properties are to be returned.
- Return value: An array of strings that represent all the enumerable properties of the given object.

`Object.preventExtensions()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.prototype.propertyIsEnumerable()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.seal()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.setPrototypeOf()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.prototype.toLocaleString()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.prototype.toString()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.prototype.valueOf()`
- 
- Syntax:
- Parameter:
- Return Value:

`Object.values()`
- 
- Syntax:
- Parameter:
- Return Value:













