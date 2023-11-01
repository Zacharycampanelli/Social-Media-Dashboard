import FacebookImage from '../../assets/images/icon-facebook.svg';
import TwitterImage from '../../assets/images/icon-twitter.svg';
import InstagramImage from '../../assets/images/icon-instagram.svg';
import YoutubeImage from '../../assets/images/icon-youtube.svg';
import ArrowUp from '../../assets/images/icon-up.svg';
import ArrowDown from '../../assets/images/icon-down.svg';
import MainStat from '../MainStat/MainStat';
import OverviewStat from '../OverviewStat/OverviewStat';

const SingleStatContainer = ({ stat, type }) => {
  let iconMap = {
    Facebook: FacebookImage,
    Twitter: TwitterImage,
    Instagram: InstagramImage,
    Youtube: YoutubeImage,
  };

  let arrowMap = {
    up: ArrowUp,
    down: ArrowDown,
  };

  const getIcon = () => {
    let website = stat.website;
    return iconMap[website];
  };

  const getArrowIcon = () => {
    let arrow = stat.direction;
    return arrowMap[arrow];
  };

  if (type === 'overview') {
    return (
      
        <OverviewStat stat={stat} icon={getIcon()} arrow={getArrowIcon()} />
  
    );
  }

  if (type === 'main') {
    return (
    
        <MainStat stat={stat} icon={getIcon()} arrow={getArrowIcon()} />
   
    );
  }
};

export default SingleStatContainer;
