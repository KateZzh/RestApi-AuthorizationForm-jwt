import style from "./header.module.scss";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <div className={style.headerWrapper}>
        <div className={style.signIn}>
          <Link to={"/"}>Sign in</Link>
        </div>

        <div className={style.signUp}>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
