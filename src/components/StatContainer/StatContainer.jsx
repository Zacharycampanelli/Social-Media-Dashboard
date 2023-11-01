import Stat from '../MainStat/MainStat';

import FacebookImage from '../../assets/images/icon-facebook.svg';
import TwitterImage from '../../assets/images/icon-twitter.svg';
import InstagramImage from '../../assets/images/icon-instagram.svg';
import YoutubeImage from '../../assets/images/icon-youtube.svg';
import SingleStatContainer from '../SingleStatContainer/SingleStatContainer';

const StatContainer = ({ stats, type }) => {



  return (
    <div className={type === 'overview' ? `stat_container wrap` : `stat_container`}>
      {stats.map((stat, i) => (
        <SingleStatContainer stat={stat} type={type} key={i} />
      ))}
    </div>
  );
};

export default StatContainer;
