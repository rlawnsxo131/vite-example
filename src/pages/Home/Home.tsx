import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  return (
    <div>
      <h1>{location.pathname}</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/page1">page1</Link>
        </li>
        <li>
          <Link to="/page2">page2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
