# Introduction
- HTML means Hyper Text Markup Language
- HTML is used to structure a webpage
- CSS is used to style a webpage
- HTML is not a programmin language.
- It is a Markup language.
- It consists of several Markup tag by which we can display text, image, video and so on.

# Advantage of HTML
- Easy to learn
- Free
- All browser support
- It is not a case sencetive 
- Loading time fast
- Attached text, Image, Audio, video

# Disadvantage of HTML
- can not create dynamic page

# Tag
```html
Tag 2 Types: 
i. Container Tag 
   <p></p>, <html></html>
ii. Empty Tag  
    <br/>, <hr/>

Example: 
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <body>
        <p></p> 
        <h1></h1>
    </body>
</html>

```

# Element:
- This context is currently unavailable

# Attribute:
- To increase efficency 
```html
<body bgcolor="green">

</body>

<h1 align="center">Bangladesh </h1>
<h1 align="justify">Bangladesh </h1>
<h1 align="right">Bangladesh </h1>
<h1 align="left">Bangladesh </h1>
```

# Basic structure of HTML
```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="">
        <script src=""></script>
    </head>
    <body>
        <p></p> 
        <h1></h1>
    </body>
</html> 
```

# DOCTYPE 
- DOCTYPE declaration refers to a document type definition (DTD).
- The W3C (World Wide Web Consortium) wrote a set of web standards to handle this situation. All browser vendors and web developers should adhere to these standards. This would ensure that websites would render well across browsers.
- The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.
- All HTML need to have a DOCTYPE declared. The DOCTYPE is not actually an element or HTML tag. It lets the browser know how the document should be interpreted, by indicating what version or standard of HTML (or other markup language) is being used.

# Doctype syntax 
```html
1. Doctype syntax for HTML5 and beyond
    <!DOCTYPE html>

2. Doctype syntax for strict HTML 4.01:
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

3. Doctype syntax for transitional HTML 4.01:
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

4. Doctype syntax for frameset HTML 4.01:
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

# Meta tag
- We used meta tag for SEO
```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Free html tutorial" />
<meta name="keywords" content="html,HTML" />
<meta name="author" content="Md. Omar Faruque Shamim" />
```

# Horizontal Tag
```html
<hr/>
```

# Paragraph Tag
```html
 <p></p> 
```

# Style
- Style attribute is back dated features for HTML. Now you should use css style.
- To get color pick from website, please visit. https://htmlcolorcodes.com/ 
```html
<h1 style="text-align: center;color: red;">Bangladesh</h1>
<h1 style="text-align: center;color: #FF5733">Bangladesh</h1>
<h1 style="text-align: center;color:rgb(255,12,45)">Bangladesh</h1>
```

# Text Formating 
```html
1. Bold
    <b></b>
    <strong></strong>
2. Italic format
    <i></i>
    <emp></emp>
3. Underline text
    <u></u>
4. Super Script (Upper)
     <sup>2</sup>
5. Sub script(Bottom)
    <sub>2</sub>
6. For writting code
    <pre>
        <html>
            <head>
                <title></title>
            </head>
            <body>
                <p></p> 
                <h1></h1>
            </body>
        </html>     
    </pre>
7. For wirting line middile on the text or Deleted Text
    <strike></strike>
    <del></del>
```

# Mark Tag 
- This tag is used for <mark> yellow background </mark>
```html
This tag is used for <mark> yellow background </mark>
```

# HTML Validator
- Please visit https://validator.w3.org/ for validate your HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>
```


# Miscellaneous 
- This portion will be arranged very soon..
```html

How to write Bangla:
html file save using Unicode format 


HTML Entity, pre tag & comment
symbol: trademark, copyright, angle bracket, space, 

space = &nbsp; (next before space)
copyright = @copy;
less than = &lt;
greated than = &gt;
comment = <! comment will be here>


Symbol & Emoji
We should use meta tag for writing emoji
<meta charset="UTF-8">

go to link 
unicode-table.com

copy than past emoji 
or
Use HTML code
&#129409



Font Style

go to 
develoeper.mozila.org site
than search font family.

I Love Bangladesh

First we used font tag & we used 3 attribute in font tag.
we should not used this font tag

<font color="red" size="28px" face="fantacy" >
I Love Bangladesh
</font>

New technology:
<p style="background-color: blueviolet; color: white;font-size: 32px;
font-family: Verdana, Geneva, Tahoma, sans-serif;">
Learn font 
</p>

```

# HTML Order List
<ol>
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ol>

```html
<ol>
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ol>
```

# HTML Unorder List
<ul>
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ul>

