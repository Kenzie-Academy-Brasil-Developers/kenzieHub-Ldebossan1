import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const HomePage = ({ user, setUser }) => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <header className={styles.headerDiv}>
        <img src={logo} alt="KenzieHubLogo" />
        <button onClick={() => logoutUser()} className="buttonBlack">
          Sair
        </button>
      </header>

      <div className={styles.profileDiv}>
        <h2 className="title1">Olá,{user?.name}</h2>
        <p className="headline">{user?.course_module}</p>
      </div>

      <div className={styles.dashboardMain}>
        <h2 className="title1">Que pena! Estamos em desenvolvimento :(</h2>
        <p className="paragraph">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </>
  );
};
