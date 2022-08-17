### Javascript Output

```js

alert("Hello Javascript!");
document.write("Hello Javascript!");
console.log("Hello Javascript!"); 

document.write("<h1>Hello Javascript!<h1/>");

```


### Javascript link add into Html files
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
```js
    document.write("<h1>Hello Javascript!<h1/>");
```
```html
<body>
    <script src="index.js"></script>
</body>
```

### Keyword

1. Keywords are reserved words that are part of the syntax in the programming language. 
For example, 
var a = 'hello'; 
Here, var is a keyword that denotes that you're declaring a variable

```js
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

### Datatype

```js
String = 'Omar',  "Omar Faruque Shamim"
Number = 123,  1002.23
Boolean = true or false
objects = 
```
1. to find out datatype

```js
typeof("Omar");
```

### comment
1. single line comment
```js
// document.write("<h1>Hello Javascript!<h1/>");
```

2. multiple line comment
```js
/*
    alert("omar");
    document.write("<h1>Hello Javascript!<h1/>");
*/
```

### variable Declare
1. Variables are containers for storing values

2. There are two types of variables in JavaScript 
: local variable and global variable.

3. There are some rules while declaring a JavaScript variable (also known as identifiers). Name must start with 
-- a letter (a to z or A to Z) 
-- underscore( _ ), or 
-- dollar( $ ) sign.

4. case sensitive (small & capital are different)

5. camel case. Example: firstName, lastName


```js
var name, age, country;
name = "Omar Faruque Shamim";
age = 27;
country = "Bangladesh";

console.log(name + " " + age + " " + country);
```


### Number method
1. Number to string convert
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


### Add or Concatenate strings.
```js
 console.log("Omar Faruque " + "Shamim");
```

### Library Function for strings.
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

### Javascript Input

```js
var name = prompt("Enter your name: ")
console.log(name);

var num1 = prompt("1st Number: ");
var num2 = prompt("1st Number: ");
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);
console.log(num1 + num2);

```

### Aritmatic, Assignment, Relation & Logical  Operator
1. Aritmatic : +, -, *, /, %(Modulas,),
 **(Exponent), ++, --

2. assignment: =, +=, -=, /=, *=, %=, **=

3. Relation Operator: return true or false
>, >=, <, <=, ==, ===, !=, !==

--> only check value (==) and (!=)
```js
console.log(20 == '20');
output: true
```

--> check value and datatype (===) and (!==)
```js
console.log(20 == '20');
output: false
```

4. Logical operator:: &&, ||, 

```js
var num1 = 50;
var num2 = 40;
var num3 = 30;
console.log(num1 > num2 && num1> num3);
output: true
```

5. ! (not operator)

```js
var num1 = 50;
var num2 = 40;
console.log( !(num1 > num2) );
output: false
```


### Control Statement
1. Conditional Control Statement: if, else if, else,
switch

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

2. Loop Control Statement: for, while, do while 

1. for loop
```js
    for (var i = 1; i <= 5; i++) {
        console.log("Item " + i);
    }
```

2. while loop
```js
    var i = 1;
    while (i <= 5) {
        console.log("Item " + i);
        i++;
    }
```

3. do while: at least one time invoke the loop statement.

```js
    var i = 1;
    while (i <= 5) {
        console.log("Item " + i);
        i++;
    }
```

### break and continue

## break
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

## break
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

### ternary operator
```js
var num = 10;
console.log(num > 0 ? "Positive" : "Negative");
output:
Positive
```

### function
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

### IIFEs (immediately Invokeable Function Expression)

## immediately Invokeable
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

### Bracket
() : parenthesis
{} : curly braces
[] : squre bracet
<> : angle bracket


### Array Declare

1. 1st Process
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

2. 2nd Process
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

### Array Method: push
1. element add into end of the array

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

### Array Method: unshift
1. unshift opposite of push
1. element add into start of the array

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



### Array Method: pop
1. element removes from end of the array

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

### Array Method: shft
1. shift opposite of pop
2. element removes from start of the array

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

### Array Method: concat

```js
        var country1 = ["Bangladesh", "India"];
        var country2 = ["USA", "UK"];
        var countries = country1.concat(country2);

        console.log(countries);
        output:
        ['Bangladesh', 'India', 'USA', 'UK']
