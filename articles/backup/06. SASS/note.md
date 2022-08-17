### SASS
Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports, inheritance and more. It also helps to keep things organised and allows you to create style sheets faster.

1. sass has some special features that do not exist in CSS

2. to make our code simpler & more maintainable

3. Dont repeat youself. (we can extend css rules)

4. Free to download


### how to install and SASS work
1. Install live sasss compiler in vscode
2. Click F1 to start or stop to sass watch
3. create a file --> demo.scss
4. Browser does not support directly SASS files
3. sasss compiler (start/stop watching live comilation) convert demo.scss code to demo.css files


### variable declare

```js
 <header>Learn ASP.NET</header>

// color variable declaration
$header-bg-color: black;
$header-color: white;

header{
    background-color: $header-bg-color;
    color: $header-color;
    height: 80px;
}
```

### nesting css

```js
<header>
    <h1>Learn ASP.NET</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>


nav{
    margin-top: 15px;
    ul{
        list-style-type: none;
        li{
            display: inline-block;
            a{
                display: inline-block;
                text-decoration: none;
                color: white;
                padding: 15px;
            }
            a:hover{
                color: tomato;
            }
        }
    }
}
```

### import

```js

1. create a _reset.scss file
// browser initialization
* {
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
}

// color variable declaration
$header-bg-color: black;
$header-color: white;

header{
    background-color: $header-bg-color;
    color: $header-color;
}


2. import _reset.scss into main.scss

@import "reset";

```


### mixin & include and parameter pass
1. A group of CSS declaration that can be reused throughout the style sheet.

```js
@mixin para-style($size, $style) {
    font-size: $size;
    text-align: $style;
    color: red
}

#about p{
    @include para-style(18px, center);
}

```


### Extend & inheritance

<input class="btn-download" type="button" value="download" />

<input class="btn-learn" type="button" value="learn more" />

```js

.btn{
    border: none;
    padding: 15px 30px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
}

.btn-download{
    @extend .btn;
    background-color: aquamarine;
}

.btn-learn{
    @extend .btn;
    background-color: green;
}

```


### if Else

```css

<section id="about">
    <h2>About</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
</section>

@mixin setFontSize($value) {
    @if($value == small){
        font-size: 12px;
    }
    @else if($value == medium){
        font-size: 25px;
    }
    @else if($value == large){
        font-size: 20px;
    }
}

#about p{
    background-color: aquamarine;
    @include setFontSize(medium);
}


```


### loop in sass, for loop, while loop

```css
<div class="row">
    <div class="col-4">DIV 1</div>
    <div class="col-4">DIV 2</div>
    <div class="col-4">DIV 3</div>
</div>

[class*="col-"]{
    float: left;
}

.row::after{
    clear: both;
    content: "";
    display: table;
}

@for $i from 1 through 4{
    .col-#{$i}{
        width: 100% / 12 * $i;
    }
}

or 

$i: 1;
 
@while $i < 13 {
    .col-#{$i}{
        width: 100% / 12 * $i;
    }
    $i: $i + 1;
}


```

### map

```css
<div class="row">
    <div class="col-4 red-text">DIV 1</div>
    <div class="col-4 green-text">DIV 2</div>
    <div class="col-4 blue-text">DIV 3</div>
</div>

@each $color in red,green,blue{
    .#{$color}-text{
        color: $color;
    }
}

#OR 

$colors:(
    color1:red,
    color2:green,
    color3:black
);

@each  $key,  $color in $colors{
    .#{$color}-text{
        color: $color;
    }
}



```


