import ArrowUp from '../../assets/images/icon-up.svg';
import ArrowDown from '../../assets/images/icon-down.svg';
import formatNumber from '../../utils/formatNumber';

const Stat = ({ stat, icon, type }) => {
  let singleStat = stat;
  console.log(singleStat);
  let currentSite = singleStat.website;
  let website = '';
  let statLabel = currentSite === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS';
  let arrowDirection = singleStat.direction === 'up' ? ArrowUp : ArrowDown;
  switch (currentSite) {
    case 'Facebook':
      website = 'Facebook';
      break;
    case 'Twitter':
      website = 'Twitter';
      break;
    case 'Instagram':
      website = 'Instagram';
      break;
    case 'Youtube':
      website = 'Youtube';
      break;
  }
  console.log(icon);

if(type === 'overview')

  return (
    <div className="overview_stat">
      <div className="overview_stat_head">
        <p>{stat.stat}</p>
        <img src={icon} alt={`${website}-icon`} />
      </div>
      <div className="overview_stat_body">

      </div>
    </div>
  )


  return (
    <div className={`main_stat main_border ${website.toLowerCase()}`}>
      <div className="main_stat_header">
        <img src={icon} alt={`${website}-icon`} />
        <p id="user">@{stat.user}</p>
      </div>
      <div className="main_stat_main">
        <p className="main_stat_main_number">{formatNumber(stat.followers)}</p>
        <p className="main_stat_main_label">{statLabel}</p>
      </div>
      <div className="main_stat_direction_moved">
        <img src={arrowDirection} alt={`${singleStat.direction}-arrow`} />
        <p className={stat.direction}> {singleStat.movedNumber} Today</p>
      </div>
    </div>
  );
};

export default Stat;
