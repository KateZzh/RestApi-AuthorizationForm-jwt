import React from "react";
import Header from "../../components/Header/Header";
import style from "./signUpPage.module.scss";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div>
      <Header />

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
              <input type="text" placeholder="Your name" />
            </div>

            <div className={style.formWrapper}>
              <p>surname</p>
              <input type="text" placeholder="Your surname" />
            </div>
          </div>

          <div className={style.formWrapper}>
            <p>email</p>
            <input type="text" placeholder="Your email" />
          </div>

          <div className={style.formWrapper}>
            <p>password</p>
            <input type="password" placeholder="Must be at least 8 characters." />
          </div>
        </div>

        <div className={style.navOtherPagesWrapper}>
          <div className={style.btnContinue}>Continue</div>

          <p>
            Already registered? <Link>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
