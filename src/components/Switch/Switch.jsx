import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Switch = ({ theme }) => {
  const { setTheme } = useContext(ThemeContext);

  // Prevents theme from becomming undefined on first switch
  useEffect(() => {
    document.body.className = '';
    let themeString = theme === undefined ? 'dark' : theme;
    document.body.classList.add(themeString);
  }, [theme]);

  const handleClick = () => {
    setTheme(() => setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div id="toggle-btn">
      <input type="checkbox" id="checkbox-input" onClick={handleClick} value={theme} />
      <label htmlFor="checkbox-input" className="round-slider-container">
        <div className="round-slider"></div>
      </label>
    </div>
  );
};

export default Switch;
