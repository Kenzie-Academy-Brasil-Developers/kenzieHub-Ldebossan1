import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg"
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormSchema,";



export const LoginPage = () => {

  const {register, handleSubmit, formState:{ errors }} = useForm({
    resolver: zodResolver(loginFormSchema)
  })


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
            <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register('email')} error={errors.email}/>
            <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register('password')} error={errors.password}/>
          
            <button to="/dashboard" className="buttonPink">Entrar</button>
          </form>


          <p className="headline">Você ainda não possui conta?</p>
          <Link to="/register" className="buttonGray">Cadastrar-se</Link>
        </div>
      </section>
    </>
  );
};
