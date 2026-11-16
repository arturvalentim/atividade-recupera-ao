
function CardConceito({ conceito, revisado, onAlternar }) {
  return (
    <article className={`card ${revisado ? "revisado" : ""}`}>
      <div className="card-topo">
        <span>CONTEÚDO {String(conceito.id).padStart(2, "0")}</span>

        {revisado && <strong>✓ Revisado</strong>}
      </div>

      <h2>{conceito.titulo}</h2>

      <p className="descricao">{conceito.descricao}</p>

      <div className="exemplo">
        <h3>Exemplo prático</h3>
        <pre>{conceito.exemplo}</pre>
      </div>

      <div className="correcao">
        <h3>Erro comum</h3>
        <p>{conceito.erro}</p>

        <h3>Correção</h3>
        <p>{conceito.correcao}</p>
      </div>

      <button
        type="button"
        onClick={onAlternar}
        className={revisado ? "btn-revisado" : "btn-revisar"}
      >
        {revisado ? "Desmarcar como revisado" : "Marcar como revisado"}
      </button>
    </article>
  );
}

export default CardConceito;
