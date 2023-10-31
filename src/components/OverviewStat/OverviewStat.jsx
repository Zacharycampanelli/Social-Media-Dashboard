import formatNumber from '../../utils/formatNumber';

const OverviewStat = ({ stat, icon, arrow }) => {
  return (
    <div className="overview_stat">
      <div className="overview_stat_head">
        <p>{stat.stat}</p>
        <img src={icon} alt={`${stat.website}-icon`} />
      </div>
      <div className="overview_stat_body">
        <p className="overview_stat_body_label">{formatNumber(stat.statNumber)}</p>
        <div className="overview_stat_body_direction">
          <img src={arrow} alt={`${stat.direction}-arrow`} />
          <p className={stat.direction}> {stat.movedNumber}%</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewStat;
