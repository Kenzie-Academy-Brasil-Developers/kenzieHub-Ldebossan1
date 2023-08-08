import { useForm } from "react-hook-form";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { Input } from "../Input";


export const RegisterPage = () => {
  const { register, handleSubmit} = useForm()

  const submit = (formData) => {
    console.log(formData)
    alert('Conta criada com sucesso')
  }

  return (
    <section className={styles.container}>
      <div className={styles.headerPage}>
        <img src={logo} alt="" />
        <Link to="/" className="buttonBlack" id="buttonBack">Voltar</Link>
      </div>

      <div className={styles.formDiv}>
        <form onSubmit={handleSubmit(submit)} className={styles.formSec}>
          <div className={styles.headerForm}>
            <h3 className="title1">Crie sua conta</h3>
            <p className="headline">Rapido e grátis, vamos nessa</p>
          </div>
          <Input required label="Nome" type="text" placeholder="Digite aqui seu nome" {...register('name')}/>
          <Input required label="Email" type="email" placeholder="Digite aqui seu email" {...register('email')}/>
          <Input required label="Senha" type="password" placeholder="Digite aqui sua senha" {...register('password')}/>
          <Input required label="Confirme sua senha" type="password" placeholder="Digite novamente a sua senha"/>
          <Input required label="Bio" type="text" placeholder="Fale sobre você" {...register('bio')}/>
          <Input required label="Contato" type="text" placeholder="Opção de contato" {...register('contact')}/>

          <label className="headline" htmlFor="moduleSelect">
            Selecionar módulo
          </label>
          <select {...register('module')}>
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
