import { useState, useContext } from 'react'
import Switch from '../Switch/Switch'
import { ThemeContext } from '../../context/ThemeContext'
const DarkModeMenu = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  console.log(theme)
  return (
    <div id="toggle_container">
      <p id="toggle_container_label">Dark Mode</p>
      {/* <ToggleButton value={theme} onToggle={(value) => {
        if (value === 'light') setTheme('dark')
        else setTheme('light')
      }} /> */}
  <Switch theme={theme} />
      
    </div>
  )
}

export default DarkModeMenu
