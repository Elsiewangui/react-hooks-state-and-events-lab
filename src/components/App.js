import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Correctly use array destructuring to get state and setState function
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode state
  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Determine className based on isDarkMode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
