import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const BackgroundColor = () => {

  const {theme} = useContext(ThemeContext)
  return (
    <div id="main_background" className={`${theme}`}>
        
    </div>
  )
}

export default BackgroundColor
