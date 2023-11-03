import DarkModeMenu from './components/DarkModeMenu/DarkModeMenu';
import StatContainer from './components/StatContainer/StatContainer';
import Header from './components/header/Header';
import stats from './assets/data/stats.json';
import BackgroundColor from './components/BackgroundColor/BackgroundColor';
import Overview from './components/Overview/OverView';
import { useMediaQuery } from '@uidotdev/usehooks';
import {useState, useContext} from 'react'
import { ThemeContext } from './context/ThemeContext';
function App() {
  const { theme, setTheme } = useContext(ThemeContext)
  const isDesktopUp = useMediaQuery('only screen and (min-width: 1440px)');
  // const [theme, setTheme] = useState('dark')
  return (
    <div className={theme}>

      <BackgroundColor />
      <Header stats={stats.total} />
      {!isDesktopUp &&<DarkModeMenu />}
      <StatContainer stats={stats.main} type="main" />

      <Overview stats={stats.overview} type="overview" />
      </div>
  );
}

export default App;
