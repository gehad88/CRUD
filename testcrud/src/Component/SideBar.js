import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <ul className="list-unstiled">
        <li>
          <Link to="/products">Get ALL Products</Link>
        </li>
        <li>
          <Link to="/">Get ALL Categories</Link>
        </li>
      </ul>
    </>
  );
}

export default SideBar;
