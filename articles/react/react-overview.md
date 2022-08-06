# What is React?
- React is a JavaScript library.
- React is not a framework (unlike Angular).
- React is an open-source project created by Facebook.
- React is used to build user interfaces (UI) on the front end.
- React is the view layer of an MVC application (Model View Controller)

# React prerequisites
- Basic familiarity with HTML & CSS.
- Basic knowledge of JavaScript and programming.
- Basic understanding of the DOM.
- Familiarity with ES6 syntax and features.
- Node.js and npm installed globally.

# Create First React App

```js
npx create-react-app react-overview
cd react-overview
npm start
```
Step 1:
- Once you run this command, a new browser window will popup at localhost:3000 with your new React app.
- If you look into the project structure, you'll see a /public and /src directory, along with the regular node_modules, .gitignore, package-lock.json, package.json and README.md.
- In /public, our important file is index.html. The entry point for our app will be the root div element
```html 
<div id="root"></div> 
```
- The /src directory will contain all our React code.
- Go ahead and delete all the files out of the /src directory, and we'll create our own boilerplate file. We'll just keep APP.css, App.js, index.css, index.js and reportWebVitals.js
- Remove all the css code from APP.css and index.css. We will write our necessary style in future.

Step 2: Copy and paste the following code into index.js.
- React - the React top level API
- React DOM - adds DOM-specific methods
- reportWebVitals - measuring performance in your app
- We're going to use the React DOM render() method to render the App class into the root div in our index.html.
 ```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//css file import
import './index.css';
//component import
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app
reportWebVitals();
 ```

 Step 3:
 Copy and paste the following code into App.js.
 - You'll notice that we use className instead of class. This is our first hint that the code being written here is JavaScript, and not actually HTML.
 - We're going to use ES6 functions/classes to create a React component called App
 - We export the component as App and load it in index.js.
- render() method, the only required method in a class component, which is used to render DOM nodes.
- Inside the return, we're going to put what looks like a simple HTML element. This is called JSX.
```js
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

export default App
 ```
Step 4:
- If you go back to localhost:3000, you'll see "Hello, React!". We have the beginnings of a React app now.


# React Developer Tools
There is an extension called React Developer Tools that will make your life much easier when working with React. Download React DevTools for Chrome, or whatever browser you prefer to work on.

<img src="images/react-dev-tools.jpg" alt="image" width="600"/>

# Bootstrap & jQuery Installation
- Run the following command in the terminal.
```npm
npm install bootstrap
```
-  Bootstrap is now successfully installed you can verify by searching the bootstrap folder inside node_modules folder.
- You can also observe some changes in your package.json file is after installing bootstrap
- As of now bootstrap is successfully installed in React app but to use it we must import Bootstrap and JavaScript minified bundle file inside index.js 
- We are all set to use built-in Bootstrap classes but to use Bootstrap’s JavaScript components in our react app we have to install popper.js and jquery. In case they are not installed already. To install both jquery and popper.js write the following line in terminal and hit enter.
```npm
npm install jquery popper.js
```
- After successfully installation index.js
```js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//css file import
import './index.css';
//component import
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app
reportWebVitals();
```

- After successfully installation App.js
```js
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <a className="btn btn-primary">Bootstrap button </a>
      </div>
    )
  }
}

export default App
```
- If you go back to localhost:3000, you'll see the bootsratp effect on button.

# JSX: JavaScript + XML
JSX is easier to write and understand than creating and appending many elements in vanilla JavaScript, and is one of the reasons people love React so much.
- As you've seen, we've been using what looks like HTML in our React code, but it's not quite HTML. This is JSX, which stands for JavaScript XML.
- JSX is actually closer to JavaScript, not HTML, so there are a few key differences to note when writing it.
- className is used instead of class for adding CSS classes, as class is a reserved keyword in JavaScript.
- Properties and methods in JSX are camelCase - onclick will become onClick.
- Self-closing tags must end in a slash - e.g. <img />
- JavaScript expressions can also be embedded inside JSX using curly braces, including variables, functions, and properties.
```js
const heading = <h1 className="site-heading">Hello, React</h1>

const name = 'Tania'
const heading = <h1>Hello, {name}</h1>
```


# Components
- So far, we've created one component - the App component. Almost everything in React consists of components, which can be class components or function components.
- Most React apps have many small components, and everything loads into the main App component.
- It's not mandatory to separate components into files, but an application will start to get unwieldy and out-of-hand if you don't. 


## Class Components
Let's create another component Table.js and fill it with the following data.
```js
import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
            <table class="table">
              <thead>
                  <tr>
                      <th scope="col">Sl</th>
                      <th scope="col">Name</th>
                      <th scope="col">Profession</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>Omar Faruque Shamim</td>
                      <td>Software Enginerr</td>

                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Solaiman Shakil</td>
                      <td>IOS Developer</td>

                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>Nazmul Islam</td>
                      <td>Bank Manager</td>
                  </tr>
              </tbody>
          </table>
    )
  }
}

export default Table
```
This component we created is a custom class component. We capitalize custom components to differentiate them from regular HTML elements. Back in App.js and importing the Table component
```js
import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}

export default App
```
If you check back on your live environment, you'll see the Table loaded in.

<img src="images/react-overview-table.png" alt="image" />

We could reuse component over and over. However, since the data is hard-coded into it, it wouldn't be too useful at the moment.


## Function Components
- Let's take our Table and make two simple components for it - a table header, and a table body.
- We're going to use ES6 arrow functions to create these function components into Table.js. 
```js
import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col">Sl</th>
                <th scope="col">Name</th>
                <th scope="col">Profession</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Ali Akbar</td>
                <td>Accountant</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Solaiman Shakil</td>
                <td>Software Enginerr</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sakib al Hasan</td>
                <td>Cricketer</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table class="table">
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table
```
- Everything should appear as it did before. As you can see, components can be nested in other components, and function and class components can be mixed.

## Compare a function component with a class component.
- A class component must include render(), and the return can only return one parent element.
- Note that if the return is contained to one line, it does not need parentheses.
```js
// function Component
const SimpleComponent = () => {
  return <div>Example</div>
}

// class Component
class ClassComponent extends Component {
  render() {
    return <div>Example</div>
  }
}
```

