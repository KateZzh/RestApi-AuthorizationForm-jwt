import style from "./header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { token, logOut } = useAuth();
  const navigate = useNavigate();

  function logOutUser() {
    logOut();
    navigate("/");
  }

  return (
    <div>
      <div className={style.headerWrapper}>
        {!token ? (
          <>
            <div className={style.signIn}>
              <Link to={"/"}>Sign in</Link>
            </div>

            <div className={style.signUp}>
              <Link to={"/signup"}>Sign Up</Link>
            </div>
          </>
        ) : (
          <>
            <div className={style.signIn}>
              <p onClick={logOutUser}>Sign Out</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