```html
<ul>
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ul>
```

# HTML Order list using Type:
<ol type="a">
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ol>

```html
<ol type="a">
<ol type="A">
<ol type="I">

<ol type="a">
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ol>
```

# Unorder list using Type:
<ul type="square">
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ul>

```html
<ul type="square">
<ul type="circle">


<ul type="square">
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ul>
```


# Image Tag

```html
<img 
src="" 
height="" 
width="" 
title="Shamim" 
alt="Image is not found" 
align="right"
border="20"
hspace="100" 
vspace="200"
/> 
```

# Iframe
- we can load others source video or application.
```html
<iframe src="youtube.com" height="350px" width="600px"></iframe>
```

# Hyperlink
```html
<a href="" target="blank"></a>
```

# Div Tag
- div is used for section create.
```html
<div id="div1" style="">

</div>
```

# Table

```html
tr = table row
td = table data
th = table header

<table>
    <caption>Student Details</caption>
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
```

# Table colspan
```html
<tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
</tr>
<tr>
    <td>Md. Omar Faruque Shamim</td>
    <td></td>
    <td></td>
</tr>
```

# Table rowspan
```html
<tr>
    <th>Name</th>
    <th>Telephone</th>
</tr>
<tr>
    <td>Md. Omar Faruque Shamim</td>
    <td rowspan="2">01740210517</td>
</tr>
<tr>
    <th>Md. Soliman Shakil</th>
</tr>
```

# Input Feild
```html
<input type="text" />
<input type="password" />
<input type="radio" />
<input type="checkbox" />
<input type="number" />
<input type="button" />
<input type="submit" />
<input type="image" />
<input type="hidden" />
<input type="tel" />
<input type="time" />
<input type="month" /> 
```

# HTML Form 

<form>
    <div>
        <label for="fullName">
            Full Name:
        </label>
        <!-- <input  readonly type="text" name="fullName" id="fullName" /> -->
        <input required type="text" name="fullName" id="fullName" />
    </div>
    <br /> <!--  NOT recomended -->
    <div>
        <label for="email">
            Email:
        </label>
        <input type="email" name="email" id="email" />
    </div>
    <br />
    <div>
        <label for="password">
            Password:
        </label>
        <input type="password" name="password" id="password" />
    </div>
    <br />
    <div>
        <label for="dob">
            Date of Birth:
        </label>
        <input type="date" name="dob" id="dob" />
    </div>
    <br />
    <div>
        <label for="photo">
            Choose your photo:
        </label>
        <input type="file" name="photo" id="photo" />
    </div>
    <br />
    <div>
        <label for="gender">
            Gender:
        </label>
        <input type="radio" name="gender" id="gender" value="male" /> Male
        <input type="radio" name="gender" id="gender" value="female" /> Female
    </div>
    <br />
    <div>
        <label for="religion">
            Religion:
        </label>
        <input checked type="checkbox" name="religion" id="muslim" value="islam" /> Muslim
        <input type="checkbox" name="religion" id="hindu" value="hindu" /> Hindu
    </div>
    <br />
    <div>
        <label for="department">
            department:
        </label>
        <select name="department">
            <option value="CSE">CSE</option>
            <option value="CSE" selected>EEE </option>
            <option value="CSE">Civil</option>
        </select>
    </div>
    <br />
    <div>
        <label for="message">
            Message:
        </label>
        <br />
        <textarea cols="30" rows="10"></textarea>
    </div>
    <br />
    <div>
        <input type="submit" value="Register" />
        <input type="reset" value="Clear" />
        <input type="submit" disabled value="Login" />
    </div>
    <br />
</form>


```html
<form>
    <div>
        <label for="fullName">
            Full Name:
        </label>
        <!-- <input  readonly type="text" name="fullName" id="fullName" /> -->
        <input required type="text" name="fullName" id="fullName" />
    </div>
    <br /> <!--  NOT recomended -->
    <div>
        <label for="email">
            Email:
        </label>
        <input type="email" name="email" id="email" />
    </div>
    <br />
    <div>
        <label for="password">
            Password:
        </label>
        <input type="password" name="password" id="password" />
    </div>
    <br />
    <div>
        <label for="dob">
            Date of Birth:
        </label>
        <input type="date" name="dob" id="dob" />
    </div>
    <br />
    <div>
        <label for="photo">
            Choose your photo:
        </label>
        <input type="file" name="photo" id="photo" />
    </div>
    <br />
    <div>
        <label for="gender">
            Gender:
        </label>
        <input type="radio" name="gender" id="gender" value="male" /> Male
        <input type="radio" name="gender" id="gender" value="female" /> Female
    </div>
    <br />
    <div>
        <label for="religion">
            Religion:
        </label>
        <input checked type="checkbox" name="religion" id="muslim" value="islam" /> Muslim
        <input type="checkbox" name="religion" id="hindu" value="hindu" /> Hindu
    </div>
    <br />
    <div>
        <label for="department">
            department:
        </label>
        <select name="department">
            <option value="CSE">CSE</option>
            <option value="CSE" selected>EEE </option>
            <option value="CSE">Civil</option>
        </select>
    </div>
    <br />
    <div>
        <label for="message">
            Message:
        </label>
        <br />
        <textarea cols="30" rows="10"></textarea>
    </div>
    <br />
    <div>
        <input type="submit" value="Register" />
        <input type="reset" value="Clear" />
        <input type="submit" disabled value="Login" />
    </div>
</form>
```

