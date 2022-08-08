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



# Array Declare
There are many ways to declare array. We will discuss step by step.

## 1st Process
```js
    var names = new Array(4);
    names[0] = "Omar";
    names[1] = "Faruque";
    names[2] = "Shamim";
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

output:
Omar
Faruque
Shamim
undefined
undefined
```

## 2nd Process
```js
    var names = ["Omar", "Faruque", "Shamim"]
    
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

output:
Omar
Faruque
Shamim
```

## 3rd Process: 2D Array
```js
    var items = [
        ["Shirt", 990],
        ["T-Shirt", 490],
        ["Panjabi", 1500],
    ];

    for (var i = 0; i < items.length; i++) {
        console.log(items[i][0]);
    }

output:
Shirt
T-Shirt
Panjabi
```

# Array Method
There ara many array methods. We will discuss step by step.

## Array Method: push
Element add into end of the array.
```js
    var names = ["Omar", "Faruque", "Shamim"]
    names.push("Shakil");

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

output:
Omar
Faruque
Shamim
Shakil
```

## Array Method: unshift
- Unshift opposite of push
- Element add into start of the array
```js
    var names = ["Omar", "Faruque", "Shamim"]
    names.unshift("Shakil");

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

output:
Shakil
Omar
Faruque
Shamim
```

## Array Method: pop
- Element removes from end of the array
```js
    var names = ["Omar", "Faruque", "Shamim"]
    names.pop();
    
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

output:
Omar
Faruque
```

## Array Method: shft
- Shift opposite of pop
- Element removes from start of the array
```js
        var names = ["Omar", "Faruque", "Shamim"]
        names.shift();

        for (var i = 0; i < names.length; i++) {
            console.log(names[i]);
        }
output:
Faruque  
Shamim
```

## Array Method: concat
```js
        var country1 = ["Bangladesh", "India"];
        var country2 = ["USA", "UK"];
        var countries = country1.concat(country2);

        console.log(countries);
        output:
        ['Bangladesh', 'India', 'USA', 'UK']
```

## Array Method: splice
```js
    var names = ["Omar", "Faruque", "Shamim"]
    names.splice(2, 0, "Shakil", "Sadia");
    /*
    names.splice(strat, 
    number of remove item, list of item)
    */

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }  

output:
Omar
Faruque
Shakil
Sadia
Shamim

```

```js
    var names = ["Omar", "Faruque", "Shamim"]
    names.splice(1, 2, "Shakil", "Sadia");

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
output:
Omar
Shakil
Sadia
Shamim

```

```js
    var names = ["Omar", "Faruque", "Shamim"]
    names.splice(1, 2);

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
output:
Omar
```

## Array Method: slice
- main array is not changed
```js
        var names = ["Omar", "Faruque", "Shamim"]
        var newNames = names.slice(2);

        for (var i = 0; i < newNames.length; i++) {
            console.log(newNames[i]);
        }

output:
Shamim
```

## Array Method: sort
```js
        var names = ["Omar", "Faruque", "Shamim"]
        var newNames = names.sort();

        for (var i = 0; i < newNames.length; i++) {
            console.log(newNames[i]);
        }  
output:
Faruque
Omar
Shamim

```

## Array Method: sort then reverse
```js
        var names = ["Omar", "Faruque", "Shamim"]
        var newNames = names.sort();
        newNames.reverse();

        for (var i = 0; i < newNames.length; i++) {
            console.log(newNames[i]);
        }  
output:
Shamim
Omar
Faruque
```

# Array Method: asc sort for number
- we should use annonymous function
- first function get 2 values 1 & 8.
then find out the values (a-b) or (1-8) = -7.
if values is negative, they will not exchange thier position othewise they will exchange their
position.
```js
        var number = [1, 8, 5, 6, 20];
        number.sort(function (a, b) {
            return a - b;
        })

        for (var i = 0; i < number.length; i++) {
            console.log(number[i]);
        }
output:
1
5
6
8
20
```

