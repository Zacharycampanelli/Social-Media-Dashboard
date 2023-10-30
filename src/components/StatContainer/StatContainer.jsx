import Stat from '../Stat/Stat';

import FacebookImage from '../../assets/images/icon-facebook.svg';
import TwitterImage from '../../assets/images/icon-twitter.svg';
import InstagramImage from '../../assets/images/icon-instagram.svg';
import YoutubeImage from '../../assets/images/icon-youtube.svg';
import OverviewStat from '../OverviewStat/OverviewStat';

const StatContainer = ({ stats, type }) => {
  let iconMap = {
    Facebook: FacebookImage,
    Twitter: TwitterImage,
    Instagram: InstagramImage,
    Youtube: YoutubeImage,
  };


  // if (type === 'overview') {
  //   return (
  //     <div className="stat_container">
  //       {stats.map((stat, i) => (
  //         <OverviewStat stat={stat} icon={iconMap[stat.website]} key={i} />
  //       ))}
  //     </div>
  //   )
  // }

  console.log(stats);
  return (
    <div className="stat_container">
      {stats.map((stat, i) => (
        <Stat stat={stat} icon={iconMap[stat.website]} type={type} key={i} />
      ))}
    </div>
  );
};

export default StatContainer;
