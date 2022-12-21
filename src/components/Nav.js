const Nav = ({ Link }) => {
  return (
    <ul className="flex justify-between text-2xl xl:text-3xl">
      <li>
        <Link to="/happy">
          <h2 className="text-[#FF8787]">Happy</h2>
        </Link>
      </li>
      <li>
        <Link to="/birthday">
          <h2 className="text-[#F8C4B4]">Birthday</h2>
        </Link>
      </li>
      <li>
        <Link to="/to">
          <h2 className="text-[#E5EBB2]">To</h2>
        </Link>
      </li>
      <li>
        <Link to="/you">
          <h2 className="text-[#BCE29E]">You</h2>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
