### Short summary
1. box-sizing
2. media
3. flex
4. grid (grid-template-columns / rows / area)
6. float


### Inline CSS:
-------------------
<h1 style="color: green;font-size: 28px;">
I am from Bangladesh
</h1>

### Internal CSS:
------------------
    <style type="text/css">
        h1 {
            background-color: aqua;
            color: green;
        }
    </style>

 <h1>I am from Bangladesh</h1>

 ### External CSS:
 ---------------------
 create main.css file & past this code

 h1 {
    background-color:blueviolet;
    color: white;
}

link that page into index.html
 <link rel="stylesheet" type="text/css" href="main.css" />

  <h1>I am from Bangladesh</h1>


### class and Id selector:
-------------------------
.heading-style {
    color: green;
    font-size: 50px;
}

#para-style {
    color: red;
    font-size: 25px;
    ;
}

If we have need common style then we should use class.

If we have need specific style then we should use id.

<!-- 
class will be created using dot
class can be used anywhere with any kind of tag 
-->
<h1 class="heading-style"> I am from Bangladesh</h1>

<!-- 
id will be created using hash
id can be used with only one tag 
-->
<p id="para-style"> I am from Bangladesh</p>


### nested class and Id selector:
---------------------------
<style type="text/css">
    #section1 p {
        color: red;
    }
</style>
<div id="section1">
    <p> I am from Bangladesh</p>
</div>


### we can use multiple class for same tag

<style type="text/css">
    .style1 {
        color: red;
    }
    .style2 {
          font-size: 100px;
    }
</style>

<p class="style1 style2"> I am from Bangladesh</p>


### universal selectors

<style type="text/css">
        * {
            background-color: gray;
            color: red;
            font-weight: bold;
        }
</style>

<body>
    <p> I am from Bangladesh</p>
    <p> I am from Rajshahi</p>
    <p> I am from Dhaka</p>
</body>

### grouping selectors
h1,p,h3 {
    background-color: gray;
    color: red;
    font-weight: bold;
}
 <h1> I am from Bangladesh</h1>
 <p> I am from Bangladesh</p>
 <h3> I am from Bangladesh</h3>

### decendent selectors
all 4 p will be selected

div p{
    background-color: gray;
    color: red;
    font-weight: bold;
}

 <h1> I am from Bangladesh</h1>
 <div>
    <p> I am from Bangladesh</p>
    <p> I am from Bangladesh</p>
     <section>
        <p> I am from Bangladesh</p>
        <p> I am from Bangladesh</p>
    </section>
</div>
 <p> I am from Bangladesh</p>

### child selectors
only first 2 p tag will be selected

div > p{
    background-color: gray;
    color: red;
    font-weight: bold;
}

 <h1> I am from Bangladesh</h1>
 <div>
    <p> I am from Bangladesh</p>
    <p> I am from Bangladesh</p>
     <section>
        <p> I am from Bangladesh</p>
        <p> I am from Bangladesh</p>
    </section>
</div>
 <p> I am from Bangladesh</p>


### adjacent sibling selectors

div + p{
    background-color: gray;
    color: red;
    font-weight: bold;
}

 <h1> I am from Bangladesh</h1>
 <div>
    <p> I am from Bangladesh</p>
    <p> I am from Bangladesh</p>
     <section>
        <p> I am from Bangladesh</p>
        <p> I am from Bangladesh</p>
    </section>
</div>
 <p> Only this line will be selected</p>
 <p> I am from Bangladesh</p>



### general sibling selectors

div ~ p{
    background-color: gray;
    color: red;
    font-weight: bold;
}

 <h1> I am from Bangladesh</h1>
 <div>
    <p> I am from Bangladesh</p>
    <p> I am from Bangladesh</p>
     <section>
        <p> I am from Bangladesh</p>
        <p> I am from Bangladesh</p>
    </section>
</div>
 <p> this line will be selected</p>
 <p> this line will be selected</p>




###  Font style

