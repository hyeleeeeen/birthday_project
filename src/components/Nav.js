const Nav = ({ Link }) => {
  return (
    <ul className="flex justify-between text-2xl xl:text-3xl">
      <li>
        <Link to="/happy">
          <h2>Happy</h2>
        </Link>
      </li>
      <li>
        <Link to="/birthday">
          <h2>Birthday</h2>
        </Link>
      </li>
      <li>
        <Link to="/to">
          <h2>To</h2>
        </Link>
      </li>
      <li>
        <Link to="/you">
          <h2>You</h2>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
