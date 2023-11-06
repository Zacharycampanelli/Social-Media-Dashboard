import DarkModeMenu from './components/DarkModeMenu/DarkModeMenu';
import StatContainer from './components/StatContainer/StatContainer';
import Header from './components/Header/Header';
import stats from './assets/data/stats.json';
import BackgroundColor from './components/BackgroundColor/BackgroundColor';
import Overview from './components/Overview/Overview';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDesktopUp = useMediaQuery('only screen and (min-width: 1440px)');
  let themeString = '';

  // Prevents theme from becomming undefined on first switch
  const getTheme = () => {
    themeString = theme;
    if (themeString === undefined) themeString = 'dark';
    return themeString;
  };

  return (
    <div className={getTheme()}>
      <BackgroundColor />
      <Header stats={stats.total} />
      {!isDesktopUp && <DarkModeMenu />}
      <StatContainer stats={stats.main} type="main" />
      <Overview stats={stats.overview} type="overview" />
    </div>
  );
}

export default App;