# Audio & Video

```html
<audio controls>
    <source src="" type="audio/mpeg">
</audio>

<video height="400" width="600" controls>
    <source src="" type="video/mp4">
</video>


<video height="400" width="600" controls autoplay loop muted poster="poster.png">
    <source src="" type="video/mp4">
    <source src="" type="video/mp4">
    <source src="" type="video/mp4">
</video>
```

# SVG Image
- SVG: Scaleable vector graphics

<img height="250" src="images/happy.svg" />

```html
<img height="250" src="images/happy.svg" />
```

# Progress Bar
<ol>
    <li>
        HTML <progress min="0" max="100" value="70"></progress>
    </li>
    <li>
        CSS <progress min="0" max="100" value="25"></progress>
    </li>
    <li>
        Javascript <progress min="0" max="100" value="15"></progress>
    </li>
</ol>

```html
<ol>
    <li>
        HTML <progress min="0" max="100" value="70"></progress>
    </li>
    <li>
        CSS <progress min="0" max="100" value="25"></progress>
    </li>
    <li>
        Javascript <progress min="0" max="100" value="15"></progress>
    </li>
</ol>

```


# Sementic & non sementic Tag 
- Semantic tag should be used instead of div tag

```html
- HTML 5 sementic tag
    <header>, <nav>, <footer>, <menu>, <section>, <progress>, <figure>, <figcaption>
- Semantic tag/ Meaning full tag
    <p>, <h1><form>, <table>
- Non sementic tag/Meaningless tag 
    <div>, <span>

1. Semantic Example:
    <header>
        Header will be here....
    </header>
    <nav>
        Nav will be here....
    </nav>
    <main>
        <section>about me section</section>
        <section>contact me section</section>
        <section>carrer section</section>
    </main>
    <footer>
        footer will be here.....
    </footer>

2. Non semantic Example:
    <div class="header">
        Header will be here....
    </div>
    <div class="nav">
        Nav will be here....
    </div>
    <div class="main">
        <div>about me section</div>
        <div>contact me section</div>
        <div>carrer section</div>
    </div>
    <div id="footer">
        footer will be here.....
    </div>
```

# WHY HTML 5
1. More semantig tags

    <mark>Details & summary semantig tags</mark> 
    <style>
        details[open]>summary {
            background-color: aqua;
            color: Red;
        } 
    </style>
    <details>
        <summary>Summary Note. click here to see the details</summary>
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Magnam omnis veniam tempora
            dicta porro fuga, accusamus
            soluta distinctio ipsum.
    </details>
    <br/>

    <mark>Figure semantig tags</mark> 
    <figure>
        <img height="150" src="images/happy.svg" alt="list" />
        <figcaption>figure 1: list Image</figcaption>
    </figure>


```html
    <style>
        details[open]>summary {
            background-color: aqua;
        } 
    </style>

    <details>
        <summary>Summary here</summary>
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Magnam omnis veniam tempora
            dicta porro fuga, accusamus
            soluta distinctio ipsum a.
    </details>

    <figure>
        <img height="400" src="images/happy.svg" alt="list" />
        <figcaption>figure 1: list Image</figcaption>
    </figure>


```
2. Improve accessibility
3. More Form types
```html
    <input type="text" />
    <input type="password" />
    <input type="radio" />
    <input type="checkbox" />
    <input type="number" />
    <input type="button" />
    <input type="submit" />
    <input type="image" />
    <input type="hidden" />
    <input type="tel" />
    <input type="time" />
    <input type="month" /> 
```
4. Improve graphics & Media
5. Improve storage facilities. Previously we used cookies but HTML 5 give web storage
6. Remove few things
```html
    <font>
    <center>
    <strike>
    <frame>
    <frameset>
```

