import stats from '../../assets/data/stats.json'

const Header = () => {
  return (
    <header>
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: {stats.total.toLocaleString()}</p>

     
    </header>
  )
}

export default Header
