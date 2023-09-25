import { useState } from "react";
import Header from "../../components/Header/Header";
import style from "./signUpPage.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [data, setData] = useState({ name: "", surname: "", email: "", password: "" });

  // const arr = ["email", "password"]

  const getValue = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const request = async () => {
    try {
      const req = await axios.post("http://localhost:3001/user/", data);
      console.log(req);
      alert(req.statusText);
    } catch (er) {
      alert(er.response.data);
    }
  };

  return (
    <div>
      <Header isAuth={false} />

      <div className={style.signUpWrapper}>
        <div className={style.infoWrapper}>
          <h2>Welcome, let’s create an account</h2>
          <p>
            Create an account to keep track of your customers, and contributors. Once your account
            has been created then don’t forget to verify your account through mail.
          </p>
        </div>

        <div className={style.allFormsWrapper}>
          <div className={style.userWrapper}>
            <div className={style.formWrapper}>
              <p>name</p>
              <input id="name" type="text" placeholder="Your name" onChange={getValue} />
            </div>

            <div className={style.formWrapper}>
              <p>surname</p>
              <input id="surname" type="text" placeholder="Your surname" onChange={getValue} />
            </div>
          </div>

          <div className={style.formWrapper}>
            <p>email</p>
            <input id="email" type="text" placeholder="Your email" onChange={getValue} />
          </div>

          <div className={style.formWrapper}>
            <p>password</p>
            <input
              id="password"
              type="password"
              placeholder="Must be at least 8 characters."
              onChange={getValue}
            />
          </div>
        </div>

        <div className={style.navOtherPagesWrapper}>
          <div className={style.btnContinue} onClick={request}>
            Continue
          </div>

          <p>
            Already registered? <Link>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
