###  Multiple text change  

```html
<h1>Header tag</h1>
<p>Paragraph tag</p>

```

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

$("h1, p").text("header & text change.");

```


### Text Manipulation

## html function
```js
<p>Header tag</p>
 $("p").html("<b>Goodbye</b>");

```

## append function
```js
<p>Header tag </p>

 $("p").append("<b>Goodbye</b>");
```

## prepend function
```js
<p> Header tag </p>

 $("p").prepend("<b>Goodbye</b>");

```


##  after/ before
```js
 <p id="para1"> Paragraph tag 0</p>

 var para2 = $("<p></p>").text("Paragraph tag 1");
// $("#para1").before(para2);
$("#para1").after(para2);

```


### attribute

```js
    <a href="https://www.google.com/">
        Google
    </a>

    var attribute = document.querySelector("a")
        .getAttribute("href");
    console.log(attribute);

    //jQuery
    attribute = $("a").attr("href");
    console.log(attribute);

    attribute = $("a").removeAttr("href");
    console.log(attribute);

    attribute = $("a").attr("href", "https://web.whatsapp.com/");
    console.log(attribute);

```


### css 

Example 1
```js
<h1>Bangladesh</h1>

$("h1").css("color", "red");
$("h1").css("font-style", "italic");

OR 

$("h1").css({
    "color": "red",
    "font-style": "italic"
});

```


Example 2
```js
<style>
    .style1 {
        color: red;
        font-style: "italic"
    }

    .style2 {
        font-size: 25px;
    }
</style>


<h1>Bangladesh</h1>

  $("h1").addClass("style1 style2")

```


### Event Listener


Example 1 
```js
<style>
    .style1 {
        color: red;
    }
</style>

<h1>Bangladesh</h1>
<button>Save me</button>

$("button").click(function () {
    $("h1").text("Click me");

    //style change
    $("h1").toggleClass("style1");
});

```

Example 12
```js
    <h1>Button</h1>
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>

    $("button").click(function () {
        $("h1").text(this.innerHTML);
    });

    OR

    $("button").on("click", function () {
        $("h1").text(this.innerHTML);
    });

    OR

    $("button").on("mouseover", function () {
        $("h1").text(this.innerHTML);
    });


```


### 

## Example 1: val
```js
<input type="text" name="userName" id="userName">

var userName = $("#userName").val();
```

## Example 2: hide/show
```js
<h1>Shamim</h1>

$("h1").hide();
$("h1").show();

```

## Example 3: toggle
```js

<div id="div1">
    <P>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sunt rerum voluptate eveniet! Deleniti perspiciatis
    </P>
</div>

$("button").click(function () {
    $("#div1").toggle(2000);

    $("#div1").fadeOut(2000).fadeIn(2000;
    $("#div1").fadeToggle(2000);
    $("#div1").fadeTo(2000, 0.4);
    $("#div1").slideDown(2000).slideUp(2000);
    $("#div1").slideToggle(2000);
});

```

## animate

```js
    //only numeric value property can use
    $("#div1").animate({
        opacity: "0.5",
        height: "400px",
        marginLeft: "50px"
    }, 2000);

```

## eval() 
1. calculate mathamatical equition (123+3)

```js
var result = eval($("#result").val());
```



