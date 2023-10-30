import DarkModeMenu from './components/DarkModeMenu/DarkModeMenu';
import StatContainer from './components/StatContainer/StatContainer';
import Header from './components/header/Header';
import stats from './assets/data/stats.json';
import BackgroundColor from './components/BackgroundColor/BackgroundColor';
import Overview from './components/Overview/OverView';

function App() {
  return (
    <>
    <BackgroundColor />
      
          <Header stats={stats.total} />
      <DarkModeMenu />
      <StatContainer stats={stats.main} type="main"/>
  
      <Overview stats={stats.overview} type="overview" />
    </>
  );
}

export default App;