```


### Array Method: splice
1. 
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

2. 
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

3. 
```js
    var names = ["Omar", "Faruque", "Shamim"]
    names.splice(1, 2);

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
output:
Omar
```

### Array Method: slice
1. main array is not changed

```js
        var names = ["Omar", "Faruque", "Shamim"]
        var newNames = names.slice(2);

        for (var i = 0; i < newNames.length; i++) {
            console.log(newNames[i]);
        }

output:
Shamim

```

### Array Method: sort
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


### Array Method: sort then reverse
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


### Array Method: asc sort for number
1. we should use annonymous function
2. first function get 2 values 1 & 8.
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

### Array Method: reverse sort for number
1. we should use annonymous function
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


### 2D Array
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

### Object
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
### Object create using constructor

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


### Math Object

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

### Date Oqbject & Date Method

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

### DOM: Document Object Model
1. When a web page is loaded, the browser creates a Document Object Model of the page.

2. The HTML DOM model is constructed as a tree of Objects:

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

### Query Selector

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


### Event Handler : onclick

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


### CSS change using DOM
```js
    <a id="linkId" href="#">Visit Google</a>

    var link = document.getElementById("linkId");
    link.style.textDecoration = "none";
    link.style.color = "red";
    link.href = "https://www.google.com/"
    link.target = "_blank"
```

### New Header Tag Add into Div: End Position

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


### New Header Tag Add into Div : Start Position

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



### Remove Header Tag from Div

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


### CSS Class Add/Remove

```js
   <h1 id="my-id" class="my-class">heading 1</h1>

    document.getElementById("my-id").classList;

    document.getElementById("my-id").classList.add("new-Class");
    document.getElementById("my-id").classList;


    document.getElementById("my-id").classList.remove("new-Class");
    document.getElementById("my-id").classList;

```

 
### Add Event Listener

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


### Event Listener With Multiple Event

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


### Key Press Event Listener
```js
    document.addEventListener("keypress", function () {
        var text = event.key;
        alert(text);
    })
```

### Audio play
```js
        var audio = new Audio("audio.mp3");
        audio.play();
        audio.pause();
```

### setTimeout
```js
     setTimeout(function () {
            //wait
    }, 1000)
```

### DOM Event :
1. Event Object: 
event type: change, submit, load, unload,
open, play, canplay, pause, playing, progress,
resize, scroll, toggle
properties: type, target, preventDefault()

2. MouseEvent Object
3. KeyboardEvent Object
4. FocusEvent Object
5. ClipboardEvent Object
6. DragEvent Object

## onchange event

1. input
```js
 const input = document.querySelector("input[name=name]");
input.addEventListener("change", changeHandler);

function changeHandler(e) {
    //   console.log(e);
    //   console.log(e.type);
    //   console.log(e.target);
    //   console.log(e.target.className);
    //   console.log(e.target.id);
    console.log(e.target.value);
}
```

2. checkbox
```js
<div>
    <h2>Programming Language</h2>
    <label for="program">
        <input type="checkbox" name="program" id="" value="c" />
        C
    </label>
    <label for="java">
        <input type="checkbox" name="program" id="" value="java" />
        Java
    </label>
</div>


const programs = document.querySelectorAll("input[name=program]");
console.log(programs);

Array.from(programs).map((program) => {
    program.addEventListener("change", programHandler);
});

function programHandler(e) {
    if (e.target.checked) {
        console.log(e.target.value);
    }
}
```


3. select / dropdown
```js
<label for="department">Department: </label>
<select name="department" id="department">
    <option value="cse">CSE</option>
    <option value="eee">EEE</option>
    <option value="llb">LLB</option>
</select>

const department = document.querySelector("#department");
// console.log(department);

department.addEventListener("change", handleDepartment);

function handleDepartment(e) {
    console.log(e.target.value);
}

```

## onsubmit event

```js
  <form action="">
        <div>
            <label for="name">Name :
                <input type="text" id="name" name="name" required autofocus />
            </label>
        </div>
        <div>
            <label for="email">Email :
                <input type="email" id="email" name="email" size="30" required />
            </label>
        </div>
        <div>
            <label for="password">Password :
                <input type="password" id="password" name="password" required minlength="4" maxlength="8" />
            </label>
        </div>
        <div>
            <input type="submit" value="signup" />
        </div>
    </form>


// finding the elements
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener("submit", formHandler);

