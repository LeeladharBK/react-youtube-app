import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyAg9oT9ZnHUbVHJjYBjJN5Ikuy5nKdWS_Y";

// componenet should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// insert to DOM
// take this component generarted HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
