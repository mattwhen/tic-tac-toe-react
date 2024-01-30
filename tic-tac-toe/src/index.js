import React from "react";
import ReactDOM from "react-dom"; // React's library to talk to web browsers (React DOM)
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap library.

// index.js is the bridge between the App.js file and the web browser. 
import App from "./App"; // The component created in App.js
ReactDOM.render(<App />, document.getElementById("root"));
// The remainder of the file brings all the pieces together
// and injects the final product into index.html in the 'public' folder. 
