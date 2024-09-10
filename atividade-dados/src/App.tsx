import { useState } from "react";

import styled from "styled-components";

import Dado from "./components/Dado";

import { getRandomNumber } from "./utils/RandomNumbers.ts";

import "./App.css";

const StyledEnquadro = styled.div`
  width: 450px;
  height: 400px;
  perspective: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {
  const [dadoOne, setDadoOne] = useState(1);
  const [dadoTwo, setDadoTwo] = useState(2);
  const [placar, setPlacar] = useState(0);

  const RolaDados = () => {
    const valorDado1 = getRandomNumber(1, 6);
    const valorDado2 = getRandomNumber(1, 6);

    setDadoOne(valorDado1);
    setDadoTwo(valorDado2);

    setPlacar(valorDado1 + valorDado2);
  };

  return (
    <>
      <header>
        <h2>Placar: {placar}</h2>
      </header>
      <main>
        <StyledEnquadro>
          <Dado face={dadoOne} />
          <Dado face={dadoTwo} />
        </StyledEnquadro>
        <section>
          <h2>Status</h2>
        </section>
      </main>
      <div className="jogar">
        <button className="btn-jogar" onClick={RolaDados}>Jogar</button>
      </div>
    </>
  );
}

export default App;
