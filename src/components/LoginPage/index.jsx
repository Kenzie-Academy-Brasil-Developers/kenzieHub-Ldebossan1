import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg"
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormSchema,";
import { useState } from "react";
import axios from "axios";
import { Api } from "../../api";



export const LoginPage = ({setUser}) => {

  const {register, handleSubmit, formState:{ errors }} = useForm({
    resolver: zodResolver(loginFormSchema)
  })

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const userLogin = async (formData) => {
    try {
      setLoading(true)
      const { data } = await Api.post('/sessions', formData)
      setUser(data.user)
      localStorage.setItem('@TOKEN', data.token)
      navigate('/dashboard')
    } catch (error) {
      if(error.response?.data.message === 'Incorrect email / password combination') {
        alert('Email e/ou senha incorreto.')
      }
    } finally {
      setLoading(false)
    }
  }

  const submit = (formData) => {
    userLogin(formData)
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
