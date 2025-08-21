# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# React
- The library for web and native user interfaces.
- Built by Facebook.
- Used to build single page application.
- The most popular frontend framework.
- Huge community.
- Maintained by Facebook.
- Job Opportunities.
- one way data flow.

# Virtual DOM
- Light weight copy or real DOM
- Whenever state changes:
    - React updates the virtual DOM.
    - Compares with the previous DOM => (Diffing)
    - Updates only the changed parts in the Real DOM => (Reconciliation)
    - Faster rendering
    - Better Performance

# Component
- UI block 
- Reusable
- Functional Component, class Component
- stateful component: State/UI can be updated.
- Stateless components: State can be updated, UI cannot be changed.


# Hooks
- Special function
- It enables us to make functional component stateful.
- Using hooks, we can implement state management in Functional component.

1. useState: Local state management
2. useEffect: side effect
3. useRef : accessing DOM elements
4. Custom hooks 

# State
- Object (mutable/changeable)
- state is updated on user interaction, event triggers or API calls
- Whenever state value changes, UI is re-rendered.

# JSX
- JS/HTML code

# Props
- Properties of a component.
- Similar to HTML element attribute.

# Lifecycle methods
1. Component create
2. Component update
3. Component delete

componentDidMount
componentDidUpdate
componentWillUnmount

# props drilling: Passing data from a parent component to a deeply nested child component through multiple intermediary components. 

## Redux : A javaScript library for predictable and maintainable global state management.
The core concepts of redux:
1. Store: Stores state data, only one store, to maintain single source of truth
2. Action: Function that is dispatch on user interaction, event trigger, api call (to change state)
3. Reducer: Binds store and action, stores state data, responsible for UI transition.

# redux toolkit : It is the official library to simplify Redux development.

