import { useContext } from "react";
import { UserContext } from "../../store/user-context";
import { expenseContext } from "../../store/expense-context";
import { useNavigate, useLocation } from "react-router-dom";
import symbols from "../../images/Symbol";
import NavBarLink from "./NavBarLink";
import decodeToken from "../../hook/decodeToken";
import { LocalHost } from "../..";
import Icon from "./Icon";
import Col from "./Col";

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
    <>
      {isLogin && (
        <Col>
          <Col>
            {/* Expense Tracker Symbol */}
            <NavBarLink to={"/expense/form"}>
              <Icon src={symbols.Expense} />
            </NavBarLink>

            {/* Navigation Links */}
            <NavBarLink to={"/expense/dashboard"}>Dashboard</NavBarLink>
            <NavBarLink to={"/expense/accounts"}>Account</NavBarLink>
            <NavBarLink to={"/expense/form"}>Form</NavBarLink>
            <NavBarLink to={`/expense/expenses/${page}`}>List</NavBarLink>
            <NavBarLink to={"/expense/about-us"}>About Us</NavBarLink>
          </Col>

          <Col>
            <Col onClick={buyPremiumBtnHandler}>
              <Icon src={symbols.Premium} />
              <div>{isPremium ? "Premium" : "Buy Premium"}</div>
            </Col>

            <div
              className="my-1 bg-purple-300 rounded-lg 
            flex items-center 
            w-fit border border-black p-3
            hover:bg-purple-800 hover:text-white 
            cursor-default "
            >
              {username}
            </div>

            <div onClick={signoutHandler} className=" transition hover:brightness-50 ">
              <Icon src={symbols.Signout} />
            </div>
          </Col>
        </Col>
      )}
    </>
  );
};

export default Header;
