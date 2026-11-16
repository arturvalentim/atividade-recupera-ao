
import { useState } from "react";

function ListaDuvidas() {
  const [texto, setTexto] = useState("");
  const [duvidas, setDuvidas] = useState([]);

  function adicionarDuvida(event) {
    event.preventDefault();

    const pergunta = texto.trim();

    if (!pergunta) {
      return;
    }

    setDuvidas((anteriores) => [
      ...anteriores,
      {
        id: crypto.randomUUID(),
        texto: pergunta
      }
    ]);

    setTexto("");
  }

  function removerDuvida(id) {
    setDuvidas((anteriores) =>
      anteriores.filter((duvida) => duvida.id !== id)
    );
  }

  return (
    <section className="duvidas" id="duvidas">
      <span className="etiqueta">ANOTAÇÕES</span>

      <h2>Minhas dúvidas</h2>

      <p>Registre suas perguntas para revisar depois.</p>

      <form onSubmit={adicionarDuvida}>
        <input
          type="text"
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
          placeholder="Digite sua dúvida..."
        />

        <button type="submit">Adicionar dúvida</button>
      </form>

      {duvidas.length === 0 ? (
        <p className="vazio">Nenhuma dúvida cadastrada.</p>
      ) : (
        <ul>
          {duvidas.map((duvida) => (
            <li key={duvida.id}>
              <span>{duvida.texto}</span>

              <button
                type="button"
                onClick={() => removerDuvida(duvida.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="total">
        Total de dúvidas: {duvidas.length}
      </p>
    </section>
  );
}

export default ListaDuvidas;
