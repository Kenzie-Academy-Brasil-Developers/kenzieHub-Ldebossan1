import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headerPage}>
        <img src={logo} alt="" />
        <button className="buttonBlack">Voltar</button>
      </div>

      <div className={styles.formDiv}>
        <form className={styles.formSec}>
          <div className={styles.headerForm}>
            <h3 className="title1">Crie sua conta</h3>
            <p className="headline">Rapido e grátis, vamos nessa</p>
          </div>
          <label className="headline" htmlFor="nameInput">
            Nome
          </label>
          <input
            required
            type="text"
            name="nameInput"
            id="nameInput"
            placeholder="Digite aqui seu nome"
          />

          <label className="headline" htmlFor="emailInput">
            Email
          </label>
          <input
            required
            type="email"
            name="emailInput"
            id="emailInput"
            placeholder="Digite aqui seu email"
          />

          <label className="headline" htmlFor="passwordInput">
            Senha
          </label>
          <input
            required
            type="password"
            name="passwordInput"
            id="passwordInput"
            placeholder="Digite aqui sua senha"
          />

          <label className="headline" htmlFor="passwordConfirm">
            Confirmar senha
          </label>
          <input
            required
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="Digite novamente sua senha"
          />

          <label className="headline" htmlFor="bioInput">
            Bio
          </label>
          <input
            required
            type="text"
            name="bioInput"
            id="bioInput"
            placeholder="Fale sobre você"
          />

          <label className="headline" htmlFor="contactInput">
            Contato
          </label>
          <input
            required
            type="text"
            name="contactInput"
            id="contactInput"
            placeholder="Opção de contato"
          />

          <label className="headline" htmlFor="moduleSelect">
            Selecionar módulo
          </label>
          <select name="" id="">
            <option value="M1">M1</option>
            <option value="M2">M2</option>
            <option value="M3">M3</option>
            <option value="M4">M4</option>
            <option value="M5">M5</option>
            <option value="M6">M6</option>
          </select>

          <button className="buttonDisabled">Cadastrar</button>
        </form>
      </div>
    </section>
  );
};
