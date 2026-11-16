
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">R</span>
          <div>
            <h1>React em Prática</h1>
            <p>Guia Interativo de Estudos</p>
          </div>
        </div>

        <nav>
          <a href="#conteudos">Conteúdos</a>
          <a href="#duvidas">Minhas dúvidas</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
