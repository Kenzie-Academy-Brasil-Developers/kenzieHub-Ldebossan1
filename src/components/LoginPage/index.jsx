import logo from "../../assets/Logo.svg"
import styles from "./styles.module.scss";

export const LoginPage = () => {
  return (
    <>
      <section className={styles.container}>
        <div>
          <img src={logo} alt="KenzieHub Logo" />
        </div>

        <div className={styles.formDiv}>
          <form className={styles.formSec}>
            <h3 className="title1">Login</h3>

            <label className="headline" htmlFor="emailInput">
              Email
            </label>
            <input
              type="email"
              name="emailInput"
              id="emailInput"
              placeholder="Digite aqui seu email"
            />

            <label className="headline" htmlFor="passwordInput">
              Senha
            </label>
            <input
              type="password"
              name="passwordInput"
              id="passwordInput"
              placeholder="Digite aqui sua senha"
            />
          </form>

          <button className="buttonPink">Entrar</button>

          <p className="headline">Você ainda não possui conta?</p>
          <button className="buttonGray">Cadastrar-se</button>
        </div>
      </section>
    </>
  );
};
