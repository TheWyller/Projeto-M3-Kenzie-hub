import Input from "../../components/Input";
import { Container, Content, Header } from "./style";
import Logo from "../../assets/Logo.svg";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

function SignUp({ authenticated }) {
  const history = useHistory();
  const [isDate, setIsDate] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().required("Campo Obrigatório!").email("Email inválido"),
    password: yup
      .string()
      .required("Campo Obrigatório!")
      .min(8, "Mínimo de 8 digitos!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas devem ser iguais!")
      .required("Campo Obrigatório!"),
    bio: yup.string().required("Campo Obrigatório!"),
    contact: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = {
      name,
      email,
      password,
      bio,
      contact,
      course_module,
    };
    api
      .post("/users", user)
      .then((res) => {
        console.log(res.data);
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo" />
        <Button
          othersBtn={true}
          width="67.49px"
          onClick={() => {
            setIsDate(false);
            history.push("/login");
          }}
        >
          Voltar
        </Button>
      </Header>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Crie sua conta</h1>
          <p>Rapido e grátis, vamos nessa</p>
          <Input
            onClick={() => !isDate && setIsDate(true)}
            label="Nome"
            placeholder="Digite aqui seu nome"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            onClick={() => !isDate && setIsDate(true)}
            label="Email"
            placeholder="Digite aqui seu email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            onClick={() => !isDate && setIsDate(true)}
            type="new-password"
            label="Senha"
            placeholder="Digite aqui sua senha"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Input
            onClick={() => !isDate && setIsDate(true)}
            type="new-password"
            label="Confirmar Senha"
            placeholder="Digite novamente sua senha"
            register={register}
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
          />
          <Input
            onClick={() => !isDate && setIsDate(true)}
            label="Bio"
            placeholder="Fale sobre você"
            register={register}
            name="bio"
            error={errors.bio?.message}
          />
          <Input
            onClick={() => !isDate && setIsDate(true)}
            label="Contato"
            placeholder="Opção de contato"
            register={register}
            name="contact"
            error={errors.contact?.message}
          />
          <label htmlFor="course">Selecionar módulo</label>
          <select id="course" {...register("course_module")}>
            <option value={`Primeiro módulo (Introdução ao Frontend)`}>
              Primeiro módulo
            </option>
            <option value={`Segundo módulo (Frontend Avançado)`}>
              Segundo módulo
            </option>
            <option value={`Terceiro módulo (Introdução ao Backend)`}>
              Terceiro módulo
            </option>
            <option value={`Quarto módulo (Backend Avançado)`}>
              Quarto módulo
            </option>
          </select>
          {isDate ? (
            <Button
              negativeColor={false}
              type="submit"
              isDate={isDate}
              width={"100%"}
            >
              Cadastrar
            </Button>
          ) : (
            <Button type="submit" isDate={isDate} width={"100%"}>
              Cadastrar
            </Button>
          )}
        </form>
      </Content>
    </Container>
  );
}

export default SignUp;
