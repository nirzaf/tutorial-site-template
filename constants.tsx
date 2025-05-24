
import { Topic } from './types';

export const APP_TITLE = "React Learning Hub";

export const TOPICS_DATA: Topic[] = [
  {
    id: 'intro',
    title: 'Introduction to React',
    path: '/intro',
    explanation: `
      <p class="mb-4">Welcome to the React Learning Hub! React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage application state efficiently.</p>
      <h3 class="text-xl font-semibold mb-2 text-sky-700">Why React?</h3>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state, then compose them to make complex UIs.</li>
        <li><strong>Declarative:</strong> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</li>
        <li><strong>Learn Once, Write Anywhere:</strong> You can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</li>
      </ul>
      <p>This tutorial will guide you through the core concepts. Navigate through the topics using the sidebar. Let's get started!</p>
    `,
    codeExample: {
      description: "A very simple React component:",
      code: `
function WelcomeMessage() {
  return <h1>Hello, React Learner!</h1>;
}

// To render this in your app:
// ReactDOM.createRoot(document.getElementById('root')).render(<WelcomeMessage />);`,
      outputDescription: "This would display a large heading 'Hello, React Learner!' on the page."
    },
    interactiveExample: {
      description: "In this tutorial, each section will provide examples. While true real-time editing isn't embedded, we'll guide you on how to experiment with the code in your own local React setup (e.g., using Create React App or Vite).",
      tasks: ["Set up a local React project using Vite: `npm create vite@latest my-react-app -- --template react-ts`", "Try running the example code in your `App.tsx`."]
    },
    exercise: {
      title: "Setup Your Environment",
      description: "Your first task is to set up a local React development environment using Vite. Follow the official Vite guide to create a new React + TypeScript project. Once done, try to render a simple 'Hello World' message.",
      solutionHint: "Use `npm create vite@latest your-app-name -- --template react-ts`, then modify `src/App.tsx`.",
      miniTasks: [
        {
          task: "Create a new React component called Greeting that displays 'Hello from React!' in an h2 element.",
          code: `// Create this component in a new file called Greeting.tsx
import React from 'react';

const Greeting = () => {
  // Your code here
};

export default Greeting;`,
          hint: "Return an h2 element with the text 'Hello from React!'"
        },
        {
          task: "Import and use your Greeting component in App.tsx",
          code: `// In App.tsx
import React from 'react';
// Import your Greeting component here

function App() {
  return (
    <div className="App">
      {/* Add your Greeting component here */}
    </div>
  );
}

export default App;`,
          hint: "Import Greeting from './Greeting' and add <Greeting /> inside the div"
        }
      ]
    },
    quiz: {
      question: "What is React primarily used for?",
      options: [
        { id: "a", text: "Backend development" },
        { id: "b", text: "Building user interfaces" },
        { id: "c", text: "Database management" },
        { id: "d", text: "Machine learning" }
      ],
      correctAnswerId: "b",
      explanation: "React is a JavaScript library specifically designed for building user interfaces (UIs) or UI components."
    },
    keywords: ["react", "introduction", "javascript library", "ui"]
  },
  {
    id: 'components-jsx',
    title: 'Components and JSX',
    path: '/components-jsx',
    explanation: `
      <p class="mb-4"><strong>Components</strong> are the core building blocks of React applications. They are like JavaScript functions that return React elements (describing what should appear on the screen). Components can be simple or complex, and they can be reused throughout your application.</p>
      <p class="mb-4"><strong>JSX (JavaScript XML)</strong> is a syntax extension for JavaScript. It looks similar to HTML and allows you to write your UI structure directly within your JavaScript code. Babel (a JavaScript compiler) transforms JSX into regular JavaScript function calls (<code>React.createElement()</code>).</p>
      <h3 class="text-xl font-semibold mb-2 text-sky-700">Key Concepts:</h3>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>Functional Components:</strong> The modern way to write components, using simple JavaScript functions.</li>
        <li><strong>JSX Rules:</strong>
          <ul class="list-circle list-inside ml-4">
            <li>Components must return a single root element. Use a fragment (<code>&lt;&gt;...&lt;/&gt;</code>) or a div to wrap multiple elements.</li>
            <li>JSX attributes use camelCase (e.g., <code>className</code> instead of <code>class</code>, <code>onClick</code> instead of <code>onclick</code>).</li>
            <li>JavaScript expressions can be embedded within JSX using curly braces <code>{}</code>.</li>
          </ul>
        </li>
      </ul>
    `,
    codeExample: {
      description: "A simple functional component using JSX:",
      // Fix for error reportedly on line 106 (within this string content): "Cannot find name 'props'".
      // Added 'any' type to the 'props' parameter in the UserGreeting function signature to satisfy TypeScript.
      code: `
function UserGreeting(props: any) {
  const userName = props.name || "Guest";
  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <p>Welcome to our React app.</p>
    </div>
  );
}

// Usage: <UserGreeting name="Alice" />
      `,
      outputDescription: "If rendered with `<UserGreeting name=\"Alice\" />`, it would display: 'Hello, Alice!' and 'Welcome to our React app.'"
    },
    interactiveExample: {
      description: "Try modifying the `UserGreeting` component.",
      tasks: [
        "Change the greeting message.",
        "Add another HTML element, like an `<h2>`.",
        "Pass a different name when using the component."
      ]
    },
    exercise: {
      title: "Create a Product Card Component",
      description: "Create a new functional component called `ProductCard`. It should accept `name` (string) and `price` (number) as props and display them in a visually appealing way (e.g., using `<h2>` for name and `<p>` for price).",
      solutionHint: `
// Fix for error on line 108: Cannot find name 'props'.
// Typed 'props' parameter as 'any' in ProductCard to ensure it's defined before use.
function ProductCard(props: any) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{props.name}</h2>
      <p>Price: ${"$"}{props.price}</p>
    </div>
  );
}`,
      miniTasks: [
        {
          task: "Create a functional component called ProductCard with TypeScript props interface",
          code: `// Create a file named ProductCard.tsx
import React from 'react';

// Create an interface for the component props
interface ProductCardProps {
  // Define the props types here
}

const ProductCard: React.FC<ProductCardProps> = () => {
  // Your component code here
};

export default ProductCard;`,
          hint: "Define name as string and price as number in the ProductCardProps interface"
        },
        {
          task: "Add styling to your ProductCard component using className attributes",
          code: `// In your ProductCard component
const ProductCard: React.FC<ProductCardProps> = ({ name, price }) => {
  return (
    <div>
      {/* Add className attributes for styling */}
      <h2>{name}</h2>
      <p>Price: ${"$"}{price}</p>
    </div>
  );
};`,
          hint: "Add className attributes like 'border p-4 rounded shadow' to the div and 'text-lg font-bold' to the h2"
        },
        {
          task: "Use your ProductCard component in App.tsx with sample data",
          code: `// In App.tsx
import React from 'react';
import ProductCard from './ProductCard';

function App() {
  // Create sample product data
  const products = [
    // Add 2-3 product objects with name and price
  ];
  
  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <div className="product-list">
        {/* Render ProductCard components here */}
      </div>
    </div>
  );
}`,
          hint: "Map through the products array to render a ProductCard for each product"
        }
      ]
    },
    quiz: {
      question: "What does JSX stand for?",
      options: [
        { id: "a", text: "JavaScript XML" },
        { id: "b", text: "JavaScript Syntax eXtension" },
        { id: "c", text: "Java Standard XML" },
        { id: "d", text: "JSON Extended" }
      ],
      correctAnswerId: "a",
      explanation: "JSX stands for JavaScript XML. It's a syntax extension that allows you to write HTML-like structures in your JavaScript code."
    },
    keywords: ["components", "jsx", "functional components", "ui structure"]
  },
  {
    id: 'props-state',
    title: 'Props and State',
    path: '/props-state',
    explanation: `
      <p class="mb-4"><strong>Props (short for properties)</strong> allow you to pass data from a parent component to a child component. Props are read-only; a component cannot modify its own props.</p>
      <p class="mb-4"><strong>State</strong> is data that a component manages internally. Unlike props, state can be changed by the component itself (usually in response to user events). When state changes, React re-renders the component to reflect the new state.</p>
      <h3 class="text-xl font-semibold mb-2 text-sky-700">Key Differences:</h3>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>Props:</strong> Passed from parent to child. Immutable within the child. Used for configuring components.</li>
        <li><strong>State:</strong> Managed internally by a component. Mutable. Used for handling dynamic data that changes over time.</li>
      </ul>
      <p>The <code>useState</code> hook is typically used to manage state in functional components.</p>
    `,
    codeExample: {
      description: "Component with props and state (using useState hook):",
      code: `
import React, { useState } from 'react';

// Child component receiving props
function DisplayCount(props: any) { /* Explicitly typed props as any */
  return <p>The current count is: {props.count}</p>;
}

// Parent component managing state
function Counter() {
  const [count, setCount] = useState(0); // Initialize state

  return (
    <div>
      <DisplayCount count={count} /> {/* Pass state as prop */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
      `,
      outputDescription: "Displays 'The current count is: 0' and a button. Clicking the button increases the count."
    },
    interactiveExample: {
      description: "Experiment with the Counter component:",
      tasks: [
        "Change the initial value of `count` in `useState`.",
        "Add a button to decrement the count.",
        "Pass another prop from `Counter` to `DisplayCount`."
      ]
    },
    exercise: {
      title: "Toggleable Message",
      description: "Create a component `ToggleMessage` that has a button. When the button is clicked, it toggles the visibility of a message ('Message is visible' / 'Message is hidden'). Use state to manage the visibility.",
      solutionHint: "Use `useState` for a boolean `isVisible` state. The button's `onClick` should toggle this state.",
      miniTasks: [
        {
          task: "Create a ToggleMessage component with a state variable to track visibility",
          code: `// Create a file named ToggleMessage.tsx
import React, { useState } from 'react';

const ToggleMessage: React.FC = () => {
  // Add state to track visibility
  
  return (
    <div>
      {/* Add your button and conditional message here */}
    </div>
  );
};

export default ToggleMessage;`,
          hint: "Use const [isVisible, setIsVisible] = useState(false) to create a state variable"
        },
        {
          task: "Add a toggle button that changes the visibility state",
          code: `// In your ToggleMessage component
const ToggleMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Add a function to handle the toggle
  
  return (
    <div>
      <button>
        {/* Add button text */}
      </button>
      {/* Add conditional message rendering */}
    </div>
  );
};`,
          hint: "Create a handleToggle function that calls setIsVisible(!isVisible) and attach it to the button's onClick event"
        },
        {
          task: "Conditionally render different messages based on the visibility state",
          code: `// In your ToggleMessage component
const ToggleMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <div className="p-4 border rounded">
      <button onClick={handleToggle} className="px-4 py-2 bg-sky-500 text-white rounded">
        Toggle Message
      </button>
      {/* Add conditional rendering here */}
    </div>
  );
};`,
          hint: "Use a ternary operator or && to conditionally render 'Message is visible' when isVisible is true and 'Message is hidden' when it's false"
        }
      ]
    },
    quiz: {
      question: "Which statement is true about props?",
      options: [
        { id: "a", text: "Props can be modified directly by the child component." },
        { id: "b", text: "Props are used to manage internal component data that changes." },
        { id: "c", text: "Props are passed from a parent component to a child component." },
        { id: "d", text: "Props are primarily managed using the useState hook." }
      ],
      correctAnswerId: "c",
      explanation: "Props are how components receive data from their parents. They are read-only within the component that receives them."
    },
    keywords: ["props", "state", "useState", "data flow", "component communication"]
  },
  {
    id: 'hooks-overview',
    title: 'Hooks Overview (useState, useEffect)',
    path: '/hooks-overview',
    explanation: `
      <p class="mb-4"><strong>Hooks</strong> are functions that let you “hook into” React state and lifecycle features from functional components. They were introduced in React 16.8 and allow you to use state and other React features without writing a class.</p>
      
      <h3 class="text-xl font-semibold mb-2 text-sky-700"><code>useState</code></h3>
      <p class="mb-2">The <code>useState</code> hook allows functional components to have local state. It returns a pair: the current state value and a function that lets you update it.</p>
      <p class="mb-4">Syntax: <code>const [state, setState] = useState(initialState);</code></p>

      <h3 class="text-xl font-semibold mb-2 text-sky-700"><code>useEffect</code></h3>
      <p class="mb-2">The <code>useEffect</code> hook lets you perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM.</p>
      <p class="mb-4"><code>useEffect</code> runs after every render by default, but you can control when it runs by providing a dependency array.
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li>No dependency array: Runs after every render.</li>
          <li>Empty array <code>[]</code>: Runs only once after the initial render (and on unmount if a cleanup function is returned).</li>
          <li>Array with variables <code>[var1, var2]</code>: Runs after the initial render and whenever any of the specified variables change.</li>
        </ul>
      </p>
      <p>It can also return a cleanup function, which React runs when the component unmounts or before re-running the effect due to dependency changes.</p>
    `,
    codeExample: {
      description: "Example using useState and useEffect:",
      code: `
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    console.log("Fetching data...");
    setTimeout(() => {
      setData({ message: "Data fetched successfully!" });
      setLoading(false);
      console.log("Data received.");
    }, 2000);

    // Cleanup function (optional)
    return () => {
      console.log("Cleanup: Component unmounted or effect re-ran.");
    };
  }, []); // Empty array: run only once on mount

  if (loading) {
    return <p>Loading data...</p>;
  }

  return <p>{data ? data.message : "No data"}</p>;
}
      `,
      outputDescription: "Displays 'Loading data...' for 2 seconds, then 'Data fetched successfully!'. Console logs will show fetching and cleanup messages."
    },
    interactiveExample: {
      description: "Modify the `DataFetcher` component:",
      tasks: [
        "Change the simulated fetch time.",
        "Add a button that changes a piece of state, and add that state to `useEffect`'s dependency array to see it re-run.",
        "Log something in the cleanup function to observe when it's called."
      ]
    },
    exercise: {
      title: "Document Title Updater",
      description: "Create a component with an input field. Use `useEffect` to update the browser's document title (<code>document.title</code>) whenever the text in the input field changes. Use `useState` to manage the input field's value.",
      solutionHint: `
import React, { useState, useEffect } from 'react';

function TitleUpdater() {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name ? \`Hello, \${name}\` : 'React App';
  }, [name]); // Re-run effect when 'name' changes

  return (
    <input 
      type="text" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder="Enter your name" 
    />
  );
}`,
      miniTasks: [
        {
          task: "Create a TitleUpdater component with useState for the input value",
          code: `// Create a file named TitleUpdater.tsx
import React, { useState } from 'react';

const TitleUpdater: React.FC = () => {
  // Add state for the input field
  
  return (
    <div className="p-4 border rounded">
      <h2>Update Document Title</h2>
      {/* Add your input field here */}
    </div>
  );
};

export default TitleUpdater;`,
          hint: "Use const [inputValue, setInputValue] = useState('') to create a state variable for the input"
        },
        {
          task: "Add an input field that updates the state when changed",
          code: `// In your TitleUpdater component
const TitleUpdater: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  
  // Add a function to handle input changes
  
  return (
    <div className="p-4 border rounded">
      <h2>Update Document Title</h2>
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Type something..."
        // Add value and onChange props
      />
      <p className="mt-2">Current input: {inputValue}</p>
    </div>
  );
};`,
          hint: "Create a handleChange function that calls setInputValue with the event target value and attach it to the input's onChange event"
        },
        {
          task: "Use useEffect to update the document title when the input changes",
          code: `// In your TitleUpdater component
import React, { useState, useEffect } from 'react';

const TitleUpdater: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  // Add useEffect hook here
  
  return (
    <div className="p-4 border rounded">
      <h2>Update Document Title</h2>
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
      />
      <p className="mt-2">Current input: {inputValue}</p>
    </div>
  );
};`,
          hint: "Add useEffect(() => { document.title = inputValue ? `Typing: ${inputValue}` : 'React App'; }, [inputValue]); to update the title when inputValue changes"
        }
      ]
    },
    quiz: {
      question: "When does `useEffect` with an empty dependency array (<code>[]</code>) run?",
      options: [
        { id: "a", text: "After every render." },
        { id: "b", text: "Only once after the initial render." },
        { id: "c", text: "When a specific prop changes." },
        { id: "d", text: "Never." }
      ],
      correctAnswerId: "b",
      explanation: "`useEffect` with an empty dependency array `[]` runs only once after the component mounts (initial render) and its cleanup function runs when the component unmounts."
    },
    keywords: ["hooks", "useState", "useEffect", "side effects", "lifecycle"]
  },
  {
    id: 'event-handling',
    title: 'Event Handling',
    path: '/event-handling',
    explanation: `
      <p class="mb-4">React events are named using camelCase, rather than lowercase (e.g., <code>onClick</code> instead of <code>onclick</code>). With JSX, you pass a function as the event handler, rather than a string.</p>
      <p class="mb-4">Event handlers in React are typically class methods (in class components) or functions defined within functional components.</p>
      <h3 class="text-xl font-semibold mb-2 text-sky-700">Common Event Types:</h3>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><code>onClick</code></li>
        <li><code>onChange</code> (for form inputs)</li>
        <li><code>onSubmit</code> (for forms)</li>
        <li><code>onMouseEnter</code>, <code>onMouseLeave</code></li>
        <li><code>onKeyDown</code>, <code>onKeyUp</code></li>
      </ul>
      <p class="mb-4">React event objects are synthetic events, a cross-browser wrapper around the browser’s native event. They have the same interface as native events, including <code>stopPropagation()</code> and <code>preventDefault()</code>.</p>
    `,
    codeExample: {
      description: "Handling a click event:",
      code: `
function ActionButton() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { // Added type for event
    console.log('Button clicked!', event);
    alert('You clicked the button!');
  };

  return (
    <button 
      onClick={handleClick} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Click Me
    </button>
  );
}
      `,
      outputDescription: "A button that, when clicked, logs to the console and shows an alert."
    },
    interactiveExample: {
      description: "Experiment with event handling:",
      tasks: [
        "Modify the `handleClick` function to change a piece of state (you'll need `useState`).",
        "Try using an `onChange` event on an `<input>` element to log its value.",
        "Pass an argument to an event handler, e.g., <code>onClick={() => handleItemClick(itemId)}</code>."
      ]
    },
    exercise: {
      title: "Simple Input Logger",
      description: "Create a component with an text input field. As the user types into the input, display the current value of the input field below it in a `<p>` tag. Use the `onChange` event.",
      solutionHint: "Use `useState` to store the input's value. The `onChange` handler on the input should update this state.",
      miniTasks: [
        {
          task: "Create an InputLogger component with state for the input value",
          code: `// Create a file named InputLogger.tsx
import React, { useState } from 'react';

const InputLogger: React.FC = () => {
  // Add state for the input value
  
  return (
    <div className="p-4 border rounded">
      <h2>Input Logger</h2>
      {/* Add your input field here */}
      {/* Add a paragraph to display the input value */}
    </div>
  );
};

export default InputLogger;`,
          hint: "Use const [inputValue, setInputValue] = useState('') to create a state variable"
        },
        {
          task: "Add an input field with an onChange event handler",
          code: `// In your InputLogger component
const InputLogger: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  
  // Create an event handler function for the input
  
  return (
    <div className="p-4 border rounded">
      <h2>Input Logger</h2>
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Type something..."
        // Add value and onChange props
      />
      {/* Add a paragraph to display the input value */}
    </div>
  );
};`,
          hint: "Create a handleInputChange function that takes an event parameter and calls setInputValue with e.target.value"
        },
        {
          task: "Display the current input value in a paragraph below the input",
          code: `// In your InputLogger component
const InputLogger: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the state with the input value
  };
  
  return (
    <div className="p-4 border rounded">
      <h2>Input Logger</h2>
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />
      {/* Add a paragraph to display the input value */}
    </div>
  );
};`,
          hint: "Add a <p> element below the input that displays the current value of inputValue"
        }
      ]
    },
    quiz: {
      question: "How do you pass an event handler for a click event in React JSX?",
      options: [
        { id: "a", text: "<code>onclick=\"myFunction()\"</code>" },
        { id: "b", text: "<code>onClick=\"myFunction\"</code>" },
        { id: "c", text: "<code>onClick={myFunction}</code>" },
        { id: "d", text: "<code>eventClick={myFunction}</code>" }
      ],
      correctAnswerId: "c",
      explanation: "In React, event handlers are passed as functions within curly braces, e.g., `onClick={handleClick}`. The event name is camelCased."
    },
    keywords: ["events", "onClick", "onChange", "onSubmit", "user interaction"]
  },
  {
    id: 'conditional-rendering',
    title: 'Conditional Rendering',
    path: '/conditional-rendering',
    explanation: `
      <p class="mb-4">Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like <code>if</code> or the conditional operator <code>(condition ? true : false)</code> to create elements representing the current state, and let React update the UI to match them.</p>
      <h3 class="text-xl font-semibold mb-2 text-sky-700">Common Techniques:</h3>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong><code>if</code> statements:</strong> You can use an <code>if</code> statement to conditionally return different JSX. This is often done by extracting a component or using helper functions.</li>
        <li><strong>Logical <code>&&</code> Operator:</strong> Useful for including an element only if a condition is true (<code>{isLoggedIn && <UserProfile />}</code>).</li>
        <li><strong>Ternary Operator:</strong> <code>condition ? <TrueComponent /> : <FalseComponent /></code> is great for inline conditional rendering.</li>
        <li><strong>Preventing Rendering with <code>null</code>:</strong> A component can return <code>null</code> to render nothing.</li>
      </ul>
    `,
    codeExample: {
      description: "Using ternary operator and logical && for conditional rendering:",
      code: `
function LoginStatus(props: { isLoggedIn: boolean }) { // Typed props
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in.</h1>
      )}
      {isLoggedIn && <p>You have new messages.</p>}
    </div>
  );
}

// Usage:
// <LoginStatus isLoggedIn={true} />
// <LoginStatus isLoggedIn={false} />
      `,
      outputDescription: "If `isLoggedIn` is true, shows 'Welcome back!' and 'You have new messages.'. If false, shows 'Please sign in.'"
    },
    interactiveExample: {
      description: "Play with the `LoginStatus` component:",
      tasks: [
        "Toggle the `isLoggedIn` prop and observe the output.",
        "Add another conditionally rendered element using the logical `&&` operator.",
        "Try using an `if` statement outside the return to decide what JSX to render."
      ]
    },
    exercise: {
      title: "Show/Hide Details",
      description: "Create a component `ItemWithDetails`. It should display an item's name and a button 'Show Details'. When the button is clicked, it should display additional details about the item. Clicking it again should hide the details. Use conditional rendering.",
      solutionHint: "Use a state variable (e.g., `showDetails`) and toggle it on button click. Conditionally render the details section based on this state.",
      miniTasks: [
        {
          task: "Create an ItemWithDetails component with state to track if details are visible",
          code: `// Create a file named ItemWithDetails.tsx
import React, { useState } from 'react';

interface ItemProps {
  name: string;
  details: string;
}

const ItemWithDetails: React.FC<ItemProps> = ({ name, details }) => {
  // Add state to track if details are visible
  
  return (
    <div className="p-4 border rounded mb-4">
      {/* Add item name and button here */}
      {/* Conditionally render details */}
    </div>
  );
};

export default ItemWithDetails;`,
          hint: "Use const [showDetails, setShowDetails] = useState(false) to create a state variable"
        },
        {
          task: "Add a button that toggles the visibility of details",
          code: `// In your ItemWithDetails component
const ItemWithDetails: React.FC<ItemProps> = ({ name, details }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  // Create a function to toggle the details visibility
  
  return (
    <div className="p-4 border rounded mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <button
          className="px-3 py-1 bg-sky-500 text-white rounded"
          // Add onClick handler here
        >
          {/* Set button text based on state */}
        </button>
      </div>
      {/* Conditionally render details */}
    </div>
  );
};`,
          hint: "Create a toggleDetails function that calls setShowDetails(!showDetails) and attach it to the button's onClick event"
        },
        {
          task: "Conditionally render the details section based on state",
          code: `// In your ItemWithDetails component
const ItemWithDetails: React.FC<ItemProps> = ({ name, details }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  return (
    <div className="p-4 border rounded mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <button
          className="px-3 py-1 bg-sky-500 text-white rounded"
          onClick={toggleDetails}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {/* Add conditional rendering for details here */}
    </div>
  );
};`,
          hint: "Use the logical && operator or a ternary operator to conditionally render a div containing the details"
        },
        {
          task: "Use the ItemWithDetails component with sample data in App.tsx",
          code: `// In App.tsx
import React from 'react';
import ItemWithDetails from './ItemWithDetails';

function App() {
  // Create sample items with names and details
  const items = [
    // Add 2-3 sample items
  ];
  
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Items List</h1>
      {/* Render ItemWithDetails components for each item */}
    </div>
  );
}`,
          hint: "Map through the items array to render an ItemWithDetails component for each item, passing name and details as props"
        }
      ]
    },
    quiz: {
      question: "Which operator is commonly used for inline conditional rendering of one of two components?",
      options: [
        { id: "a", text: "Logical OR (||)" },
        { id: "b", text: "if-else statement directly in JSX" },
        { id: "c", text: "Ternary operator (? :)" },
        { id: "d", text: "Switch statement" }
      ],
      correctAnswerId: "c",
      explanation: "The ternary operator (`condition ? expressionIfTrue : expressionIfFalse`) is a concise way to perform inline conditional rendering in JSX."
    },
    keywords: ["conditional rendering", "if-else", "ternary operator", "logical &&"]
  },
  {
    id: 'lists-keys',
    title: 'Lists and Keys',
    path: '/lists-keys',
    explanation: `
      <p class="mb-4">You can build collections of elements in React using JavaScript's <code>map()</code> function. For each item in an array, <code>map()</code> can return a React element.</p>
      <p class="mb-4"><strong>Keys</strong> are crucial when rendering lists of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.</p>
      <h3 class="text-xl font-semibold mb-2 text-sky-700">Key Properties:</h3>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong>Unique:</strong> Keys must be unique among siblings, but don't need to be globally unique.</li>
        <li><strong>Stable:</strong> A key should not change between re-renders if the item it represents stays the same. Using array indexes as keys is generally discouraged if the order of items can change, as it can lead to performance issues and bugs with component state.</li>
        <li><strong>String or Number:</strong> Keys are typically strings or numbers.</li>
      </ul>
    `,
    codeExample: {
      description: "Rendering a list of items with keys:",
      code: `
function NumberList(props: { numbers: number[] }) { // Typed props
  const numbers = props.numbers; // e.g., [1, 2, 3, 4, 5]
  const listItems = numbers.map((number) =>
    // Keys should be specified inside the array.
    <li key={number.toString()}> 
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
// <NumberList numbers={numbers} />
      `,
      outputDescription: "Renders an unordered list: <li>1</li>, <li>2</li>, etc. Each `<li>` has a unique key."
    },
    interactiveExample: {
      description: "Experiment with `NumberList`:",
      tasks: [
        "Change the `numbers` array. What happens if you have duplicate numbers (and use them as keys)?",
        "Try rendering a list of objects, where each object has an `id` property to use as a key.",
        "Remove the `key` prop and observe the warning in the browser console."
      ]
    },
    exercise: {
      title: "User List Component",
      description: "Create a component `UserList` that takes an array of user objects (e.g., `[{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]`) as a prop. Render each user's name in a list item. Ensure each list item has a unique and stable key.",
      solutionHint: "Map over the users array. Use `user.id` as the key for each `<li>`.",
      miniTasks: [
        {
          task: "Create a UserList component with TypeScript interface for user objects",
          code: `// Create a file named UserList.tsx
import React from 'react';

// Create an interface for a user object
interface User {
  // Define the properties a user should have
}

// Create an interface for the component props
interface UserListProps {
  // Define what props the component accepts
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Users</h2>
      {/* Add your list here */}
    </div>
  );
};

export default UserList;`,
          hint: "Define User interface with id (number) and name (string) properties, and UserListProps with users (User[]) property"
        },
        {
          task: "Render the list of users with proper keys",
          code: `// In your UserList component
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Users</h2>
      <ul className="list-disc list-inside">
        {/* Map over the users array and render list items */}
      </ul>
    </div>
  );
};`,
          hint: "Use users.map(user => <li key={user.id}>{user.name}</li>) to render the list items with proper keys"
        },
        {
          task: "Add conditional rendering for empty users array",
          code: `// In your UserList component
const UserList: React.FC<UserListProps> = ({ users }) => {
  // Add conditional rendering for empty users array
  
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Users</h2>
      <ul className="list-disc list-inside">
        {users.map(user => (
          <li key={user.id} className="mb-1">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};`,
          hint: "Add a condition at the beginning to check if users.length === 0 and return a message like 'No users found' if true"
        },
        {
          task: "Use the UserList component with sample data in App.tsx",
          code: `// In App.tsx
import React from 'react';
import UserList from './UserList';

function App() {
  // Create sample users data
  const users = [
    // Add 3-4 user objects with id and name properties
  ];
  
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">User Directory</h1>
      {/* Render the UserList component with the users data */}
    </div>
  );
}`,
          hint: "Create an array of user objects with id and name properties, then render <UserList users={users} />"
        }
      ]
    },
    quiz: {
      question: "Why are 'keys' important when rendering lists in React?",
      options: [
        { id: "a", text: "To style list items differently." },
        { id: "b", text: "To help React identify changed, added, or removed items efficiently." },
        { id: "c", text: "To define event handlers for list items." },
        { id: "d", text: "To sort the list items automatically." }
      ],
      correctAnswerId: "b",
      explanation: "Keys provide a stable identity to list items, allowing React to efficiently update the UI by tracking changes, additions, or removals."
    },
    keywords: ["lists", "keys", "map function", "array rendering", "collections"]
  },
  {
    id: 'forms-controlled',
    title: 'Forms & Controlled Components',
    path: '/forms-controlled',
    explanation: `
      <p class="mb-4">HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state.</p>
      <p class="mb-4">In React, a <strong>controlled component</strong> is one where form data is handled by the React component's state. The React state is the "single source of truth". An input form element whose value is controlled by React in this way is called a "controlled component".</p>
      <h3 class="text-xl font-semibold mb-2 text-sky-700">Implementation:</h3>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Each form element (like <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>) has its value attribute set from the component's state.</li>
        <li>An <code>onChange</code> event handler is used to update the state whenever the input value changes.</li>
      </ul>
      <p>This makes it easier to manage form data, validate inputs, and integrate with other parts of your application.</p>
    `,
    codeExample: {
      description: "A controlled input component:",
      code: `
import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Typed event
    setName(event.target.value.toUpperCase()); // Example: always uppercase
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { // Typed event
    alert('A name was submitted: ' + name);
    event.preventDefault(); // Prevent default form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} // Value is controlled by state
          onChange={handleChange} // State updated on change
          className="border p-1 ml-2"
        />
      </label>
      <button type="submit" className="bg-green-500 text-white p-1 ml-2 rounded">Submit</button>
    </form>
  );
}
      `,
      outputDescription: "A form with an input field. Text typed into the input is converted to uppercase and displayed. Submitting the form shows an alert with the name."
    },
    interactiveExample: {
      description: "Modify the `NameForm`:",
      tasks: [
        "Remove the `.toUpperCase()` to see normal input behavior.",
        "Add another input field (e.g., for email) and manage its state.",
        "Perform simple validation in `handleChange` or `handleSubmit` (e.g., check if the name is empty)."
      ]
    },
    exercise: {
      title: "Feedback Form",
      description: "Create a simple feedback form with a textarea for comments and a submit button. Make the textarea a controlled component. When submitted, log the feedback to the console.",
      solutionHint: "Use `useState` for the textarea's value. Set `value` and `onChange` on the `<textarea>`. The `onSubmit` handler on the form should log the state.",
      miniTasks: [
        {
          task: "Create a FeedbackForm component with state for the textarea value",
          code: `// Create a file named FeedbackForm.tsx
import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  // Add state for the feedback text
  
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Feedback Form</h2>
      {/* Add your form here */}
    </div>
  );
};

export default FeedbackForm;`,
          hint: "Use const [feedback, setFeedback] = useState('') to create a state variable for the textarea"
        },
        {
          task: "Create a controlled textarea with onChange handler",
          code: `// In your FeedbackForm component
const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  
  // Create a function to handle textarea changes
  
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Feedback Form</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="feedback" className="block mb-2 font-medium">
            Your Feedback:
          </label>
          <textarea
            id="feedback"
            rows={4}
            className="w-full p-2 border rounded"
            placeholder="Please share your thoughts..."
            // Add value and onChange props
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};`,
          hint: "Create a handleChange function that takes an event parameter and calls setFeedback with e.target.value, then add value={feedback} and onChange={handleChange} to the textarea"
        },
        {
          task: "Add form submission handler to log feedback to console",
          code: `// In your FeedbackForm component
const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };
  
  // Add form submission handler
  
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Feedback Form</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="feedback" className="block mb-2 font-medium">
            Your Feedback:
          </label>
          <textarea
            id="feedback"
            rows={4}
            className="w-full p-2 border rounded"
            placeholder="Please share your thoughts..."
            value={feedback}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};`,
          hint: "Create a handleSubmit function that takes an event parameter, calls e.preventDefault() to prevent page reload, logs the feedback to the console, and optionally resets the form"
        },
        {
          task: "Add validation to ensure feedback is not empty before submission",
          code: `// In your FeedbackForm component
const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
    // Clear error when user starts typing
    if (error) setError('');
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Add validation logic here
    
    // If valid, log to console
    console.log('Feedback submitted:', feedback);
    
    // Reset form after submission
    setFeedback('');
  };
  
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="feedback" className="block mb-2 font-medium">
            Your Feedback:
          </label>
          <textarea
            id="feedback"
            rows={4}
            className="w-full p-2 border rounded"
            placeholder="Please share your thoughts..."
            value={feedback}
            onChange={handleChange}
          />
          {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};`,
          hint: "Add a condition in handleSubmit to check if feedback.trim() === '' and if so, set an error message like 'Feedback cannot be empty' and return early"
        }
      ]
    },
    quiz: {
      question: "In a controlled component, where is the form data primarily managed?",
      options: [
        { id: "a", text: "Directly in the DOM." },
        { id: "b", text: "In the component's props." },
        { id: "c", text: "In the component's state." },
        { id: "d", text: "Using browser local storage." }
      ],
      correctAnswerId: "c",
      explanation: "In controlled components, the form data is managed by the React component's state, making React the single source of truth."
    },
    keywords: ["forms", "controlled components", "input", "textarea", "select", "onChange", "onSubmit"]
  },
  {
    id: 'context-api',
    title: 'Context API',
    path: '/context-api',
    explanation: `
      <p class="mb-4">The <strong>Context API</strong> provides a way to pass data through the component tree without having to pass props down manually at every level. This is useful for sharing data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.</p>
      <h3 class="text-xl font-semibold mb-2 text-sky-700">Core Concepts:</h3>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong><code>React.createContext()</code>:</strong> Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching <code>Provider</code> above it in the tree.</li>
        <li><strong><code>Context.Provider</code>:</strong> A component that allows consuming components to subscribe to context changes. It accepts a <code>value</code> prop to be passed to consuming components that are descendants of this Provider.</li>
        <li><strong><code>useContext</code> Hook:</strong> A hook to access the context value. It accepts a context object (the result of <code>React.createContext</code>) and returns the current context value for that context.</li>
      </ul>
      <p>Avoid using Context for everything. It's best for data that many components at different nesting levels need.</p>
    `,
    codeExample: {
      description: "Using Context API for theme switching:",
      code: `
import React, { useState, useContext, createContext, ReactNode } from 'react'; // Added ReactNode

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// 1. Create Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined); // Typed context

// 2. Create Provider Component
function ThemeProvider({ children }: { children: ReactNode }) { // Typed children
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for consuming context for better type safety
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// 3. Consuming Component using custom hook
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={\`p-2 rounded \${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-700 text-white'}\`}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

// App structure
function AppWithContext() {
  return (
    <ThemeProvider>
      <div>
        <h1>My App</h1>
        <ThemedButton />
        <SomeOtherComponent />
      </div>
    </ThemeProvider>
  );
}

function SomeOtherComponent() {
  const { theme } = useTheme();
  return <p className={\`p-2 \${theme === 'light' ? 'text-black' : 'text-white'}\`}>Current theme is: {theme}</p>;
}
      `,
      outputDescription: "A button that switches the theme (light/dark) for itself and other components consuming the same context. The paragraph below it also reflects the theme change."
    },
    interactiveExample: {
      description: "Consider how you'd use Context:",
      tasks: [
        "Think about what other global data could be managed with Context (e.g., user authentication status).",
        "Add another component inside `ThemeProvider` that consumes the theme context.",
        "Modify the `toggleTheme` function or the data provided by the context."
      ]
    },
    exercise: {
      title: "User Preferences Context",
      description: "Create a context for user preferences (e.g., `fontSize: 'medium'`). Provide this context at the top level of a small component tree. Create a child component that consumes this context and displays text using the font size from the context. Add a button in the provider or another component to change the font size.",
      solutionHint: "1. `createContext`. 2. `Provider` component holding `fontSize` state and a function to update it. 3. Child component using `useContext` to get and apply `fontSize`."
    },
    quiz: {
      question: "What is the primary purpose of the React Context API?",
      options: [
        { id: "a", text: "To manage local component state." },
        { id: "b", text: "To handle form submissions." },
        { id: "c", text: "To avoid passing props down manually through many levels of components." },
        { id: "d", text: "To perform AJAX requests." }
      ],
      correctAnswerId: "c",
      explanation: "Context API is designed to share values like themes or user info across the component tree without explicit prop drilling."
    },
    keywords: ["context api", "useContext", "createContext", "Provider", "global state", "prop drilling"]
  },
  {
    id: 'react-router',
    title: 'React Router (HashRouter)',
    path: '/react-router',
    explanation: `
      <p class="mb-4"><strong>React Router</strong> is a standard library for routing in React. It enables navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
      <p class="mb-4">For environments where server-side configuration for routing is not possible or desired (like this tutorial app's deployment constraints), <strong><code>HashRouter</code></strong> is a suitable choice. It uses the hash portion of the URL (<code>window.location.hash</code>) to keep your UI in sync with the URL.</p>
      <h3 class="text-xl font-semibold mb-2 text-sky-700">Core Components:</h3>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li><strong><code>&lt;HashRouter&gt;</code>:</strong> The main router component that uses the URL hash. Wrap your entire app (or the part that needs routing) with it.</li>
        <li><strong><code>&lt;Routes&gt;</code>:</strong> A container for multiple <code>&lt;Route&gt;</code> components. It looks through its children <code>&lt;Route&gt;</code> elements to find the best match and renders that branch of the UI.</li>
        <li><strong><code>&lt;Route path="your-path" element={&lt;YourComponent /&gt;} /&gt;</code>:</strong> Defines a mapping between a URL path and a component to render.</li>
        <li><strong><code>&lt;Link to="/your-path"&gt;Link Text&lt;/Link&gt;</code>:</strong> Creates navigation links, similar to HTML <code>&lt;a&gt;</code> tags, but for client-side routing.</li>
        <li><strong><code>useParams</code> Hook:</strong> Accesses URL parameters (e.g., <code>/users/:userId</code>).</li>
        <li><strong><code>useNavigate</code> Hook:</strong> Programmatically navigates the user.</li>
      </ul>
    `,
    codeExample: {
      description: "Basic setup with HashRouter:",
      code: `
import React from 'react';
import { HashRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Home() { return <h2>Home</h2>; }
function About() { return <h2>About</h2>; }
function TopicDetail() {
  let { topicId } = useParams<{ topicId: string }>(); // Typed useParams
  return <h3>Requested topic ID: {topicId}</h3>;
}

function AppRouterExample() {
  return (
    <HashRouter>
      <div>
        <nav>
          <ul className="flex space-x-4 p-2 bg-gray-200">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics/react">React Topic</Link></li>
          </ul>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/topics/:topicId" element={<TopicDetail />} /> {/* Dynamic segment */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

// To use this, render <AppRouterExample /> in your main app.
      `,
      outputDescription: "Provides navigation links. Clicking them changes the URL hash and renders the corresponding component (Home, About, or TopicDetail showing the ID from the URL)."
    },
    interactiveExample: {
      description: "Explore React Router features:",
      tasks: [
        "Add a new route and a corresponding component.",
        "Create a nested route (a Route within another Route's element).",
        "Use the `useNavigate` hook in a component to redirect the user after an action (e.g., form submission)."
      ]
    },
    exercise: {
      title: "Simple Multi-Page App",
      description: "Create a small application with three 'pages': HomePage, ProfilePage, and SettingsPage. Use `HashRouter`, `Routes`, `Route`, and `Link` components to allow navigation between them. Each page component can just display its name for now.",
      solutionHint: "Wrap your main app structure in `<HashRouter>`. Define `<Link>` components for navigation and `<Route>` components to render your page components based on the path."
    },
    quiz: {
      question: "Which React Router component is used to define a mapping between a URL path and a component to render?",
      options: [
        { id: "a", text: "<Link />" },
        { id: "b", text: "<Routes />" },
        { id: "c", text: "<Route />" },
        { id: "d", text: "<HashRouter />" }
      ],
      correctAnswerId: "c",
      explanation: "The `<Route path=\"...\" element={...} />` component is responsible for defining what UI to render when the URL matches its path."
    },
    keywords: ["react router", "HashRouter", "Routes", "Route", "Link", "useParams", "navigation", "spa"]
  }
];