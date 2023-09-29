import style from "./header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/context";
import { useContext } from "react";

const Header = () => {
  const { token, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  function logOutUser() {
    logOut();
    navigate("/sign_in");
  }

  return (
    <div>
      <div className={style.headerWrapper}>
        {!token ? (
          <>
            <div className={style.signIn}>
              <Link to={"/sign_in"}>Sign in</Link>
            </div>

            <div className={style.signUp}>
              <Link to={"/sign_up"}>Sign Up</Link>
            </div>
          </>
        ) : (
          <>
            <div className={style.signOut}>
              <p onClick={logOutUser}>Sign Out</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
