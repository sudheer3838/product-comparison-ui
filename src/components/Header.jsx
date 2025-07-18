import React from "react";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header" role="navgations">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://www.addteq.com/wp-content/uploads/2022/11/brand-logo.png" alt="Logo" style={{height:"32px"}} />
          </a>
          <button
            onClick={toggleDarkMode}
            aria-pressed={darkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

    </header>
  );
};

export default Header;
