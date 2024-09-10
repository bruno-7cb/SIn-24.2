import { useState, useEffect } from "react";
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
  const [vitoria, setVitoria] = useState(0);
  const [jogadas, setJogadas] = useState(0);
  const [venceu, setVenceu] = useState(false); // Novo estado para rastrear vitória

  const RolaDados = () => {
    const valorDado1 = getRandomNumber(1, 6);
    const valorDado2 = getRandomNumber(1, 6);

    setDadoOne(valorDado1);
    setDadoTwo(valorDado2);

    setPlacar(valorDado1 + valorDado2);
    setJogadas(jogadas + 1);

    // Resetar o estado de vitória sempre que os dados são rolados
    setVenceu(false);
  };

  useEffect(() => {
    if (placar === 7 || placar === 11) {
      if (!venceu) { // Verifica se já foi registrado uma vitória
        setVitoria(vitoria + 1);
        setVenceu(true); // Marca que a vitória foi registrada
      }
    }
  }, [placar, vitoria, venceu]);

  return (
    <>
      <header>
        <h2>Placar: {placar}</h2>
        <p>
          {placar === 7 || placar === 11
            ? "Parabéns, Você venceu"
            : placar === 0
            ? ""
            : "PERDEDOR"}
        </p>
      </header>
      <main>
        <StyledEnquadro>
          <Dado face={dadoOne} />
          <Dado face={dadoTwo} />
        </StyledEnquadro>
        <section>
          <h2>Status</h2>
          <p>Você Jogou: {jogadas} vezes</p>
          <p>Jogadas: {jogadas}</p>
          <p>Vitórias: {vitoria}</p>
          <p>
            Porcentagem de vitória:{" "}
            {jogadas > 0 ? ((vitoria / jogadas) * 100).toFixed(2) + "%" : "0%"}
          </p>
        </section>
      </main>
      <div className="jogar">
        <button className="btn-jogar" onClick={RolaDados}>Jogar</button>
      </div>
    </>
  );
}

export default App;
