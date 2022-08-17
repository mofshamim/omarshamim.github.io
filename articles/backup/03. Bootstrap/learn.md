### Why do we need Boostrap:

Faster web development
create responsive designs easily

### How to link bootstrap in HTML

### Step 1:
Download Compiled CSS and JS

### Step 2:
Download Compiled CSS and JS

OR

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>


### Inline Element vs Block Element
## Inline Element
Get only required width & height
-- by default : Button

## Block Element : 
Get full size screen width  
1. by default : Div



### Package managers 
### npm
Install Bootstrap in your Node.js powered apps with the npm package:

npm install bootstrap

### yarn
yarn add bootstrap

### NuGet
If you develop in .NET, you can also install and manage Bootstrap’s CSS or Sass and JavaScript using NuGet:

Install-Package bootstrap
Install-Package bootstrap.sass


### unminify site is used for readable bootstrap code

### Sass stands for Syntactically Awesome Stylesheet
Sass is an extension to CSS

$primary_1: #a2b9bc;

.main-header {
  background-color: $primary_1;
}

### container
Default container
Our default .container class is a responsive, fixed-width container, meaning its max-width changes at each breakpoint.

margin:0 auto;

<div class="container">
  <!-- Content here -->
</div>

Fluid containers
Use .container-fluid for a full width container, spanning the entire width of the viewport.
<div class="container-fluid">
  ...
</div>

### Grid system
Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.

The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent .container.

<div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>


### SCREEN SIZE
xs <576px	
sm ≥576px	
md ≥768px	
lg ≥992px	
xl 1200px	
xxl ≥1400px

### Each column get number of 4 columns

<div class="container">
  <div class="row">
    <div class="col-4">
      Column
    </div>
    <div class="col-4">
      Column
    </div>
    <div class="col-4">
      Column
    </div>
  </div>
</div>

### responsive for different size screen: col-lg-3 col-md-6  col-sm-12
1. each div get number of 3 columns when
screen size large
1. each div get number of 6 columns when
screen size medium
1. each div get number of 12 columns when
screen size small


### colors and spacing - padding, Margin

## colors: 
primary(blue)
success(green) 
info(light blue)
warning(orange) 
danger(red) 
secondary(grey) 
white
dark
light

## Background & text color set format
bg-colorName
text-colorName

## Padding
p-0 (no padding) 
p-1(0.25rem) 
p-2(0.5rem) 
p-3(1rem) 
p-4(1.5rem) to p-5

## padding short format
padding-top = pt-1
padding-bottom = pb-1
padding-left = pl-1
padding-right = pr-1
padding-top padding-bottom: py-value 
padding-left right-bottom: px-value; 


## responsive padding: p-3 p-lg-5
1. each segment get number of 3px padding when screen size less than large
1. each segment get number of 5px padding when screen size large

## margin short format
margin-top = mt-1
margin-bottom = mb-1
margin-left = ml-1
margin-right = mr-1

## responsive margin: m-3 m-lg-5
1. each segment get number of 3px margin when screen size less than large
1. each segment get number of 5px margin when screen size large


### border and image

## border
<h1 class="border border-primary rounded-bottom">Bangladesh</h1>
1. to set border:  border
2. to set border color:  border-primary
3. to set border curve:  rounded-bottom


## image
responsive image: img-fluid
thumbnail image: img-thumbnail

<src src="" class="img-fluid rounded-circle border d-block m-auto"></src>
1. responsive image: img-fluid
2. for circle image: rounded-circle
3. for image center: d-block m-auto

### Text and font
Bootstrap 4 Default settings

style="font-size: 16;line-height: 1.5;"
style="font-family: Arial, Helvetica, sans-serif;"

## Text
text-left 
text-right 
text-center 
text-justify

## responsive text-alignment: 
text-sm-left 
text-md-center

## text format
text-lowercase 
text-uppercase
text-capitalize

## text-decoration
text-decoration-none

## text-muted and small
<h1 class="small text-muted" class="font-">Bangladesh</h1>