# Array Method: reverse sort for number
- we should use annonymous function
```js
        var number = [5, 8, 1, 6, 20];
        number.sort(function (a, b) {
            return b-a;
        })

        for (var i = 0; i < number.length; i++) {
            console.log(number[i]);
        }
output:
20
8
6
5
1
```

# Object
```js
        //Array
        var items = [];

        //1st Object
        var item1 = {
            Barcode: "77101",
            ProductName: "Shirt",
            CostPrice: 800,
            SalesPrice: 990
        }
        //2nd Object
        var item2 = {
            Barcode: "77102",
            ProductName: "T-Shirt",
            CostPrice: 400,
            SalesPrice: 490
        }
        items.push(item1);
        items.push(item2);

        for (var i = 0; i < items.length; i++) {
            console.log(items[i].Barcode);
        }

output:
77101
77102

```

# Object create using constructor

```js
function Item(barcode, productName, costPrice, salesPrice) {
    this.Barcode = barcode,
        this.ProductName = productName,
        this.CostPrice = costPrice,
        this.SalesPrice = salesPrice,
        this.display = function () {
            console.log(this.ProductName)
        }
}


var item1 = new Item("77101", "Shirt", 800, 990);
var item2 = new Item("77102", "T-Shirt", 400, 490);

var items = [];
items.push(item1);
items.push(item2);

for (var i = 0; i < items.length; i++) {
    items[i].display();
}

output:
Shirt
T-Shirt

```

# Math Object
```js
        console.log(Math.sqrt(25));
        Output: 5
        // sin(), cos(), tan() ...
        console.log(Math.sin(25));
        Output: -0.13235175009777303

        console.log(Math.abs(-25));
        Output: 25
        console.log(Math.pow(2, 3));
        Output: 8

        console.log(Math.floor(2.4));
        Output: 2
        console.log(Math.ceil(2.4));
        Output: 3
        console.log(Math.round(2.4));
        Output: 2

        console.log(Math.max(2, 8));
        Output: 8
        console.log(Math.min(2, 8));
        Output: 2


        // returns value between 0 to 1 by default
        console.log(Math.random());
        Output: 0.9372866797353949
        // returns value between 0 to 5 
        console.log(Math.random() * 6);
        Output: 4.852790846961605

        // returns value between 0 to 5 integer value
        console.log(Math.floor(Math.random() * 6));
        Output: 5
        // returns value between 1 to 5 integer value
        console.log(Math.floor(Math.random() * 5) + 1);
        Output: 4

```

# Date Object & Date Method
```js
        var date = new Date();
        
        console.log(date);
        Output: Sat Jan 22 2022 19:38:39 GMT+0600 (Bangladesh Standard Time)

        console.log(date.getFullYear());
        Output: 2022

        console.log(date.getMonth());
        Output: 0

        console.log(date.getDate());
        Output: 22

        //sunday = 0, Monday = 1
        console.log(date.getDay());
        Output: 6

        console.log(date.getHours());
        Output: 19

```

# DOM: Document Object Model
- When a web page is loaded, the browser creates a Document Object Model of the page.
- The HTML DOM model is constructed as a tree of Objects:

```html
<html>

<head>
    <title>JavaScript</title>
</head>

<body> 
    <div></div>
     <h1></h1>
</body>
</html>
```


# Html tag change using Javascript

## getElementById
```js
<h1 class="heading" id="headingId">1st Heading</h1>
document.getElementById("headingId").innerHTML = "1st Heading Change!";

Output: 1st Heading Change!
```

## getElementsByTagName
```js
    <h1 class="heading1">1st Heading</h1>
    <h1 class="heading2">2nd Heading</h1>

    document.getElementsByTagName("h1")
    [1].innerHTML = "2nd Heading Change!";

Output: 1st Heading Change!
```

## getElementsByClassName
```js
    <h1 class="heading1">1st Heading</h1>
    <h1 class="heading2">2nd Heading</h1>

    document.getElementsByClassName("heading1")
    [0].innerHTML = "1st Heading Change!";

Output: 1st Heading Change!
```

## Query Selector

