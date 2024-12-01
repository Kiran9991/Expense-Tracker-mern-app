import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (prop) => {
  const isLogin = prop.isLogin;
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navItemsLeftContainer}>
          {!isLogin && (
            <Link to={"/home"} className={styles.navLeftItem}>
              Home
            </Link>
          )}
          <Link to={"/expense/form"} className={styles.navLeftItem}>Expense Tracker</Link>
          {!isLogin && (
            <Link to={"/about-us"} className={styles.navLeftItem}>
              About Us
            </Link>
          )}
        </div>

        <div className={styles.navItemsRightContainer}>
          {!isLogin && (
            <Link to={"/sign-in"} className={styles.navRightItem}>
              Sign in
            </Link>
          )}
          {isLogin && (
            <Link to={"/sign-up"} className={styles.navRightItem}>
              Sign up
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
