import StatContainer from '../StatContainer/StatContainer';

const Overview = ({ stats, type }) => {
  return (
    <div id="overview">
      <h2 id="overview_header">Overview - Today</h2>
      <StatContainer stats={stats} type={type} />
    </div>
  );
};

export default Overview;
