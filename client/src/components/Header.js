import { useContext } from "react";
import { UserContext } from "../store/user-context";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import SignoutSymbol from "../images/switch symbol.png";
import signinSymbol from "../images/sign in 2.png";
import { expenseContext } from "../store/expense-context";
import { LocalHost } from "../App";

export function decodeJWT(token) {
  if (!token) return;
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((char) => "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

  return JSON.parse(jsonPayload);
}

const Header = () => {
  const { isLogin, setIsLogin, isPremium, setIsPremium } =
    useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { username } = decodeJWT(token) || "";
  const { deleteAllExpense } = useContext(expenseContext);

  const signoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('isPremium');
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
          "Authorization": `${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      alert(`${data.message}`)
      setIsPremium(true);
      localStorage.setItem('isPremium', data.response)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navItemsLeftContainer}>
          {!isLogin && (
            <Link to={"/home"} className={styles.navLeftItem}>
              Home
            </Link>
          )}
          {isLogin && (
            <Link to={"/expense/form"} className={styles.navLeftItem}>
              Expense Tracker
            </Link>
          )}
          {isLogin && (
            <Link to={"/about-us"} className={styles.navLeftItem}>
              About Us
            </Link>
          )}
        </div>

        <div className={styles.navItemsRightContainer}>
          {isLogin && (
            <div
              onClick={buyPremiumBtnHandler}
              className={
                isPremium ? styles.premiumElement : styles.nonPremiumElement
              }
            >
              {isPremium ? "Premium" : "Buy Premium"}
            </div>
          )}

          {isLogin && <div className={styles.userNameText}>{username}</div>}

          {!isLogin && (
            <Link to={"/sign-in"} className={styles.navRightItem}>
              <img className={styles.navBtn} src={signinSymbol} alt="sign in" />
            </Link>
          )}

          {isLogin && (
            <img
              className={styles.navBtn}
              src={SignoutSymbol}
              alt="Sign out"
              onClick={signoutHandler}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
