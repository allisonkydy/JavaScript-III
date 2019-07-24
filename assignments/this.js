/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or Global Object Binding -- Using "this" in the global scope refers to the global object or "Window" when using the browser. 
*
* 2. Implicit Binding -- When calling a method housed in an object, "this" refers to that object. This allows properties in the object to be used in the method when the method is invoked.
*
* 3.  New Binding -- Using the "new" keyword creates a new object based on a constructor function. "this" (used in the constructor function) points to that new object.
*
* 4. Explicit Binding -- Using the "call", "apply", or "bind" methods on a function points "this" directly to a specific value in the object being passed in.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// Prints all of the Array methods stored in the Window object to the console
console.log(this.Array.prototype); 

// Principle 2

// code example for Implicit Binding
const peachPuff = {
    name: 'peachpuff',
    red: 'FF',
    green: 'DA',
    blue: 'B9',
    printHex: function() {
        console.log(`The hex code for ${this.name} is: #${this.red}${this.green}${this.blue}`);
    }
}

peachPuff.printHex();

// Principle 3

// code example for New Binding
function Hex(attr) {
    this.name = attr.name;
    this.red = attr.red;
    this.green = attr.green;
    this.blue = attr.blue;
}

Hex.prototype.printHex = function() {
    console.log(`The hex code for ${this.name} is: #${this.red}${this.green}${this.blue}`);
}

const darkSeaGreen = new Hex({
    name: 'darkseagreen',
    red: '8F',
    green: 'BC',
    blue: '8F'
});

const fireBrick = new Hex({
    name: 'firebrick',
    red: 'B2',
    green: '22',
    blue: '22'
})

darkSeaGreen.printHex();
fireBrick.printHex();

// Principle 4

// code example for Explicit Binding

function printHex() {
    console.log(`The hex code for ${this.name} is: #${this.red}${this.green}${this.blue}`);
}

const dodgerBlue = {
    name: 'dodgerblue',
    red: '1E',
    green: '90',
    blue: 'FF'
}

printHex.call(dodgerBlue);