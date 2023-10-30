import OverviewStat from "../OverviewStat/OverviewStat"
import StatContainer from "../StatContainer/StatContainer"

const Overview = ({stats, type}) => {
  return (
    <div>
            <h2>Overview - Today</h2>
            <StatContainer stats={stats} type={type} />
            
            
          
    </div>
  )
}

export default Overview
