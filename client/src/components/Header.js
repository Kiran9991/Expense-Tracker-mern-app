import styles from "./Header.module.css";

const Header = (prop) => {
    const isLogin = prop.isLogin;
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navItemsLeftContainer}>
          <div className={styles.navLeftItem}>Home</div>
          {isLogin && <div className={styles.navLeftItem}>About Us</div>}
        </div>
        
        <div className={styles.navItemsRightContainer}>
            {!isLogin && <div className={styles.navRightItem}>Sign in</div>}
            {isLogin && <div className={styles.navRightItem}>Sign up</div>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
