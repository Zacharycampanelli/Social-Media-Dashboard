import MainStat from "../MainStat/MainStat";

import FacebookImage from '../../assets/images/icon-facebook.svg';
import TwitterImage from '../../assets/images/icon-twitter.svg';
import InstagramImage from '../../assets/images/icon-instagram.svg';
import YoutubeImage from '../../assets/images/icon-youtube.svg';

const StatContainer = stats => {
  let statGroup = stats.stats;
  let iconGroup = [FacebookImage, TwitterImage, InstagramImage, YoutubeImage];

  return (
    <div className="stat_container">
      {statGroup.map((stat, i) => <MainStat stat={stat} icon={iconGroup[i]} key={i} />)}
    </div>
  )
}

export default StatContainer
