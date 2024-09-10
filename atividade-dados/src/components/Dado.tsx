import styled, { keyframes } from "styled-components";
import FaceCinco from "./FaceCinco";
import FaceDois from "./FaceDois";
import FaceQuatro from "./FaceQuatro";
import FaceSeis from "./FaceSeis";
import FaceTres from "./FaceTres";
import FaceUm from "./FaceUm";

import { getRandomNumber } from "../utils/RandomNumbers";

const getRotationAnimation = (
  fromX: string,
  fromY: string,
  toX: string,
  toY: string
) => keyframes`
  from {
    transform: rotateX(${fromX}) rotateY(${fromY});
  }
  to {
    transform: rotateX(${toX}) rotateY(${toY});
  }
`;

const StyledDado = styled.div<{
  fromX: string;
  fromY: string;
  toX: string;
  toY: string;
}>`
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  position: relative;
  
  animation: ${({ fromX, fromY, toX, toY }) =>
      getRotationAnimation(fromX, fromY, toX, toY)}
    4s linear forwards; // Ajustado para 4 segundos e finaliza na posição final
`;

type DadoProps = {
  face: number;
};

export default function Dado({ face }: DadoProps) {
  const facesDados = [
    { rX: "0deg", rY: "0deg" },
    { rX: "0deg", rY: "0deg" },
    { rX: "-90deg", rY: "0deg" },
    { rX: "-180deg", rY: "0deg" },
    { rX: "90deg", rY: "0deg" },
    { rX: "0deg", rY: "-90deg" },
    { rX: "0deg", rY: "90deg" },
  ];

  const randomIndex = getRandomNumber(1, 6);

  const { rX: initialRX, rY: initialRY } = facesDados[randomIndex];
  const { rX: finalRX, rY: finalRY } = facesDados[face];

  return (
    <StyledDado fromX={initialRX} fromY={initialRY} toX={finalRX} toY={finalRY}>
      <FaceUm />
      <FaceDois />
      <FaceTres />
      <FaceQuatro />
      <FaceCinco />
      <FaceSeis />
    </StyledDado>
  );
}
