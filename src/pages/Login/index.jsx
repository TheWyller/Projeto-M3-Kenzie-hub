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
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function Login({ authenticated, setAuthenticated }) {
  const [wasClick, setWasClick] = useState(false);

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório!").email("Email inválido"),
    password: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ email, password }) => {
    const user = {
      email,
      password,
    };
    api
      .post("/sessions ", user)
      .then((res) => {
        toast.success("Login realizado com sucesso!");
        const { token, user } = res.data;
        localStorage.setItem("@KenzieHub:Token", token);
        localStorage.setItem("@KenzieHub:UserName", user.name);
        localStorage.setItem("@KenzieHub:UserCourse", user.course_module);
        localStorage.setItem("@KenzieHub:UserId", user.id);
        setAuthenticated(true);
        return history.push("/");
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
      </Header>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Login</h1>

          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <div className="eyeBtn">
            <Input
              type={wasClick ? "new-password" : "password"}
              label="Senha"
              placeholder="Digite aqui sua senha"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            {wasClick ? (
              <BsEyeSlashFill onClick={() => setWasClick(false)} />
            ) : (
              <BsEyeFill onClick={() => setWasClick(true)} />
            )}
          </div>
          <Button type="submit" width="100%" negativeColor={false}>
            Entrar
          </Button>
          <p>Ainda não possui uma conta?</p>
          <Button
            onClick={() => history.push("/signup")}
            pinkBtn={false}
            width="100%"
          >
            Cadastre-se
          </Button>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
