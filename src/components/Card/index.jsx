import { CardStyle } from "./style";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import ModalEdit from "../ModalEdit";

function Card({ title, level, id, setModals }) {
  const [lang, setLang] = useState("");
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    setLang(id);
  }, [id]);

  function deleteCurses(id) {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@KenzieHub:Token")}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia excluida com sucesso!");
      })
      .catch((_) => toast.error("Ops! Algo deu errado"));
  }
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      <CardStyle>
        <h2>{title}</h2>
        <div>
          <p>{level}</p>
          <FiEdit
            onClick={() => {
              goToTop();
              setBtn(true);
              setModals(true);
            }}
          />
          <FiTrash2
            id={lang}
            className="deleteBtn"
            onClick={() => {
              deleteCurses(lang);
            }}
          />
        </div>
      </CardStyle>
      <ModalEdit
        setModals={setModals}
        btn={btn}
        setBtn={setBtn}
        deleteCurses={deleteCurses}
        lang={lang}
        title={title}
        level={level}
      />
    </>
  );
}
export default Card;
