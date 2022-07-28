import Input from "../Input";
import { AllScreen, Container, Content } from "./style";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

function ModalEdit({
  btn,
  setBtn,
  deleteCurses,
  lang,
  title,
  level,
  setModals,
}) {
  const [isDate, setIsDate] = useState(false);
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
    const value = { status: data.status };
    api
      .put(`/users/techs/${lang}`, value, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@KenzieHub:Token")}`,
        },
      })
      .then((res) => {
        toast.success("Status modificado com sucesso!");
        setBtn(false);
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  return (
    <AllScreen className={btn ? "" : "hidden"}>
      <Container>
        <Content>
          <h2>Tecnologia Detalhes</h2>
          <button
            onClick={() => {
              setBtn(false);
              setModals(false);
              setIsDate(false);
            }}
          >
            <span className="plusBtnModal">X</span>
          </button>
        </Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Nome do Projeto"
            value={title}
            register={register}
            name="title"
            error={errors.title?.message}
          />
          <label>Status</label>
          <select
            onClick={() => !isDate && setIsDate(true)}
            defaultValue={level}
            {...register("status")}
          >
            <option value={`Iniciante`}>Iniciante</option>
            <option value={`Intermediário`}>Intermediário</option>
            <option value={`Avançado`}>Avançado</option>
          </select>
          <div className="techEdit_Btn">
            {isDate ? (
              <Button
                onClick={() => setModals(false)}
                type="submit"
                width="70%"
                negativeColor={false}
                isDate={isDate}
              >
                Salvar alterações
              </Button>
            ) : (
              <Button
                onClick={() => setModals(false)}
                type="submit"
                width="70%"
                negativeColor={true}
                isDate={isDate}
              >
                Salvar alterações
              </Button>
            )}
            <Button
              onClick={() => {
                deleteCurses(lang);
                setModals(false);
              }}
              width="30%"
              pinkBtn={false}
            >
              Excluir
            </Button>
          </div>
        </form>
      </Container>
    </AllScreen>
  );
}
export default ModalEdit;
