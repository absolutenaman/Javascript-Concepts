React components, particularly class components, progress through a series of stages known as the component lifecycle. 
Predefined methods, known as lifecycle methods, are invoked at specific points within these stages, allowing developers 
to execute code at critical moments.
The three primary phases of a React component's lifecycle are:
Mounting:
This phase marks the birth of a component, where it is created and inserted into the Document Object Model (DOM). 
Key methods in this phase include:
constructor(): Used for initializing state and binding methods.
static getDerivedStateFromProps(props, state): A static method invoked before render(), used to update state based on prop changes.
render(): Responsible for rendering the component's UI.
componentDidMount(): Invoked immediately after the component is mounted, often used for data fetching or DOM manipulations.
Updating:
This phase occurs when a component's props or state change, leading to a re-render. Notable methods in this phase are:
static getDerivedStateFromProps(props, state): (Also invoked during updates)
shouldComponentUpdate(nextProps, nextState): Determines if a component should re-render, allowing performance optimizations.
render(): (Re-renders the UI)
getSnapshotBeforeUpdate(prevProps, prevState): Called right before the DOM is updated, allowing capture of information from the DOM.
componentDidUpdate(prevProps, prevState, snapshot): Invoked after the component updates, suitable for side effects that require the updated DOM.
Unmounting:
This is the final phase, where a component is removed from the DOM.
componentWillUnmount(): Executed just before a component is unmounted and destroyed, used for cleanup tasks like clearing timers or unsubscribing from events.
Note: While these methods are primarily associated with class components, functional components achieve similar lifecycle management through React Hooks like useState for state management and useEffect for handling side effects that mimic componentDidMount, componentDidUpdate, and componentWillUnmount.