<style type="text/css">
    .my-style {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>

or

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">

<style type="text/css">
    .my-style {
        font-family: 'Roboto', sans-serif;
    }
</style>

<p class="my-style"> I am from Bangladesh</p>


### color

To pick color you can use color zilla

<style type="text/css">
    .my-style {
        color: red;
    }
</style>


### Text Style
 <style type="text/css">
        .my-style {
            text-align: center;
            text-align: left;
            text-align: justify;
            text-decoration: underline;
            text-decoration: overline;
            text-decoration: line-through;
            /* for first line left padding */
            text-indent: 50px;
            text-transform: capitalize;
            text-transform: lowercase;
            text-transform: uppercase;
            text-shadow: 5px 2px gray;
            line-height: 10px;
            word-spacing: 10px;
            word-spacing: -10px;
        }
</style>


### style emoji
go to 
https://unicode-table.com/en/

❤ 😂 🔥


###  Margin

<style type="text/css">
        .my-style {
            /* top right botom left  */
            margin: 10px 15px 20px 25px;
            margin-top: 10px;
            margin-right: 15px;
            margin-bottom: 15px;
            margin-left: 15px;
            /* top & bottom 10px */
            /* right & left 15px */
            margin: 10px 15px
        }
</style>


### padding

<style type="text/css">
    .my-style {
        /* top right botom left  */
        padding: 10px 15px 20px 25px;
        padding-top: 10px;
        padding-right: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        /* top & bottom 10px */
        /* right & left 15px */
        padding: 10px 15px
    }
</style>

### Margin vs Padding

margin works outside
padding works inside

### Border

<style type="text/css">
    .my-style {
        border: 5px solid green;
        border: 5px dotted green;
        border: 5px double green;
        width: 200px;
        border-width: 10px;
        border-color: green;
        border-style: solid;
        border-left: 5px solid red;
    }
</style>


### Box model | content, padding, border, margin

element --> padding --> 
border -->  margin


### set background image

body{
    background-image: url("happy.svg");
    background-repeat: no-repeat;
    background-position: right top;
    background-attachment: fixed;
    background: #fff url("happy.svg") no-repeat right top fixed;
}

### block ELEMENT
take full line width

<div>
<h1>
<p>

### inline ELEMENT
take only necessary line width

<span>

div{
    display: inline;
}

### width vs max-width
width: is fixed
max-width: is resize if screen is resize


### Gradient: linear & radial

 <style type="text/css">
    .gradient-style {
        height: 400px;
        width: 100%;
        background-image: linear-gradient(to right, red, green, blue, yellow);
    }

    .radial-style {
        height: 1000px;
        width: 100%;
        background-image: radial-gradient(circle, red, green, blue, yellow);
    }
</style>

<div class="gradient-style"></div>
<br />
<div class="radial-style"></div>

### box-sizing: is used for fixed width boxing. extra padding, margin & border is not getting extra width
it will take its div width property.

.bbox-size{
    background-color: brown;
    width: 50%;
    height: 300px;
    padding: 10px;
    border: 5px solid gray;
    box-sizing: border-box;
    float: left;
}

### float: left; 
is used for showing multiple tag pasapshi.

Floats were used before Flexbox and Grid to create entire layouts. It isn't used as much anymore, but you may encounter it in legacy code.



### to remove float properties

 <style type="text/css">
        .section1 {
            float: left;
        }

        .section2 {
            float: right;
        }

        .section3 {
            clear: both;
        }
</style>
<div class="section1">
    Left Portion will be here
</div>

<div class="section2">
    right Portion will be here
</div>

<div class="section3">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, maiores?
</div>



### opacity
p{
    opacity: 0.5;
}

img:hover {
    opacity: 0.5;
}

<img src="happy.svg" width="600" height="400" />


### navigation menu
go to nav-menu.html


### resume create
go to resume.html

### Position

.div1 {
    border: 3px solid green;
    position: static;
    left: 20px;
}
1. static is a default position.
2. If we use static, left/right/top or bottom will no work

.div2 {
    border: 3px solid red;
    position: relative;
    left: 20px;
}
1. If we use relative, then left, right, top and bottom will work

.navbar-div {
    border: 3px solid green;
    position: fixed;
    left: 20px;
}
1. Position will be fixed, even scroll the browser.
2. If we use fixed, then left, right, top and bottom will work


<div class="parent-div">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    <div class="child-div">
        Bangladesh
    </div>
</div>

.parent-div {
    border: 3px solid green;
    position: relative;
    left: 20px;
    height: 150px;
}

.child-div {
    border: 3px solid red;
    position: absolute;
    left: 20px;
    top: 30px
}
1. if we used absolute into child-div, it property's will work under parent-div not for body properties.


### overflow
1. By default overflow : visible mode 
overflow: visible; 

2. only display which will remain inside the continer or box/div
overflow: hidden;

3.  always create a scroll bar 
overflow: scroll;

4. create a scroll bar when is required
overflow: auto;


### tooltip
<div class="tooltip">
    Facebook
    <span class="tooltip-text">Facebook is a social media</span>
</div>

<style type="text/css">
    .tooltip {
        position: relative;
    }

    .tooltip .tooltip-text {
        width: 180px;
        background-color: indigo;
        color: white;
        visibility: hidden;
        padding: 2px;
        position: absolute;
        top: 20px;
        left: 60px;
        z-index: -1;
    }

    .tooltip:hover .tooltip-text {
        visibility: visible;
    }
</style>

### z-index
1. z-index is usewd for stack position. which element will display first
2. z-index always works with Position properties.

<div class="div1">
</div>

<div class="div2">
</div>

<style type="text/css">
    div {
        height: 250px;
        width: 250px;
    }

    .div1 {
        background-color: tomato;
        position: absolute;
        z-index: 1;
    }

    .div2 {
        background-color: yellowgreen;
        position: absolute;
        top: 100px;
        left: 100px;
        z-index: 2;
    }
</style>

### variable properties for css3

<div class="div1"> </div>

<style type="text/css">
    :root {
        --primary-color: red
    }

    .div1 {
        background-color: var(--primary-color);
        height: 250px;
        width: 250px;
        /* fallback color incase variable is not working */
        /* background-color: var(--primary-color, green); */
    }
</style>


### media query 
1. max-width:: big size media fast then small size media
2. min-width:: small size media fast then big size media

 <div class="div1"> </div>

<style type="text/css">
    :root {
        --primary-color: red
    }

    .div1 {
        background-color: var(--primary-color);
        height: 250px;
        width: 250px;
    }

    @media screen and (max-width:600px) {
        :root {
            --primary-color: green
        }
    }
</style>


#### Typical Device Breakpoints
There are tons of screens and devices with different heights and widths, so it is hard to create an exact breakpoint for each device. To keep things simple you could target five groups:

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}