function formHandler(e) {
// For Auto Refresh OFF
e.preventDefault();

const userInfo = {
name: name.value,
email: email.value,
password: password.value,
};

console.log(userInfo);
name.value = "";
email.value = "";
password.value = "";
}

```


## media event

```js
<video width="400" controls muted>
    <source src="video.mp4" type="video/mp4" />

    your browser does not support html5 video element
</video>


const video = document.querySelector("video");
video.addEventListener("canplay", function () {
    console.log("canplay");
});

video.addEventListener("play", function () {
    console.log("play");
});
video.addEventListener("playing", function () {
    console.log("playing");
});

video.addEventListener("pause", function () {
    console.log("pause");
});
video.addEventListener("ended", function () {
    console.log("Thanks for watching");
});
video.addEventListener("volumechange", function () {
    console.log("volumechange");
});
```

## scroll, resize, load, unload, toggle event

```js
    <details>
        <summary>Anis</summary>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore ea
            molestiae ratione maxime pariatur.
        </p>
    </details>

window.addEventListener("load", function () {
    console.log("load");
});

window.addEventListener("unload", function () {
    console.log("unload");
});

window.addEventListener("scroll", function () {
    console.log("scroll");
});

window.addEventListener("resize", function () {
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`height: ${height}, width: ${width}`);
});

const details = document.querySelector("details");

details.addEventListener("toggle", function (e) {
    console.log(e.target.open);
});
```



### 2. MouseEvent Object
1. onclick
2. ondblclick
3. onmousedown
4. onmousedup
5. onmouseenter
6. onmouseleave
7. onmousemove
8. onmouseover

```js
<div id="my-div" class="div1" style="background-color: tomato;height: 200px;">
    <p>I am a div</p>

    <button class="btn">btn1</button>
    <button class="btn">btn2</button>
    <button class="btn">btn3</button>
</div>

const div = document.querySelector("div");

div.addEventListener("click", function (e) {
    console.log("click is occured");
    //   console.log(e.target);
    //   console.log(e.target.id);
    //   console.log(e.target.className);
    //   console.log(e.target.innerHTML);
    //   console.log(e.target.innerText);
    //   console.log(e.target.textContent);
});

div.addEventListener("dblclick", function () {
    console.log("dblclick is occured");
});
div.addEventListener("mousedown", function () {
    console.log("mousedown is occured");
});
div.addEventListener("mouseup", function () {
    console.log("mouseup is occured");
});
div.addEventListener("mouseenter", function () {
    console.log("mouseenter is occured");
});
div.addEventListener("mouseleave", function () {
    console.log("mouseleave is occured");
});
div.addEventListener("mouseover", function () {
    console.log("mouseover is occured");
});

div.addEventListener("mousemove", function (e) {
    //   console.log("mousemove is occured");
    //X and Y axis show compare to full screen 
    console.log("clientX = " + e.clientX + ", clientY = " + e.clientY);
    //X and Y axis show compare to only current portion/div/element
    console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
});

const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
    button.addEventListener("click", function (e) {
        console.log(e.target.innerText);
    });
});

```


### 3. KeyboardEvent Object
1. Keydown - pressing a key, can repeat
2. keypress (may not supported by some browsers)
3. keyup
4. some properties - key, keyCode, code, shiftKey, ctlKey, repeat

```js

<textarea name="" id="" cols="30" rows="10"></textarea>

const textarea = document.querySelector("textarea");

textarea.addEventListener("keydown", function (e) {
    console.log("keydown");
});

textarea.addEventListener("keypress", function () {
    console.log("keypress");
});

textarea.addEventListener("keyup", function (e) {
    console.log("keyup");
    console.log(e.key);
    console.log(e.keyCode);
    if (e.shiftKey) {
        console.log("shift+" + e.key);
    }
    if (e.repeat) {
        alert("do not repeat");
    }
});

```


## 4. FocusEvent Object
1. onblur
2. onfocus
3. onfocusin
4. onfocusout

5. FocusEvent Object will not wotk this tag
 <br>, <head>, <title>, <html>, <iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo>,

```js
  <input type="text" value="" />

const input = document.querySelector("input");

input.addEventListener("focus", function (e) {
    console.log("focus is occured");

    input.style.backgroundColor = "orange";
    input.style.padding = "2rem";
    input.style.color = "white";
});

