import Header from "../../components/Header/Header";
import style from "./homePage.module.scss";

const HomePage = () => {
  return (
    <div>
      <Header isAuth={true} />

      <div className={style.homeWrapper}>
        <div className={style.img}></div>
        <h1>Woohoo!</h1>
        <p>
          You have successfully logged into the system, and a token has been assigned to you. To log
          out, please click on ’Sign Out’.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
