import formatNumber from '../../utils/formatNumber';

const MainStat = ({ stat, icon, arrow }) => {
  let statLabel = stat.website === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS';

  return (
    <div className={`main_stat main_border ${stat.website.toLowerCase()}`}>
      <div className="main_stat_header">
        <img src={icon} alt={`${stat.website}-icon`} />
        <p id="user">@{stat.user}</p>
      </div>
      <div className="main_stat_main">
        <p className="main_stat_main_number">{formatNumber(stat.statNumber)}</p>
        <p className="main_stat_main_label">{statLabel}</p>
      </div>
      <div className="main_stat_direction_moved">
        <img src={arrow} alt={`${stat.direction}-arrow`} />
        <p className={stat.direction}> {stat.movedNumber} Today</p>
      </div>
    </div>
  );
};

export default MainStat;
