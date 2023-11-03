import { useMediaQuery } from '@uidotdev/usehooks';
import DarkModeMenu from '../DarkModeMenu/DarkModeMenu';

const Header = (stats) => {
  const isDesktopUp = useMediaQuery('only screen and (min-width: 1440px)');
  return (
    <header>
      <div id="header_title_info">
        <h1>Social Media Dashboard</h1>
        <p className='text'>Total Followers: {stats.stats.toLocaleString()}</p>
      </div>
      {isDesktopUp && <DarkModeMenu />}
    </header>
  );
};

export default Header;
