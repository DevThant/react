# React Library

1. [Core React Concept](#core-react-concept)
2. [React Basic and Components](#react-basic)
3. [React Props](#react-props)
4. [React Styling Basic](#react-styling-basic)
5. [React State **Important**](#react-state)
6. [React Events](#react-events)
7. State Patterns
   - [Functional setState (using callback to update state)](#functional-setstate)
   - [Mutating state the safe way](#mutating-state-the-safe-way)
8.

---

---

## Core React Concept

##### [Start](#)

<br>

**React app is made up of these 3 important core concepts:**

1.  Component
    - building blocks of React app
    - components are reusable pieces of code that can be used to build a React app
    - combines logic (JS) and presentation (JSX)
2.  Props(properties)
    - data that is passed to a component. Also, default props can be set in the component definition.
    - props are read-only, they are not changed after being passed to a component. They are **immutable**.
3.  State
    - data that is specific to a component.
    - data that changes over time.

---

## React Basic

##### [Start](#)

<br>

#### Base HTML for React

1. This div is where our React component will be rendered.
2. Import React and ReactDOM from the `react` and `react-dom` packages.
3. Import Babel from the `babel-core` package. (to turn jsx into vanilla javascript)
4. Import our jsx file where we write our React components.

```html
<body>
  <!-- #1 -->
  <div id="root"></div>
  <!-- #2 -->
  <script
    src="https://unpkg.com/react@16/umd/react.development.js"
    crossorigin
  ></script>
  <script
    src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    crossorigin
  ></script>
  <!-- #3 -->
  <script src="https://unpkg.com/babel-standalone"></script>
  <!-- #4 -->
  <script src="index.js" type="text/jsx"></script>
</body>
```

#### Theres two ways to write **React Components**

1. Function Component (Not as capable as Class Component without hooks)

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

2. [Class Component (Traditionally better than Function Component)](#class-component)

```javascript
//! Class name must be Capitalized
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

I sincerely appreciate the offer and want to express my gratitude for the chance to meet your team. But after careful consideration,

**So whats the difference?**

1.  Both can accept props and render content.
2.  Function Component cannot use important features like state or life cycle without the usage of "[Hooks](#hooks)".
3.  Class Component can use state and life cycle.

---

### Class Component

##### [Start](#)/ [React Basic](#react-basic)

<br>

1. Create a class component that renders hello world.
2. Use ReactDOM.render to render the component to div with id `root`.

index.js

```javascript
// #1
class Hello extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

// #2
ReactDOM.render(<Hello />, document.getElementById("root"));
```

**Notes**: Returning multiple elements, rendering multiple components

1. To return multiple elements, Wrap them inside a div

```javascript
return (
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>
);
```

2. To render multiple class components. Create another component(app) and put every other components inside it. Then render it.

```javascript
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <NumPicker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

**We still needs to import the Hello and NumPicker Scripts in HTML file.**(The order of script is important, index must be last script)
index.html

```html
<div id="root"></div>
...
<script src="Hello.js" type="text/jsx"></script>
<script src="NumPicker.js" type="text/jsx"></script>
<script src="index.js" type="text/jsx"></script>
```

---

## React Props

##### [Start](#)

<br>

Props - Properties that we can pass from one component to another. (**Props are immutable**)

- [Using props in components basic](#using-props-in-components-basic)
- [How to pass number, arrays, boolean in props](#how-to-pass-number-arrays-boolean-in-props)
- [JSX loops](#jsx-loops)
- [Default Props](#default-props)

---

### **Using props in components (basic)**

##### [Start](#) / [React Props](#react-props)

<br>

1. Defining App component

   ```javascript
   class App extends React.Component {
     render() {
       return (
         <div>
         // passing props as {p1: "Unas", p2: "Dahlia"}
           <Wave p1="Unas" p2="Dahlia" />
           <Wave p1="Long" p2="Berenice" bangs={3} />
         </div>
       );
     }
   }

   ReactDOM.render(<App />, document.getElementById("root"));
   ```

2. Defining Wave.js component, and use the props that are passed from the App component

   ```javascript
   class Wave extends React.Component {
     render() {
       //! this.props.p1 = 'Dex'  // this will result in an error (props are immutable**)
       const props = this.props;
       const bangs = "!".repeat(props.bangs);
       return (
         <p>
           {props.p1} waves at {props.p2} {bangs}
         </p>
       );
     }
   }
   ```

### **How to pass number, arrays, boolean in props**

##### [Start](#) / [React Props](#react-props)

<br>

You can only use curly braces and quotes to pass props.

index.js

```javascript
class App extends React.Component {
  render() {
    return (
      <div>
        <Wave
          p1="Unas"
          p2="Dahlia"
          times={3}
          array={[1, 2, 3, 4, 5]}
          isFunny // or isFunny={true}
        />
        <Wave p1="Long" p2="Berenice" />
      </div>
    );
  }
}
```

---

### **JSX loops**

##### [Start](#) / [React Props](#react-props)

  <br>

```javascript
class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Dex" hobbies={["Driving", "Travelling", "Coding"]} />
        <Friend name="John" hobbies={["Painting", "Podcast"]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

1. We can easily use array.map to loop through the array and render the elements.
2. **Use curly braces inside the html tags to display the data.**

```javascript
class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          // #1
          {hobbies.map((h) => (
            // #2
            <li>{h}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

---

### **Default Props**

##### [Start](#) / [React Props](#react-props)

  <br>

```javascript
class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting from="Dex" to="Sara" bangs={3} />
        <Greeting to="Chief" bangs={5} /> // from will be "anonymous" by default
        <Greeting to="Chris" /> // bangs will be 1 by default and from will be
        "anonymous" by default
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

1. Defining default props with static property.

```javascript
class Greeting extends React.Component {
  // #1
  static defaultProps = {
    from: "Anonymous",
    bangs: 1,
  };
  render() {
    const { from, to, bangs } = this.props;
    let totalBangs = "!".repeat(bangs);
    return (
      <h1>
        {from} says hello to {to} {totalBangs}
      </h1>
    );
  }
}
```

---

---

## **React Styling Basic**

##### [Start](#)

<br>

1. Name classes with the same name as the component at the start. (Name convention is important)

```css
/* #1 */
.Machine {
  border: 2px solid black;
  background-color: aquamarine;
  text-align: center;
}

.Machine-jackpot {
  background-color: green;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 5px;
  text-align: center;
}

.Machine-lose {
  background-color: #ff0000;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 5px;
  text-align: center;
}
```

2. Use **className** instead of **class**.
3. For inline style - use style to add styles to the component. CamelCase the style properties.
   > use double curly braces to add styles to the component.

```javascript
const slots = ["🍎", "🍒", "🍇"];

// function to get random slot values
function getRandomSlot() {
  return slots[Math.floor(Math.random() * slots.length)];
}

class Machine extends React.Component {
  render() {
    const s1 = getRandomSlot();
    const s2 = getRandomSlot();
    const s3 = getRandomSlot();
    const jackpot = s1 === s2 && s2 === s3;

    return (
      // #2
      <div className="Machine">
        <h1>Slot Machine</h1>
        // #3
        <h3 style={{ fontSize: "50px", backgroundColor: "black" }}>
          {s1} | {s2} | {s3}
        </h3>
        <h3 className={jackpot ? "Machine-jackpot" : "Machine-lose"}>{jackpot ? "JACKPOT!!!" : "NOPE"}</h3>
      </div>
    );
  }
}
```

---

---

## **React State**

##### [Start](#)

##### [(1) **`Super`** in React State](#super-in-react-state), [(2) **`setState()`**](#setstate)

<br>

State is an object that is used to store the data of the component. (Key-value pairs)

```javascript
console.log(this.state);

{
  playerName: "Dex",
  score: 100,
}
```

State should be initialized **in** the **constructor** of the **component** (as soon as the component is created).

> **`this`** keyword refers to the Component. **`super()`** calls the Component's constructor.

```javascript
class ClickCount extends Component {
  // #
  constructor(props) {
    super(props);
    this.state = {
      numClicks = 0; // Put values we wants to track here..
    }
  }
  render() {
    return ( ...rest of component codes)
  }
}
```

**NOTE:** Never change the state directly. Use [`setState`](#setstate) to update the state.

```javascript
class ClickCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicks = 0;
    }
    this.state.numClicks = 0; // NEVER DO THIS AND NEVER CHANGE THE STATE IN THE CONSTRUCTOR
  }
}
```

**\*Alternate Syntax for initializing state** ! This needs **bable** to work (create react app already has bable installed)

```javascript
class ClickCount extends Component {
  // # alternate syntax
 state = {
      numClicks = 0; // Put values we wants to track here..
    }
  render() {
    return ( ...rest of component codes)
  }
}

// This won't work if you don't have babel installed
```

---

### **`Super`** in React State

##### [Start](#) / [React State](#react-state)

<br>
  
We cannot use any of the Component's functionalities if we don't use the **super** keyword inside the constructor of our own component.
<!-- prettier-ignore -->
```javascript
// Example Scenario - We recreate the Component class from react
class Component {
  constructor (){
    console.log("Inside React Component Constructor");
  }
}
// Our own component
class ClickCount extends Component {
  constructor (){
    super(); // Without this, the constructor of Component will not be called. Will throw an error.
    console.log("Inside Our Own Component Constructor");
  }
}
```
If we are using **props** inside the **constructor**. We have to pass in props to `super()`.
```javascript
class Demo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props); // { name: "Dex" }
    this.state = {..some data} //
  }
}
// Wihout passing props
class Demo extends Component {
  constructor(props) {
    super();
    console.log(this.props); // undefined
}
```
Not passing props is not a problem at all if we are not planning to use any props inside our constructor
  
---

### **`setState()`**

##### [Start](#) / [React State](#react-state)

<br>

`this.setState()` is the built-in react method of changing a component state.

```javascript
this.setState({ playerName: "Dex", score: 0 }, [callback]); // callback is optional
```

- Can call in any instance method **except constructor**.
- Takes an Object as an argument.
- Patches only the state Object. (keys that you didn't specify don't change)
- **Asynchronous!**
  - Does not always update the state immediately.
  - React decides when to change the state for performance reasons.
- Component will **re-render** when their state changes.

---

---

## **React Events**

##### [Start](#)

##### [Alternate Syntax](#alternate-syntax)

<br>

We'll start with a function on `onClick` event

1. We need constructor() to set states of the component.
2. Define a function that triggers on onClick event.
3. Use the function on the element
   > To call the fucntion we have to use this. Also if we call the function directly it will run immediately without us clicking.
   <!-- prettier-ignore -->
   ```javascript
   // This will run immediately and change the state to click without clicking it.
   return
   <button onClick={this.handleClick()}>Click Event</button>
   // This will only runs when we click
   return
   <button onClick={this.handleClick()}>Click Event</button>
   ```
4. To actually make the function `this.handleClick` works we have to bind the function to our current component.

```javascript
class Events extends Component {
  // #1
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    // #4
    this.handleClick = this.handleClick.bind(this)
  }
  // #2
  handleClick(e) {
    this.setState({ clicked: true });
  }
  render() {
    return (
      <div>
        <!-- #3 -->
        <button onClick={this.handleClick}>Click Event</button>
      </div>
    );
  }
}
```

---

### **Alternate Syntax**

Remember we need babel for these short syntaxs to work

1. Short alt syntax for decalring states
2. This automatically bind the function to the component

```javascript
class Events extends Component {
  // #1
  state = { clicked: false };
}
// #2
handleClick = (e) => {
  this.setState({ clicked: true });
};
```

---

---

### **Functional setState**

##### [Start](#)

<br>

To update the state of the component, we use setState(). But this is not the pattern we want to use.

> There are several factors that we need to consider. ( Colt-steele > react > 57 Updating existing state )

```javascript
class Score extends Component {
  state = {
    score: 0,
  };
  singleKill = (){
    this.setState({ score: this.state.score + 1 });
  }
  render() {
    ...
  }
}
```

**Instead**, we can use functions to update the state.

```javascript
class Score extends Component {
  state = {
    score: 0,
  };
  incrementScore(currentState){
    return { score: currentState.score + 1 };
  }
  singleKill =() => {
    this.setState(this.incrementScore);
  }
  doubleKill =() => {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }
  render() {
    ...
  }
}
```

---

### **Mutating State the Safe Way**

##### [Start](#)

<br>

Be extra careful when mutating array of objects.

**Avoid Doing This**

```javascript
completeTodo = (id) => {
  const todo = this.state.find((todo) => todo.id === id);
  todo.completed = true; // mutating the state directly (never do this)

  this.setState({ todos: this.state.todos });
};
```

**DO this instead**

1. Map the array of objects to a new array of objects.
2. And then set the new array of objects to the state.

```javascript
completeTodo = (id) => {
  // #1
  const newTodos = this.state.todos.map((todo) => {
    if (todo.id === id) {
      return { ...todos, completed: true };
    }
    return todo;
  });
  // #2
  this.setState({ todos: newTodos });
};
```
