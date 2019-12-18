import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const headerStyle = {
  marginTop: "2vmin",
  marginBottom: "6vmin"
}

const linkStyle = {
  marginRight: 15
}

type Route = {
  url: string,
  name: string,
}

const routes:Route[] = [
  { url: "/", name: "Home" },
  { url: "/about", name: "About" },
  { url: "/shows", name: "TV Shows" },
]

const Header = () => {
  const router = useRouter();

  const isCurrentUrl = (url:string):boolean => {
    return router.asPath === url;
  }

  return (
    <header style={headerStyle}>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          {routes.map(r => (
            <li className="nav-item" key={r.url}>
              <Link href={r.url}>
                <a className={classNames("nav-link", {active: isCurrentUrl(r.url)})}>{r.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;