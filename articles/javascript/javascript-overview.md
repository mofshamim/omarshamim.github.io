# Javascript Output

```js
alert("Hello Javascript!");
document.write("Hello Javascript!");
console.log("Hello Javascript!"); 
document.write("<h1>Hello Javascript!<h1/>");
```

# Javascript link add into Html files
1. Inline javascript
```html
<body onload="alert('load when body tag load!')">
    
</body>
```

2. Internal Javascript
```html
<body>
    <script>
      document.write("<h1>Hello Javascript!<h1/>");
    </script>
</body>
```

3. External Javascript
```html
<body>
    <script src="index.js"></script>
</body>
```

# Keyword
- Keywords are reserved words that are part of the syntax in the programming language. 

```js
var a = 'hello'; 
Here, var is a keyword that denotes that you are declaring a variable

break
case
catch
continue
finally
for
function
switch
this
var
void
while
```

# Datatype

```js
String = 'Omar',  "Omar Faruque Shamim"
Number = 123,  1002.23
Boolean = true or false
objects = 
```

# How to find out datatype
```js
typeof("Omar");
```

# Comment
1. Single line comment
```js
// document.write("<h1>Hello Javascript!<h1/>");
```

2. Multiple line comment
```js
/*
    alert("omar");
    document.write("<h1>Hello Javascript!<h1/>");
*/
```

# Variable Declare
- Variables are containers for storing values
- There are two types of variables in JavaScript : local variable and global variable.
- There are some rules while declaring a JavaScript variable (also known as identifiers). 
<pre>
Name must start with 
- Letter (a to z or A to Z) 
- Underscore( _ ), or 
- Dollar( $ ) sign.
- Case sensitive (small & capital are different)
- Camel case. Example: firstName, lastName
</pre>

# How to use variable
```js
var name, age, country;
name = "Omar Faruque Shamim";
age = 27;
country = "Bangladesh";
console.log(name + " " + age + " " + country);
```


# Datatype Conversion
- Number to string 
- String to Number
- parseInt, parseFloat, toFixed, toPrecision
- 
```js
        var num = 20;
        num = toString(num);
        console.log(typeof (num));
        output: string

        var num = "30";
        num = parseInt(num);
        console.log(typeof (num));
        output: Number

        var num = "30.55";
        num = parseFloat(num);
        console.log(typeof (num));
        output: Number

        var num = 30.5678;
        console.log(num.toFixed(2));
        output: 30.57

        var num = 2.5678;
        console.log(num.toPrecision(2));
        output: 2.6

        console.log(Number("   20.66    "));
        output: 20.66
        console.log(Number(true));
        output: 1
        console.log(Number(false));
        output: 0
```

# Add or Concatenate strings.
```js
 console.log("Omar Faruque " + "Shamim");
```

# Library Function for strings.
```js
var name = "Bangladesh";
console.log(name.length);
output: 10

var name = "Bangladesh";
console.log(name.charAt(2));
output: n

var name = "Bangladesh";
console.log(name.toUpperCase());
output: BANGLADESH

var name = "Bangladesh";
console.log(name.toLowerCase());
output: bangladesh

var firstName = "Omar";
var lastName = "Shamim";
console.log(firstName.concat(lastName));
output: OmarShamim

var firstName = "Omar Faruque";
console.log(firstName.slice(0, 3));
output: Oma

var firstName = "Omar Faruque";
console.log(firstName.slice(5, 8));
output: Far
```

# Javascript Input

```js
var name = prompt("Enter your name: ")
console.log(name);

var num1 = prompt("1st Number: ");
var num2 = prompt("1st Number: ");
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);
console.log(num1 + num2);
```

# Aritmatic, Assignment, Relation & Logical  Operator
<pre>
1. Aritmatic Operator 
    +, -, *, /, %(Modulas,), **(Exponent), ++, --
2. Assignment Operator 
    =, +=, -=, /=, *=, %=, **=
3. Relation Operator - return true or false
    >, >=, <, <=, ==, ===, !=, !==
4. Logical  Operator  
    &&, ||
</pre>

- Example: Relation Operator 
```js
console.log(20 == '20');
output: true

// check value and datatype (===) and (!==)
console.log(20 === '20');
output: false
```

- Example: Logical operator

```js
var num1 = 50;
var num2 = 40;
var num3 = 30;
console.log(num1 > num2 && num1> num3);
output: true
```

- Example: !(not operator)

```js
var num1 = 50;
var num2 = 40;
console.log( !(num1 > num2) );
output: false
```

# Control Statement : if, else if, else, switch

```js
    var num = 5;
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }

var text;
var fruits = document.getElementById("myInput").value;

switch(fruits) {
  case "Banana":
    text = "Banana is good!";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
}
```

# Loop Control Statement : for, while, do while 
- for loop
```js
    for (var i = 1; i <= 5; i++) {
        console.log("Item " + i);
    }
```
- while loop
```js
    var i = 1;
    while (i <= 5) {
        console.log("Item " + i);
        i++;
    }
```

- do while: at least one time invoke the loop statement.
```js
    var i = 1;
    while (i <= 5) {
        console.log("Item " + i);
        i++;
    }
```


# Break
```js
for (var i = 1; i <= 5; i++) {
            if (i == 4)
                break;
            console.log("Item " + i);
        }
output:
Item 1
Item 2
Item 3
```

## Continue
```js
for (var i = 1; i <= 5; i++) {
            if (i == 4)
                continue;
            console.log("Item " + i);
        }
output:
Item 1
Item 2
Item 3
Item 5
```

# Ternary Operator
```js
var num = 10;
console.log(num > 0 ? "Positive" : "Negative");
output:
Positive
```

# Function
```js
    function sqaure(num) {
        var result = num * num;
        console.log(result);
    }
    sqaure(5);
    sqaure(6);

    function sqaure(num1, num2) {
        var result = num1 * num2;
        return result;
    }
    console.log(sqaure(5, 10));
```

# IIFEs (immediately Invokeable Function Expression)
```js
    (function display() {
        console.log("immediately Invokeable");
    })();
    output: immediately Invokeable

    (function sqaure(num1, num2) {
        var result = num1 * num2;
        console.log(result);
    })(5, 6);
    output: 30
```

## Function Expression
```js
    var messagePrint = function GetMessage() {
        console.log("Bangladesh");
    }
    messagePrint();
    output: Bangladesh
```

# Bracket
```html
() : parenthesis
{} : curly braces
[] : squre bracet
<> : angle bracket
```