### Font Awesome:

1. go to cdn link
https://cdnjs.com/libraries/font-awesome
2. copy a cdn link
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
3. then use fontawesome icon
  <i class="fas fa-hands-helping"></i>

## Font

<h1 style="font-weight: bold;" class="font-">Bangladesh</h1>

<h1 style="font-weight: lighter;" class="font-">Bangladesh</h1>

<h1 class="small text-muted" class="font-">Bangladesh</h1>

## Font align
<h1 class="text-left text-md-center">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, odio.
</h1>
1. test align remain left when screen size less than midium


### Icon
<i class="fas fa-hands-helping fa-2x
bg-primary text-white rounded-circle 
p-2  mb-3">
</i>


### dismissible alert : bootstrap 5 new features. replacement of jumbotron 

<div class="alert alert-danger alert-dismissible" role="alert">
  <button
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  ></button>
   Learn bootstrap 5
</div>


### blockquote and abbreviations

<div class="col-lg-4">
  <blockquote class="blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste autem doloribus debitis accusamus rem
          excepturi. Work in <abbr title="Southtech Limited">STL</abbr></p>
      <footer class="blockquote-footer">
          Md. omar Faruque in <cite>Soutech Limited</cite>
      </footer>
  </blockquote>
</div>

### button, button group, list group


<button class="btn btn-primary mb-2"> CV Download</button>
<button class="btn btn-primary btn-sm btn-block mb-2""> CV Download</button>
<button class=" btn btn-outline-primary mb-2""> CV Download</button>
<a href="#" class="btn btn-outline-primary mb-2">Visit My website</a>

<br>
<div class="btn-group">
    <button class="btn btn-primary mb-2"> CV Download</button>
    <button class="btn btn-success mb-2"> CV Download</button>
</div>

<br>
<div class="student-list">
    <ul class="list-group">
        <li class="disabled list-group-item bg-primary text-white">Md. Omar Faruque Shamim</li>
        <li class="list-group-item bg-success text-white">Md. Solaiman Shakil</li>
        <li class="list-group-item bg-danger text-white">Md. Abdus Salam</li>
        <a href="#" class="list-group-item list-group-item-action bg-warning text-white">Md. Abdus Salam</a>
    </ul>
</div>

### Pagination

<footer class="bg-dark">
  <ul class="pagination py-3 justify-content-center">
      <li class="page-item">
          <a href="#" class="page-link">
              1
          </a>
      </li>
      <li class="page-item">
          <a href="#" class="page-link">
              2
          </a>
      </li>
      <li class="page-item">
          <a href="#" class="page-link">
              3
          </a>
      </li>
  </ul>
</footer>

### Collapse

 <!-- jQuery,  Popper.js, Bootstrap JS is required -->

<a href="#demo" data-toggle="collapse">Learn more</a>
<div id="demo" class="collapse">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, neque?</p>
</div>


### Navigation menu

<style>
    li:hover {
        text-decoration: underline;
    }
</style>

 <header class="bg-primary">
    <div class="row">
        <div class="col-lg-5">
            <h3 class="text-white text-left px-2 py-2">Lear Asp.Net</h3>
        </div>
        <div class="col-lg-7">
            <ul class="nav justify-content-start py-2">
                <li class="nav-item"><a class="nav-link text-white" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#">Tutorial</a></li>
            </ul>
        </div>
    </div>
</header>

### Toggleable dynamic tab and pill

