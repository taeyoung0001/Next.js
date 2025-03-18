import NavLink from "./nav-link";
import Link from "next/link";

export default function MainHeader() {
  // console.log(path);
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink LinkName={"news"} />
          </li>
          <li>
            <NavLink LinkName={"archive"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
