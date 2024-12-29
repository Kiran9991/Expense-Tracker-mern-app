import { useContext } from "react";
import { UserContext } from "../../store/user-context";
import styles from "./Header.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

import symbols from "../../images/Symbol";

import { expenseContext } from "../../store/expense-context";
import { LocalHost } from "../../App";
import decodeToken from "../../hook/decodeToken";

const Header = () => {
  const { isLogin, setIsLogin, isPremium, setIsPremium } =
    useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { page } = useContext(expenseContext);
  const token = localStorage.getItem("token");
  const { username } = decodeToken(token) || "";
  const { deleteAllExpense } = useContext(expenseContext);

  const signoutHandler = () => {
    localStorage.clear();
    deleteAllExpense();
    setIsLogin(false);
    setIsPremium(false);
    navigate("/sign-in");
  };

  const buyPremiumBtnHandler = async () => {
    try {
      const response = await fetch(`${LocalHost}/expense/buy-premium`, {
        method: "POST",
        headers: {
          Authorization: `${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      alert(`${data.message}`);
      setIsPremium(true);
      localStorage.setItem("isPremium", data.response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navItemsLeftContainer}>
        {!isLogin && (
          <Link to={"/home"} className={styles.navLeftItem}>
            Home
          </Link>
        )}

        {isLogin && [
          <Link to={"/expense/form"} key={Math.random()}>
            <img
              className={styles.expenseSymbol}
              src={symbols.Expense}
              alt="Expense Tracker symbol"
            />
          </Link>,
          <Link to={"/dashboard"} className={styles.navLeftItem} key={Math.random()}>
          Dashboard
          </Link>,
          <Link to={"/expense/form"} className={styles.navLeftItem} key={Math.random()}>
            Expense Tracker
          </Link>,
          <Link to={`/expense/expenses/${page}`} className={styles.navLeftItem} key={Math.random()}>
            List
          </Link>,
          <Link to={"/about-us"} className={styles.navLeftItem} key={Math.random()}>
            About Us
          </Link>,
        ]}
      </div>

      <div className={styles.navItemsRightContainer}>
        {isLogin && (
          <div
            onClick={buyPremiumBtnHandler}
            className={
              isPremium ? styles.premiumElement : styles.nonPremiumElement
            }
          >
            <img style={{ height: "40px" }} src={symbols.Premium} alt="premium" />
            <p style={{ padding: "10px 0px" }}>
              {isPremium ? "Premium" : "Buy Premium"}
            </p>
          </div>
        )}

        {isLogin && <div className={styles.userNameText}>{username}</div>}

        {!isLogin && (
          <Link to={"/sign-in"} className={styles.navRightItem}>
            <img className={styles.navBtn} src={symbols.Signin} alt="sign in" />
          </Link>
        )}

        {isLogin && (
          <img
            className={styles.navBtn}
            src={symbols.Signout}
            alt="Sign out"
            onClick={signoutHandler}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