<main>
<div class="other-section">
 <!-- This code is for pill -->
  <!--  
  <ul class="nav nav-pills">
      <li class="nav-item"><a data-toggle="pill" class="nav-link active" href="#edu">Education</a></li>
      <li class="nav-item"><a data-toggle="pill" class="nav-link" href="#skill">Skill</a></li>
      <li class="nav-item"><a data-toggle="pill" class="nav-link" href="#hobby">Hobby</a></li>
  </ul>
  -->

  <!-- This code is for tab -->
  <ul class="nav nav-tabs">
      <li class="nav-item"><a data-toggle="tab" class="nav-link active" href="#edu">Education</a></li>
      <li class="nav-item"><a data-toggle="tab" class="nav-link" href="#skill">Skill</a></li>
      <li class="nav-item"><a data-toggle="tab" class="nav-link" href="#hobby">Hobby</a></li>
  </ul>
 

  <div class="tab-content">
        <div id="edu" class="tab-pane active"><p>1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas deserunt nam reprehenderit rerum magni quos quod laudantium ducimus harum?</p></div>
        <div id="skill" class="tab-pane fade"><p>2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas deserunt nam reprehenderit rerum magni quos quod laudantium ducimus harum?</p></div>
        <div id="hobby" class="tab-pane fade"><p>3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas deserunt nam reprehenderit rerum magni quos quod laudantium ducimus harum?</p></div>
  </div>
</div>
</main>

###  Navbar

 <header>
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <a href="#" class="navbar-brand">
            <img src="http://www.studywithanis.com/wp-content/uploads/2017/01/logo.png" alt="logo"
                style="width: 50px;">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Tutorial</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About Me</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
</header>

### Card 

 <div class="col-lg-3">
      <div class="card text-center">
          <img class="card-img-top" src="http://www.studywithanis.com/wp-content/uploads/2018/01/ICT-Cover.jpg" alt="card image">
          <div class="card-body">
              <h4 class="card-title">HSC ICT</h4>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, praesentium?</p>
              <a class="card-link stretched-link" target="_blank" href="http://www.studywithanis.com/#tutorial">Visit this playlist</a>
          </div>  
      </div>
  </div>

### Table

<table class="table table-bordered table-hover text-center table-striped">
  <caption>
    My Education
  </caption>
  <thead style="background-color: darkseagreen">
    <tr>
      <th scope="col">Qualification</th>
      <th scope="col">Institution</th>
      <th scope="col">Passing Year</th>
      <th scope="col">Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-primary">
      <th scope="row">SSC</th>
      <td>SingerKatch High School and College</td>
      <td>2006</td>
      <td rowspan="2">3.44 / 5.00</td>
    </tr>
    <tr class="table-secondary">
      <th scope="row">HSC</td>
      <td>SingerKatch High School and College</td>
      <td>2008</td>
    </tr>
    <tr>
      <th scope="row">BSc in CSE</td>
      <td>Leading University</td>
      <td>2017</td>
      <td>3.92 / 4.00</td>
    </tr>
  </tbody>
</table>

### Carousel

<style>
      #feedback {
          background: #0d0442;
          padding: 7% 10%;
      }

      .hr-style {
          border: 5px dotted white;
          border-bottom: none;
          width: 50px;
      }

      .carousel-item {
          padding: 5% 15%;
          text-align: center;
          font-style: italic;
      }

      .feedback-img {
          width: 120px;
          height: auto;
      }

      .carousel-indicators {
          bottom: -20px;
      }
</style>


<section id="feedback" class="text-white">
    <div class="section-title">
        <h3 class="text-center">Feedback</h3>
        <hr class="hr-style">
    </div>

<div class="row">
    <div class="col-lg-12">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000"
            data-pause="hover">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <p>Item1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime
                        provident amet fugiat, repellat sunt?</p>
                    <img class="feedback-img rounded-circle mb-3" src="" alt="">
                    <h6>Anisul Islam</h6>
                </div>
                <div class="carousel-item">
                    <p>Item2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime
                        provident amet fugiat, repellat sunt?</p>
                    <img class="feedback-img rounded-circle mb-3" src="" alt="">
                    <h6>Anisul Islam</h6>
                </div>
                <div class="carousel-item">
                    <p>Item3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime
                        provident amet fugiat, repellat sunt?</p>
                    <img class="feedback-img rounded-circle mb-3" src="" alt="">
                    <h6>Anisul Islam</h6>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>
</section>


### badge

<h2>
  Bootstrap5 video <span class="badge bg-secondary rounded-pill">New</span>
</h2>

<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>

### tooltip

