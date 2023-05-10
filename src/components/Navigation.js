import { NavLink } from 'react-router-dom';
import Login from './Login';

function Navigation() {
  return (
    <header id="main-nav">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dramas"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Dramas
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Sign Up
            </NavLink>
          </li> */}
          <li>
            <Login />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;