```js
    <h1 id="hid">1st Heading</h1>
    document.querySelector("#hid")
        .innerHTML = "1st Heading Change!";

    <h1 class="hclass">2nd Heading</h1>
    document.querySelector(".hclass")
        .innerHTML = "2nd Heading Change!";

    <p>1st Paragramph</p>
    document.querySelector("p")
        .innerHTML = "1st Paragramph Change!";

    <div class="myDiv">
        <a href="#">Link</a>
    </div>
    document.querySelector(".myDiv a")
        .innerHTML = "link Change!";


    <h1> 1st Heading</h1>
    <h1> 2nd Heading</h1>
    document.querySelectorAll("h1")[1]
        .innerHTML = "2nd Heading Change!";

```

## New Header Tag Add into Div: End Position
```js
    <div id="myDiv">
        <h1>heading 1</h1>
        <h1>heading 2</h1>
    </div>

var heading3 = document.createElement("h1");
var text = document.createTextNode("heading 3");
heading3.appendChild(text);

var myDiv = document.getElementById("myDiv");
myDiv.appendChild(heading3);

output: 
heading 1
heading 2
heading 3
```

## New Header Tag Add into Div : Start Position
```js
    <div id="myDiv">
        <h1>heading 1</h1>
        <h1>heading 2</h1>
    </div>

    var heading1 = document.getElementsByTagName("h1")[0];

    var heading0 = document.createElement("h1");
    var text = document.createTextNode("heading 0");
    heading0.appendChild(text);

    var myDiv = document.getElementById("myDiv");
    myDiv.insertBefore(heading0, heading1);

output: 
heading 0
heading 1
heading 2

```

## Remove Header Tag from Div
```js
    <div id="myDiv">
        <h1>heading 1</h1>
        <h1>heading 2</h1>
        <h1>heading 3</h1>
    </div>

var heading3 = document.getElementsByTagName("h1")[2];
var myDiv = document.getElementById("myDiv");
myDiv.removeChild(heading3);

output: 
heading 1
heading 2

```

# CSS change using Javascript

## css change using DOM
```js
    <a id="linkId" href="#">Visit Google</a>

    var link = document.getElementById("linkId");
    link.style.textDecoration = "none";
    link.style.color = "red";
    link.href = "https://www.google.com/"
    link.target = "_blank"
```

## CSS Class Add/Remove
```js
   <h1 id="my-id" class="my-class">heading 1</h1>

    document.getElementById("my-id").classList;

    document.getElementById("my-id").classList.add("new-Class");
    document.getElementById("my-id").classList;


    document.getElementById("my-id").classList.remove("new-Class");
    document.getElementById("my-id").classList;

```





# Event Handler  

## Add Event Listener
```js
<button>Click Me</button>

document.querySelector("button")
    .addEventListener("click", myFunction);

or
 document.querySelector("button")
    .addEventListener("mouseover", myFunction);

or
document.querySelector("button")
    .addEventListener("mouseout", myFunction);

function myFunction() {
    alert("Hello Omar!")
}
```

## Event Listener With Multiple Event
```js
    <button class="my-button">Button 1 </button>
    <button class="my-button">Button 2 </button>

    var len = document.querySelectorAll(".my-button").length;

    for (var i = 0; i < len; i++) {
        document.querySelectorAll(".my-button")
        [i].addEventListener("click", myFunction);
    }

    function myFunction() {
        alert(this.innerHTML + " is clicked")
    }
```

# Key Press Event Listener
```js
    document.addEventListener("keypress", function () {
        var text = event.key;
        alert(text);
    })
```

## onclick Event Listener
```js
<button onclick="alert('Hello Omar!')"> 
    Click Me
</button>
```

```js
<button onclick="myMesage('Hello Omar!')"> 
    Click Me
</button>

    function myMesage(msg) {
        alert(msg);
    }
```

## Audio play
```js
        var audio = new Audio("audio.mp3");
        audio.play();
        audio.pause();
```

## setTimeout
```js
     setTimeout(function () {
            //wait
    }, 1000)
```