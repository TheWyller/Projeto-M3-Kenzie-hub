import { Redirect } from "react-router-dom";
import { Container, Content, Header } from "./style";
import Logo from "../../assets/Logo.svg";
import Card from "../../components/Card";
import { api } from "../../services/api";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button";

function Home({ authenticated, setAuthenticated, setModals }) {
  const [curses, setCurses] = useState([]);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    loadCurses();
  }, [curses]);

  function loadCurses() {
    api
      .get(`/users/${localStorage.getItem("@KenzieHub:UserId")}`)
      .then((res) => setCurses(res.data.techs));
  }

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header>
        <section className="header_nav">
          <img src={Logo} alt="Logo" />
          <Button
            othersBtn={true}
            width="56px"
            onClick={() => {
              localStorage.clear();
              setAuthenticated(false);
              toast.success("Logout realizado com sucesso!");
            }}
          >
            Sair
          </Button>
        </section>
        <hr />
        <section className="header_infos">
          <h1>Olá, {localStorage.getItem("@KenzieHub:UserName")}</h1>
          <p>{localStorage.getItem("@KenzieHub:UserCourse")}</p>
        </section>
        <hr />
      </Header>
      <Container>
        <section className="tech">
          <h2>Tecnologias</h2>
          <Button
            othersBtn={true}
            width="32.49px"
            height="32px"
            onClick={() => {
              setBtn(true);
              setModals(true);
            }}
          >
            <span className="plusBtn">+</span>
          </Button>
        </section>
        <Modal btn={btn} setBtn={setBtn} setModals={setModals} />
        <Content>
          {curses.map((elem) => (
            <Card
              setModals={setModals}
              key={elem.id}
              id={elem.id}
              title={elem.title}
              level={elem.status}
            ></Card>
          ))}
        </Content>
      </Container>
    </>
  );
}

export default Home;
