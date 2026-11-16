
export const conceitos = [
  {
    id: 1,
    titulo: "Git e GitHub",
    descricao: "Git é uma ferramenta de controle de versão que registra as alterações feitas nos arquivos do projeto. O GitHub é uma plataforma online que hospeda repositórios Git. Commit registra uma alteração, push envia os commits para o repositório remoto e branch permite desenvolver funcionalidades separadamente.",
    exemplo: "git add .\ngit commit -m 'Criando projeto'\ngit push origin main",
    erro: "Fazer um commit e acreditar que o código já está no GitHub.",
    correcao: "O commit salva as alterações no repositório local. Para enviá-las ao GitHub, é necessário executar git push."
  },
  {
    id: 2,
    titulo: "Node.js e npm",
    descricao: "Node.js é um ambiente que permite executar JavaScript fora do navegador. npm é o gerenciador de pacotes usado para instalar bibliotecas e ferramentas. As versões instaladas podem ser verificadas pelo terminal.",
    exemplo: "node -v\nnpm -v\nnpm install",
    erro: "Utilizar npm run dev sem instalar as dependências.",
    correcao: "Primeiro execute npm install para instalar os pacotes do projeto. Depois utilize npm run dev para iniciar o servidor."
  },
  {
    id: 3,
    titulo: "React e JSX",
    descricao: "React é uma biblioteca JavaScript utilizada para desenvolver interfaces. JSX é uma sintaxe que permite escrever estruturas semelhantes ao HTML dentro do JavaScript. Com ela, podemos organizar os elementos visuais da aplicação.",
    exemplo: "function App() {\n  return <h1>Olá, React!</h1>;\n}",
    erro: "Esquecer de retornar os elementos JSX no componente.",
    correcao: "Utilize return dentro da função para informar quais elementos deverão ser exibidos."
  },
  {
    id: 4,
    titulo: "Componentes e props",
    descricao: "Componentes são partes reutilizáveis de uma interface React. Eles normalmente são funções que retornam JSX e devem começar com letra maiúscula. Props são propriedades utilizadas para enviar informações de um componente para outro.",
    exemplo: "function Saudacao({ nome }) {\n  return <h2>Olá, {nome}!</h2>;\n}\n\n<Saudacao nome='Maria' />",
    erro: "Escrever o nome de um componente com letra minúscula ou não utilizar a prop recebida.",
    correcao: "Comece o nome do componente com letra maiúscula e utilize as props dentro do JSX."
  },
  {
    id: 5,
    titulo: "Estado e Hooks",
    descricao: "useState é um Hook que permite armazenar informações que mudam durante o uso da aplicação. Quando o estado é atualizado, o React renderiza novamente os elementos necessários. Hooks devem ser chamados no início do componente, fora de condições e laços.",
    exemplo: "const [contador, setContador] = useState(0);\n\nsetContador(anterior => anterior + 1);",
    erro: "Alterar diretamente o valor de uma variável de estado.",
    correcao: "Utilize a função setter, como setContador, e prefira a atualização funcional quando o novo valor depender do anterior."
  },
  {
    id: 6,
    titulo: "Eventos e validação",
    descricao: "Eventos permitem executar ações quando o usuário interage com a aplicação. No React podemos utilizar onClick para cliques e onChange para alterações nos campos. O método trim() remove espaços no início e no final de uma string.",
    exemplo: "function clicar() {\n  alert('Botão clicado!');\n}\n\n<button onClick={clicar}>Clique</button>",
    erro: "Utilizar onClick={clicar()} quando a intenção é executar a função apenas depois do clique.",
    correcao: "Utilize onClick={clicar}, passando a referência da função para o React executar no momento da interação."
  },
  {
    id: 7,
    titulo: "Listas e imutabilidade",
    descricao: "O método map() percorre os elementos de um array e permite criar uma lista de elementos JSX. Cada elemento precisa de uma key estável para ajudar o React a identificar os itens. Imutabilidade significa criar um novo array em vez de modificar diretamente o anterior.",
    exemplo: "nomes.map(nome => (\n  <p key={nome}>{nome}</p>\n))",
    erro: "Utilizar push() diretamente em um array que está armazenado no estado.",
    correcao: "Crie um novo array usando o spread operator, por exemplo setNomes(anteriores => [...anteriores, novoNome])."
  },
  {
    id: 8,
    titulo: "Arquitetura web",
    descricao: "Frontend é a parte visual da aplicação. Backend processa informações no servidor. Uma API permite a comunicação entre sistemas. localStorage armazena dados no navegador. SPA é uma aplicação que atualiza seu conteúdo sem recarregar páginas completas. PWA adiciona recursos de experiência semelhante a aplicativos, como instalação e funcionamento offline quando configurada.",
    exemplo: "localStorage.setItem('usuario', 'Maria');\nconst usuario = localStorage.getItem('usuario');",
    erro: "Acreditar que qualquer SPA é automaticamente uma PWA.",
    correcao: "SPA é um modelo de navegação. PWA exige recursos adicionais, como manifesto e service worker, para oferecer funcionalidades de aplicativo."
  }
];
