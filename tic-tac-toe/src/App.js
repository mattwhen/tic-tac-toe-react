import React from "react";
import Board from "./components/Board";

// Components are used to render, manage, and update the UI elements in our application.
// The export keyword tells other files using your code that it's available for use.
// The default keyword tells other files using your code that it's the main function in your file.
export default function App() {
  // The return JS keyword means whatever comes after is returned
  // as a value to the caller of the function. JSX is a combination of JavaScript and HTML tags.
return (
  <>
  {/* Returns Board component */}
  <Board />
  </>
)
}

