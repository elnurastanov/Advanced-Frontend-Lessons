/*
* Create a JavaScript function called add that takes a number as a parameter and returns a closure function.
* The closure function should add the parameter to a running total and return the updated total.
*/

function add(num) {
    let total = 0;

    return function () {
        total += num;
        return total;
    };
}

const addToTotal = add(5);
console.log(addToTotal()); // Output: 5
console.log(addToTotal()); // Output: 10
console.log(addToTotal()); // Output: 15

/*
* Create a JavaScript constructor function called Rectangle that takes width and height as parameters.
* Add a method to the prototype called getArea that returns the area of the rectangle.
*/

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

const rect = new Rectangle(5, 10);
console.log(rect.getArea()); // Output: 50


/*
* Implement a JavaScript constructor function called Person that takes name and age as parameters.
* Add a method to the prototype called introduce that returns a string introducing the person with their name and age.
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return "My name is " + this.name + " and I am " + this.age + " years old.";
};

const john = new Person("John", 25);
console.log(john.introduce()); // Output: My name is John and I am 25 years old

/*
* Create a JavaScript constructor function called Animal that has a property name.
* Add a method to the prototype called eat that logs a message saying the animal is eating.
*/

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(this.name + " is eating.");
};

const lion = new Animal("Lion");
lion.eat(); // Output: Lion is eating.


/*
* Write the array prototype called last.
* This prototype return last element of array. If no elements in array return -1.
*/

Array.prototype.last = function() {
    return this.length ? this.pop() : -1
}

const arr = [1,2,3,4,5]

arr.last() // 5

/*
* Write Number prototype called double.
* Double prototype returns doubled version of number.
*/

Number.prototype.double = function() {
    return this * 2
}

const number = 5

number.double() // 10