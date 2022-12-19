const Nav = ({ Link }) => {
  return (
    <ul className="flex justify-between bg-red-500 text-2xl xl:text-3xl">
      <li>
        <Link to="/happy">Happy</Link>
      </li>
      <li>
        <Link to="/birthday">Birthday</Link>
      </li>
      <li>
        <Link to="/to">To</Link>
      </li>
      <li>
        <Link to="/you">You</Link>
      </li>
    </ul>
  );
};

export default Nav;
