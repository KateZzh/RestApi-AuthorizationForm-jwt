import { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import style from "./signInPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/context";

const SignInPage = () => {
  const { logIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const authUser = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const sendForm = async () => {
    try {
      const req = await axios.post("http://localhost:3001/user/auth/", data, {
        withCredentials: true,
      });
      
      logIn();
      navigate("/home");

      console.log(req);
    } catch (er) {
      alert(er.response.data);
    }
  };

  return (
    <div>
      <Header />

      <div className={style.signInWrapper}>
        <div className={style.infoWrapper}>
          <h2>Sign In</h2>
          <p>Log in to access your account or create one. Verify your email for seamless access.</p>
        </div>

        <div className={style.allFormsWrapper}>
          <div className={style.formWrapper}>
            <p>email</p>
            <input id="email" type="text" placeholder="Your email" onChange={authUser} />
          </div>

          <div className={style.formWrapper}>
            <p>password</p>
            <input
              id="password"
              type="password"
              placeholder="Must be at least 8 characters."
              onChange={authUser}
            />
          </div>
        </div>

        <div className={style.navOtherPagesWrapper}>
          <div className={style.btnContinue} onClick={sendForm}>
            Continue
          </div>

          <p>
            Not registered yet? <Link to={"/sign_up"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
