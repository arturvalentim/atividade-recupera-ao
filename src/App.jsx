
import { useState } from "react";

import Header from "./components/Header.jsx";
import CardConceito from "./components/CardConceito.jsx";
import ListaDuvidas from "./components/ListaDuvidas.jsx";

import { conceitos } from "./data/conceitos.js";

import "./App.css";

function App() {
  const [revisados, setRevisados] = useState([]);

  function alternarRevisao(id) {
    setRevisados((anteriores) => {
      if (anteriores.includes(id)) {
        return anteriores.filter((item) => item !== id);
      }

      return [...anteriores, id];
    });
  }

  const porcentagem = (revisados.length / conceitos.length) * 100;

  return (
    <>
      <Header />

      <main className="container">
        <section className="hero">
          <span className="etiqueta">GUIA DE ESTUDOS • SENAI</span>

          <h2>Aprenda, pratique e domine o React!</h2>

          <p>
            Revise conceitos fundamentais de programação web,
            acompanhe seu progresso e registre suas dúvidas.
          </p>

          <a href="#conteudos" className="botao-hero">
            Começar a estudar →
          </a>
        </section>

        <section className="progresso">
          <div className="progresso-topo">
            <div>
              <span className="etiqueta">SEU DESEMPENHO</span>
              <h2>Progresso dos estudos</h2>
            </div>

            <strong>
              {revisados.length}/{conceitos.length}
            </strong>
          </div>

          <div className="barra">
            <div
              className="barra-preenchida"
              style={{ width: `${porcentagem}%` }}
            />
          </div>

          <p>{Math.round(porcentagem)}% dos conteúdos revisados</p>
        </section>

        <section id="conteudos" className="conteudos">
          <div className="titulo-secao">
            <div>
              <span className="etiqueta">MATERIAL DE REVISÃO</span>
              <h2>Conteúdos de estudo</h2>
              <p>Confira os oito assuntos da avaliação.</p>
            </div>

            <span className="contador-cards">8 conteúdos</span>
          </div>

          <div className="grid-cards">
            {conceitos.map((conceito) => (
              <CardConceito
                key={conceito.id}
                conceito={conceito}
                revisado={revisados.includes(conceito.id)}
                onAlternar={() => alternarRevisao(conceito.id)}
              />
            ))}
          </div>
        </section>

        <ListaDuvidas />
      </main>

      <footer className="footer">
        <h2>React em Prática</h2>
        <p>Guia Interativo de Estudos — SENAI Santa Catarina</p>
        <span>Projeto acadêmico desenvolvido com React.</span>
      </footer>
    </>
  );
}

export default App;