--For specific device css load
<link rel="stylesheet" media="screen and (max-width: 600px)" href="main.css">



### flex-box


Flexbox is a layout module that was introduced in July 23rd of 2009. It is supported in all web browsers.

Instead of using a float to create layouts by floating elements to the left or the right, flexbox allows you to create layouts by aligning items to a single axis. The axis can be horizontal or vertical. It is best used for distributing space for items in the same axis.

Create a parent container, the flex-container.

Once the parent container is created, items inside of the parent container will become child elements, the flex-item's.


`row` is the default value flex-direction is set to.
`row-reverse`
`column`changes the direction vertically.
`column-reverse`

1. Flexbox = Flexible box
2. Easier to design flexible layout
3. na hassale of using float & positioning
4. one dimension either in row or column
5. by default flex-direction: row


<style type="text/css">
    .flex-container {
        background-color: yellowgreen;
        display: flex;

        flex-flow: wrap row;
        /* OR
        flex-wrap: wrap;
        flex-direction: column; */

        justify-content: center;
        /* center/space-between/start/end/ */

        height: 300px;
        align-items: flex-start;
        /* center/flex-end/flex-start */
    }

    .flex-container>div {
        width: 100px;
        background-color: tomato;
        font-size: 35px;
        margin: 10px;
        padding: 20px;
    }
   
</style>

<div class="flex-container">
    <div class="div1">div1</div>
    <div class="div2" style="flex-basis: 150px">div2</div>
    <div class="div3">div3</div>
    <div class="div4">div4</div>
    <div class="div5">div5</div>
    <div class="div6">div6</div>
    <div class="div7">div7</div>
    <div class="div8">div8</div>
</div>


### style order

<div class="order-style">
    <div class="div1" style="order: 2">div2</div>
    <div class="div1" style="order: 1">div1</div>
    <div class="div1" style="order: 3">div3</div>
    <div class="div1" style="order: 4">div4</div>
</div>

### text-shadow

<h1>Bangladesh</h1>

<style type="text/css">
    p {
        text-shadow: 4px 4px 3px gray;
    }
