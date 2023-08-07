import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss"

export const HomePage = () => {
  return (
    <>
      <header className={styles.headerDiv}>
        <img src={logo} alt="KenzieHubLogo" />
        <button className="buttonBlack">Sair</button>
      </header>

      <div className={styles.profileDiv}>
        <h2 className="title1">Olá, Samuel Leão</h2>
        <p className="headline">Primeiro módulo  (Introdução ao Frontend)</p>
      </div>

      <div className={styles.dashboardMain}>
        <h2 className="title1">Que pena! Estamos em desenvolvimento :(</h2>
        <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </div>
    </>
  );
};
