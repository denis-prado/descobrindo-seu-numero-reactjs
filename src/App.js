import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // ENTRADA | RODANDO | FIM
  const [estado, setEstado] = useState("ENTRADA");

  // PALPITE
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(301);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="content-inicio">
        <div>
          <h1>Seja bem-vindo!</h1>
          <h2>
            Olá terráqueo, me chamo Andromedans e estou aqui para te desafiar...
          </h2>
          <p>Escolha um número entre 0 e 300 e eu irei tentar acerta-lo.</p>
        </div>
        <div>
          <button onClick={iniciarJogo}>Começar a jogar!</button>
        </div>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="content-fim">
        <h2>
          Acertei o número <span>{palpite}</span> em <span>{numPalpites}</span>{" "}
          chute(s)!
        </h2>
        <button onClick={iniciarJogo}>Jogar outra vez</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h2>
        O seu número é <span>{palpite} ?</span>
      </h2>
      <div>
        <button onClick={menor}>Menor</button>
        <button onClick={acertou}>Acertou</button>
        <button onClick={maior}>Maior</button>
      </div>
    </div>
  );
}
