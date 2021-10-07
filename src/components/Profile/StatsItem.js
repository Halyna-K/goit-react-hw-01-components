const StatsItem = ({ followers, views, likes }) => {
  <li className="item">
    <span className="label">Followers</span>
    <span className="quantity">{followers}</span>
  </li>;
};

export default StatsItem;
