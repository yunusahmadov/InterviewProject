import React,{ useState, useEffect } from 'react';

function DarkModeBtn() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeStored = localStorage.getItem('isDarkMode');
    setIsDarkMode(isDarkModeStored === 'true');
  }, []);

  const handleToggle = () => {
    const toggledMode = !isDarkMode;
    setIsDarkMode(toggledMode);
    localStorage.setItem('isDarkMode', toggledMode.toString());

    const root = document.documentElement;
    root.classList.toggle('dark-mode', toggledMode);
  };

  return (
    <button onClick={handleToggle}>
      {isDarkMode ? 'Light mode' : 'Dark mode'}
    </button>
  );
}

export default DarkModeBtn;