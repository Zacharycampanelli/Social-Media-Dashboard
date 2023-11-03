import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


const Switch = ({theme}) => {
  const { setTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme)
  },[theme])
  

    const handleClick = () => {
   
      setTheme(() => 
        setTheme(theme === 'light' || theme=== undefined ? 'dark' : 'light' ))

      }
          

  
  return (
    <div id="toggle-btn">
      <input type="checkbox" id="checkbox-input" onClick={handleClick} value={theme}/>
      <label htmlFor="checkbox-input" className='round-slider-container'><div className='round-slider'></div></label>
    </div>
  )
}

export default Switch
