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