input.addEventListener("blur", function (e) {
    console.log("blur is occured");
    input.style.backgroundColor = "transparent";
    input.style.padding = "0rem";
    input.style.color = "black";

    // console.log(e.target.value);
    // input.value = e.target.value.toUpperCase();
});


// input.addEventListener("focusin", function () {
//     console.log("focusin is occured");
// });
// input.addEventListener("focusout", function () {
//     console.log("focusout is occured");
// });
```



## 5. ClipboardEvent Object
1. oncopy
2. oncut
3. onpaste

```js
<input type="text" />
<p></p>

const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("copy", function () {
    p.innerText = "you have copied";
});
input.addEventListener("cut", function () {
    p.innerText = "you have cut";
});
input.addEventListener("paste", function () {
    p.innerText = "you have pasted";
});


```

## 6. DragEvent Object


```js
<div id="div1" style="height: 200px;background-color: tomato;">
</div>

<p id="para1" draggable="true">
    I love Bangladesh
</p>


const div1 = document.querySelector("div");
const para1 = document.querySelector("p");

para1.addEventListener("dragstart", function (e) {
e.dataTransfer.setData("Text", e.target.id);
})

div1.addEventListener("dragover", function (e) {
e.preventDefault();
})

div1.addEventListener("drop", function (e) {
let id = e.dataTransfer.getData("Text");
var text = document.getElementById(id);
div1.appendChild(text);
e.preventDefault();
})

```
### What is the difference between DOM and BOM?

DOM - The Document Object Model (DOM) is a cross-platform and language-independent convention for representing and interacting with objects in HTML, XHTML, and XML documents. ... 

BOM - The Browser Object Model (BOM) is a browser-specific convention referring to all the objects exposed by the web browser.



### BOM Browser object Model
The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.

window object
1. location object
2. popup boxes: alert, confirm, prompt
3. Timing Event: setTimeOut(), setInterval()

## location object

```js
console.log(location.href);
//http://127.0.0.1:5500/index.html

console.log(location.protocol);
//http:

console.log(location.host);
//127.0.0.1:5500

console.log(location.hostname);
//127.0.0.1

console.log(location.port);
//5500

console.log(location.pathname);
//   /index.html

//location.assign("https://www.google.com/")

```

## popup boxes: alert, confirm, prompt

# alert
```js
alert("Hello Omar!");
```

# confirm
```js
deleteSomething();
function deleteSomething() {
    let value = confirm("Do you want to delete?");
    if (value) {
        console.log("Deleted Successfully.");
    } else {
        console.log("Not deleted.");
    }
}
```

# prompt
```js
var name = prompt("Enter your name: ");

if (name == 'null' || name == "") {
    console.log("You don't input your name.")
} else {
    console.log(name);
}
```


## Timing Event

# setTimeout
```js
setTimeout(() => {
        console.log("Hi!")
}, 3000)

or

setTimeout(display, 3000)
function display() {
    console.log("Hi!")
}

or Example: message remove after 2 sec

<button class="save-button"> Save</button>
<p class="message"></p>


const saveButton = document.querySelector(".save-button");
const message = document.querySelector(".message");

saveButton.addEventListener('click', saveUser);

function saveUser() {
message.innerHTML = "Save Successfully!";
setTimeout(messageRemove, 3000)
}

function messageRemove() {
message.textContent = "";
}

```


## setInterval
```js
<p class="message"></p>


displayCount();

function displayCount() {
    const message = document.querySelector(".message");
    let count = 0;
    setInterval(() => {
        count++;
        message.innerHTML = count;
    }, 1000);
}

```

### Error Handle: try catch
1. try catch: run time error can handle.
2. try catch: syntex error can not handle.

```js
try {
    alert("Hi Everyone!");
    alert(x);

} catch (ex) {
    console.log(ex);

}finally{
    alert("Bye Everyone");
}

```


### Error Handle: throw or custom error handle 

```js
 var number = prompt("Enter number between 5 and 10");

try {
    if (number < 5) {
        throw "input is too low!"
    } else if (number > 10) {
        throw "input is too high!"
    }
    console.log("input is correct.");
} catch (ex) {
    console.log(ex);
}

```


### Canvas

```js
<canvas id="myCanvas" width="360" height="280">  </canvas>

var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

context.lineWidth = 3;
context.strokeStyle = "black";
context.strokeRect(10, 10, 380, 280)

context.fillStyle = "green";
context.fillRect(12, 12, 376, 276);
```


###

```js

```