import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg"
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "../Input";



export const LoginPage = () => {

  const {register, handleSubmit} = useForm()

  const submit = (formData) => {
    console.log(formData)
  }

  return (
    <>
      <section className={styles.container}>
        <div>
          <img src={logo} alt="KenzieHub Logo" />
        </div>

        <div className={styles.formDiv}>
          <form onSubmit={handleSubmit(submit)} className={styles.formSec}>
            <h3 className="title1">Login</h3>
            <Input required label="Email" type="email" placeholder="Digite aqui seu email" {...register('email')}/>
            <Input required label="Senha" type="password" placeholder="Digite aqui sua senha" {...register('password')}/>
          
            <Link to="/dashboard" className="buttonPink">Entrar</Link>
          </form>


          <p className="headline">Você ainda não possui conta?</p>
          <Link to="/register" className="buttonGray">Cadastrar-se</Link>
        </div>
      </section>
    </>
  );
};