<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right"
    title="by clicking sign up you will be registered">
    sign up
</button>


### progress

<div class="progress mt-3">
    <div class="progress-bar bg-success w-75"
      role="progressbar"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100">
      75%
  </div>
</div>


### float, clearfix

<div class="clearfix">
  <div id="left-div" class="bg-primary float-start w-50">
    <h2>Left div</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
      veritatis, fuga voluptatibus iure incidunt reiciendis temporibus
      tenetur quidem voluptates.
    </p>
  </div>

  <div id="right-div" class="bg-secondary float-end w-25">
    <h2>right div</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
      veritatis, fuga voluptatibus iure incidunt reiciendis temporibus
      tenetur quidem voluptates.
    </p>
  </div>
</div>

<div class="bg-success">
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit a dicta
    quibusdam illo dignissimos voluptas? Deserunt quae magni delectus
    placeat.
  </p>
</div>


### svg

<button class="btn btn-primary">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-alarm"
    viewBox="0 0 16 16"
  >
    <path
      d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
    />
    <path
      d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
    />
  </svg>

  Alarm
</button>



### Display: none, block, inline, inline block, flex, grid, table


## display: none 
--> clear button can not display
<button class="d-block">Save</button>
<button class="d-none">Clear<button>

## display: block 
-- convert inline element to block element
<button class="d-block">Save</button>
<button class="d-block">Clear<button>

## display: inline
-- convert block element to inline element
-- d-inline: bg color/padding is not working
<div class="bg-primary d-inline">
    Div 1
</div>
<div class="bg-success d-inline">
    Div 2
</div>

## display: d-inline-block
-- convert block element to inline element
-- d-inline-block: bg color/padding is working
<div class="bg-primary d-inline-block">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, facilis.</p>
</div>
<div class="bg-success d-inline-block">
    <p>Lorem ipsum dolor sit amet.</p>
</div>




## display: flex
::: d-flex flex-row-reverse 
::: flex-sm-column flex-md-row
::: ustify-content-end


1. by default flex row wise. but we can transfer it to column wise

2. justify-content-end: If row wise flex, then justify-content will work x -axis 
3. justify-content-end: If column wise flex, then justify-content will work y -axis 
4. justify-content-evenly: each element get equal size(left and right) spaces


5. align-items-end: by default align-items
y-axis 

6. If we want to exact center Point, then we should use both
justify-content-center and align-items-center

7. align-self-start: if we want to work with individual item


<div class="card-container p-2 bg-success 
d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="card w-25 align-self-start">
        <div class="card-body">
            <h4 class="card-title">
                Card Title 1
            </h4>
            <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis accusantium
                amet?
            </p>
        </div>
    </div>
    <div class="card w-25">
        <div class="card-body">
            <h4 class="card-title">
                Card Title 2
            </h4>
            <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis accusantium
                amet?
            </p>
        </div>
    </div>
    <div class="card w-25 align-self-end">
        <div class="card-body">
            <h4 class="card-title">
                Card Title 3
            </h4>
            <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis accusantium
                amet?
            </p>
        </div>
    </div>
</div>





### :::::BS5 :::::### 

### Positioning: static, fixed, sticky, absolute, relative

1. static: By default position 

<div class="bg-success position-static"      style="height: 100px;">
    <button>click me</button>
</div>

2. fixed: element(button) will be fixed, even cursor is moving to up/down. 
-- It only get required width

<div class="bg-success position-fixed w-100" style="height: 100px;">
    <button>click me</button>
</div>
<div class="bg-primary position-static">
    <p>
        lorem 1000
    </p>
</div>


3. sticky: 
-- It get full size width
<div class="bg-success position-sticky" style="height: 100px;">
    <button>click me</button>
</div>
<div class="bg-primary position-static">
    <p>
        lorem 1000
    </p>
</div>

4. relative and absolute:
<div class="bg-success position-relative" style="height: 100px;">
    <button class="position-absolute start-50 top-50 translate-middle">click me</button>
</div>


### modal

 <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
    Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

