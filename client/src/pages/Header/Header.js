import { useContext } from "react";
import { UserContext } from "../../store/user-context";
import { expenseContext } from "../../store/expense-context";
import styles from "./Header.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import symbols from "../../images/Symbol";
import NavBarLink from "./NavBarLink";
import decodeToken from "../../hook/decodeToken";
import { LocalHost } from "../..";

const Header = () => {
  const { isLogin, setIsLogin, isPremium, setIsPremium } =
    useContext(UserContext);
  const { page, deleteAllExpense } = useContext(expenseContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { username } = decodeToken(token) || "";

  // Handles user sign-out
  const signoutHandler = () => {
    navigate("/sign-in");
    localStorage.clear();
    deleteAllExpense();
    setIsLogin(false);
    setIsPremium(false);
  };

  // Handles premium purchase
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
      alert(data.message);
      setIsPremium(true);
      localStorage.setItem("isPremium", data.response);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navItemsLeftContainer}>
        {isLogin && (
          <>
            {/* Expense Tracker Symbol */}
            <NavBarLink to={"/expense/form"}>
              <img
                className={styles.expenseSymbol}
                src={symbols.Expense}
                alt="Expense Tracker symbol"
              />
            </NavBarLink>

            {/* Navigation Links */}
            <NavBarLink to={"/expense/dashboard"}>Dashboard</NavBarLink>
            <NavBarLink to={"/expense/accounts"}>Account</NavBarLink>
            <NavBarLink to={"/expense/form"}>Form</NavBarLink>
            <NavBarLink to={`/expense/expenses/${page}`}>List</NavBarLink>
            <NavBarLink to={"/expense/about-us"}>About Us</NavBarLink>
          </>
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
            <img
              style={{ height: "40px" }}
              src={symbols.Premium}
              alt="premium"
            />
            <p style={{ padding: "10px 0px" }}>
              {isPremium ? "Premium" : "Buy Premium"}
            </p>
          </div>
        )}

        {isLogin && (
          <div
            className="my-3 bg-purple-300 rounded-lg flex items-center 
            w-fit px-2 border border-black p-5"
          >
            {username}
          </div>
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
