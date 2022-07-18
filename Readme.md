# React Library

1. [React Basic](#react-basic)
2. [React Props](#react-props)

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
