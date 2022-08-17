# Table of Contents

- [Introduction](index.html)
- [Tag, Element & Attribute](#tag-element--attribute)
- [Basic Structure](#basic-structure)


## Introduction:
-----------------------------
HTML means Hyper Text Markup Language

HTML: How to structure a webpage
CSS: How to style a webpage


HTML is not a programmin language.
It is a Markup language.

It consists of several Markup tag by which we can display text, image, video and so on.

Advantage:
Easy to learn
Free
All browser support
It is not a case sencetive 
Loading time fast
Attached text, Image, Audio, video

Disadvantage:
can not create dynamic page


## Tag, Element & Attribute:
-----------------------------
Tag: 

```html
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

Tag 2 Types:
1. Container Tag
<p></p>/ <html></html>

2. Empty Tag:
<br/><hr/>


Element:


Attribute:
1. To increase efficency 

<body bgcolor="green>

</body>


## Basic Structure:
-----------------------------
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

DOCTYPE: 
-----------------------------
DOCTYPE declaration refers to a document type definition (DTD).

The W3C (World Wide Web Consortium) wrote a set of web standards to handle this situation. All browser vendors and web developers should adhere to these standards. This would ensure that websites would render well across browsers.



The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.

All HTML need to have a DOCTYPE declared. The DOCTYPE is not actually an element or HTML tag. It lets the browser know how the document should be interpreted, by indicating what version or standard of HTML (or other markup language) is being used.


1. Doctype syntax for HTML5 and beyond:
<!DOCTYPE html>

2. Doctype syntax for strict HTML 4.01:

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

3. Doctype syntax for transitional HTML 4.01:

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


4. Doctype syntax for frameset HTML 4.01:

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">



Head Tag:

<title>Document</title>

We used meta tag for SEO
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="description" content="Free html tutorial" />
<meta name="keywords" content="html,HTML" />
<meta name="author" content="Md. Omar Faruque Shamim" />

<link rel="stylesheet" href="style.css">
<script src="index.js"></script>

<style>
body{
    background-color: blueviolet;
}
</style>


Haeding Tag:
-------------------
<h1></h1>

attribute inside tag:
<h1 align="center">Bangladesh </h1>
<h1 align="justify">Bangladesh </h1>
<h1 align="right">Bangladesh </h1>
<h1 align="left">Bangladesh </h1>

Horizontal Tag:
-------------------
<hr/>

Paragraph Tag:
-------------------


STYLE:
--------------------
style attribute is back dated features for HTML. Now we should use style.

To get color pick from website, please visit..
htmlcolorcodes.com

 <h1 style="text-align: center;color: red;">Bangladesh</h1>

 <h1 style="text-align: center;color: #FF5733">Bangladesh</h1>

  <h1 style="text-align: center;color:rgb(255,12,45)">Bangladesh</h1>


TEXT FORMATTING:
---------------------
    <b>For Bold</b>
    <strong>For Bold</strong>
   
    <i>For italic format</i>
    <emp>For italic format</emp>

    <u>For underline Text</u>

    <sup>For Super Script(Upper)</sup>
    (A+B) <sup>2</sup>

    <sub>For sub script(Bottom)</sub>

    <pre>For writting code </pre>

<pre>
I love you
From My Heart
but still I belive
You are selfish bird
</pre>
 


    <strike>For wirting line middile on the text
    </strike>
    <del>Deleted Text, same as strike</del>


    This is <mark> SHAMIM(Yellow Bold)</mark>


HTML Validator:
-----------------------
please visit.
validator.w3.org

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

How to write Bangla:
------------------------
html file save using Unicode format 


HTML Entity, pre tag & comment
--------------------------------
symbol: trademark, copyright, angle bracket, space, 

space = &nbsp; (next before space)
copyright = @copy;
less than = &lt;
greated than = &gt;
comment = <! comment will be here>


Symbol & Emoji
----------------------
We should use meta tag for writing emoji
<meta charset="UTF-8">

go to link 
unicode-table.com

copy than past emoji 
or
Use HTML code
&#129409



Font Style
-------------------
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


HTML LIST:
--------------
Order list:
<ol>
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ol>

Unorder list:
<ul>
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ul>


Order list using Type:
<ol type="a">
<ol type="A">
<ol type="I">

<ol type="a">
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ol>

UnOrder list using Type:
<ul type="square">
<ul type="circle">


<ul type="square">
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
</ul>


HTML IMAGE :
---------------------
<img src="" height="" width="" border="20"
title="Shamim" align="" 
alt="Image is not found" 
align="right"
hspace="100" vspace="200"
/> 

iframe:
------------
we can load others source video or 
application.

<iframe src="youtube.com" height="350px" width="600px">
</iframe>

HTML Hyperlink:
-----------------------
    <a href="" target="blank"></a>

DIV:
------
div is used for section create.

<div id="div1" style="">

</div>


Table:
----------------
    <style>
        table {
            width: 300px;
            height: 200px;
            border: 1px solid black;
            /*border-collapse: collapse;  It is used for double border to single border*/
            border-spacing: 5px;
        }

        td,th {
            border: 1px solid black;
            padding: 15px;
        }

        tr {
            text-align: center;
        }
    </style>


    tr = table row
    td = table data
    th = table header

    <table>
        <caption>Student Details</caption>
        <thead>
            <tr>
                <th></th>
                <td></td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th></th>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th></th>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th></th>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>

colspan & rowspan :
---------------------------
<tr>
    <th>Name</th>
    <td colspan="2">Telephone</td>
</tr>
<tr>
    <th>Md. Omar Faruque Shamim</th>
    <td></td>
    <td></td>
</tr>

<tr>
    <th>Name</th>
    <td>Telephone</td>
</tr>
<tr>
    <th>Md. Omar Faruque Shamim</th>
    <td rowspan="2">01740210517</td>
</tr>
<tr>
    <th>Md. Omar  Shamim</th>
</tr>


FORM:
-----------
  <!-- Text Feild -->

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


Audio & Video:
-----------------
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


SVG & Progress Bar:
---------------------

<label>
    SVG: Scaleable vector graphics
</label>
<img height="250" src="happy.svg" />

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

WHY HTML 5
-------------
1. more semantig tags
2. Improve accessibility
3. More Form types
4. Improve graphics & Media
5. Improve storage facilities.
6. Remove few things

Semantig tags
------------
2 Types
-- Non sementic tag/Meaningless tag:
<div>
<span>
-- Semantic tag/ Meaning ful tag:
<p>, <h1><form>, <table>
 
 HTML 5 Semantic tag:
 <header>
 <nav>
 <footer>
 <menu>
 <section>
 <progress>
 <figure>
 <figcaption>



Non semantic Example:

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


semantic Example:

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

NOTE: semantic tag should be used instead of div tag


3. More Form types:
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

4. Improve graphics & Media
<audio>
<vidio>


5. Improve storage facilities
previous we use cookies
but
HTML 5 give web storage


6. Remove few things
<font>
<center>
<strike>
<frame>
<frameset>


Details  html5 semantic tags:
--------------------------------
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


figure html5 semantic tags:
--------------------------------
<figure>
    <img height="400" src="happy.svg" alt="list" />
    <figcaption>figure 1: list Image</figcaption>
</figure>




