const Header = (stats) => {
  return (
    <header>
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: {stats.stats.toLocaleString()}</p>
    </header>
  );
};

export default Header;
