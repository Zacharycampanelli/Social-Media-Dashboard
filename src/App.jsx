import DarkModeMenu from './components/DarkModeMenu/DarkModeMenu';
import StatContainer from './components/StatContainer/StatContainer';
import Header from './components/header/Header';
import stats from './assets/data/stats.json';

function App() {
  return (
    <>
      <Header stats={stats.total} />
      <DarkModeMenu />
      <StatContainer stats={stats.main}/>
    </>
  );
}

export default App;
