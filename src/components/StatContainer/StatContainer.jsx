import MainStat from "../MainStat/MainStat";

const StatContainer = stats => {
  let statGroup = stats.stats;
  return (
    <div className="stat_container">
      {statGroup.map((stat, i) => <MainStat stat={stat} key={i} />)}
    </div>
  )
}

export default StatContainer