</style>


### box-shadow
<style type="text/css">
    div {
        height: 250px;
        width: 300px;
        border: 3px solid springgreen;
        background-color: gray;
        box-shadow: 10px 10px 10px indianred;
        /* x axis, y-axis, blur, background-color  */
    }
</style>

<div>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odio quaerat nobis ducimus nulla
</div>


### grid

<style type="text/css">
    .grid-container {
        background-color: orangered;
        padding: 10px;
        display: grid;
        grid-template-columns: auto auto auto auto;
        /* grid-template-rows: 70px; */

        /* grid-column-gap: 10px;
        grid-row-gap: 10px; */
        grid-gap: 10px 10px;
    }

    .grid-container>div {
        padding: 10px;
        border: 2px solid black;
        text-align: center;
        background-color: blueviolet;
        color: white;
        font-size: 25px;
    }

    .item1 {
        /* grid-column-start: 1;
        grid-column-end: 3; 
        grid-column: 1 / 4; */
        grid-column: 1 / span 3;

        /* grid-row: 1 / 4; */
        grid-row: 1 / span 3;
    }
</style>

<div class="grid-container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
    <div class="item8">8</div>
    <div class="item9">9</div>
    <div class="item10">10</div>
    <div class="item11">11</div>
    <div class="item12">12</div>
</div>

### tutorial 37 : Layout design | Grid Layout (part-2) Responsive grid layout

### tutorial 38 : Layout design | Grid Layout (part-3) Responsive grid layout

<header>
    <nav id="header-nav">
        Header
    </nav>
</header>

<main>
    <article>
        <section id="section1">section 1</section>
        <section id="section2">section 2</section>
        <section id="section3">section 3</section>
    </article>
</main>

<footer>
    <nav id="footer-nav1">footer nav 1</nav>
    <nav id="footer-nav2">footer nav 2</nav>
</footer>


### Horizontal & vertical center
Step 1:

<style type="text/css">
    .master-div {
        background-color: tomato;
        height: 400px;
        width: 400px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .child-div {
        background-color: violet;
        width: 200px;
        text-align: center;
    }
</style>

<div class="master-div">
    <div class="child-div">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, blanditiis?
    </div>
</div>

Step 2:
<style type="text/css">
    .master-div {
        background-color: tomato;
        height: 400px;
        width: 400px;

        position: relative;
    }

    .child-div {
        background-color: violet;
        width: 200px;
        text-align: center;
        
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>


<div class="master-div">
    <div class="child-div">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, blanditiis?
    </div>
</div>


### linkable button

<style type="text/css">
    button {
        border-radius: 5px;
        padding: 5px;
        border: 2px solid gray;
        color: rgb(92, 92, 204);
    }
</style>

<button class="btn" onclick="window.open('https://www.facebook.com/')">
    <i class="fab fa-facebook fa-2x"></i></button>




### Dropdown menu

<style type="text/css">
* {
    margin: 0 auto;
}

.navbar {
    background-color: rgb(23, 144, 165);
    padding: 1.5%;
    color: white;
}

.navbar a {
    text-decoration: none;
    padding: 7px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
}

.dropdown-container {
    display: inline;
    position: absolute;
}

.dropdown-container:hover .dropdown-content {
    display: block;
}

.dropdown-content {
    background-color: lightslategray;
    position: relative;
    top: 12px;
    left: 0px;
    text-align: left;
    display: none;
}

.dropdown-content a {
    display: block;
}

.dropdown-content a:hover {
    background-color: gray
}
</style>


<div class="navbar">
    <a href="#">Home</a>
    <a href="#">About Me</a>
    <div class="dropdown-container">
        <a href="#">Tutorial</a>
        <div class="dropdown-content">
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">Bootstrap</a>
        </div>
    </div>
</div>



### display vs visibility vs opacity

## display:none removes the element from the normal flow of the page, allowing other elements to fill in.

## visibility:hidden leaves the element in the normal flow of the page such that is still occupies space.

Example: 
1st <a href="http://example.com" style="display: none;">unseen</a> link.
<br />
2nd <a href="http://example.com" style="visibility: hidden;">unseen</a> link.
<br />
3rd <a href="http://example.com" style="opacity: 0;">unseen</a> link.

output:
1st link
2nd      link
3rd      link