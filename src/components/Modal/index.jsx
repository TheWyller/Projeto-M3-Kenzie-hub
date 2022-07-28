import Input from "../Input";
import { AllScreen, Container, Content } from "./style";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

function Modal({ btn, setBtn, setModals }) {
  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@KenzieHub:Token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Tecnologia criada com sucesso!");
        setBtn(false);
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  return (
    <AllScreen className={btn ? "" : "hidden"}>
      <Container>
        <Content>
          <h2>Cadastrar Tecnologia</h2>
          <button
            onClick={() => {
              setBtn(false);
              setModals(false);
            }}
          >
            <span className="plusBtnModal">X</span>
          </button>
        </Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Nome"
            placeholder="Digite a tecnologia"
            register={register}
            name="title"
            error={errors.title?.message}
          />
          <label>Selecionar status</label>
          <select {...register("status")}>
            <option value={`Iniciante`}>Iniciante</option>
            <option value={`Intermediário`}>Intermediário</option>
            <option value={`Avançado`}>Avançado</option>
          </select>
          <Button
            onClick={() => setModals(false)}
            type="submit"
            width={100}
            negativeColor={false}
          >
            Cadastrar Tecnologia
          </Button>
        </form>
      </Container>
    </AllScreen>
  );
}
export default Modal;
