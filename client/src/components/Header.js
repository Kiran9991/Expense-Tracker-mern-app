import { useContext } from "react";
import {UserContext} from "../store/user-context";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { isLogin, setIsLogin } = useContext(UserContext)
  const navigate = useNavigate();

  const signoutHandler = () => {
    localStorage.removeItem('token');
    setIsLogin();
    navigate('/sign-in')
  }

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navItemsLeftContainer}>
          {!isLogin && (
            <Link to={"/home"} className={styles.navLeftItem}>
              Home
            </Link>
          )}
          {isLogin && <Link to={"/expense/form"} className={styles.navLeftItem}>Expense Tracker</Link>}
          {isLogin && (
            <Link to={"/about-us"} className={styles.navLeftItem}>
              About Us
            </Link>
          )}
        </div>

        <div className={styles.navItemsRightContainer}>
            {!isLogin && <Link to={"/sign-in"} className={styles.navRightItem}>
              Sign in
            </Link>} 
            {/* {!isLogin && <Link to={"/sign-up"} className={styles.navRightItem}>
              Sign Out
            </Link>} */}
            {isLogin && <button className={styles.navBtn} onClick={signoutHandler}>Sign out</button>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
