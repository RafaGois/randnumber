import { useState } from 'react';
import './styles.css';


const Index = () => {

    const [numero,setNumero] = useState(0);
    const [fundo,setFundo] = useState(false);

  function gerarNumero () {

    const numeroNovo = Math.floor(Math.random() * (100 - 1) + 1);
    setNumero(numeroNovo);

    if(numeroNovo <= 50) {
        setFundo("bg-vermelho")
    } else {
        setFundo("bg-azul")
    }

  }

  return (
    <div className="App">
      <header className='app-header'>
        <h2>React js</h2>
      </header>
      <body className="App-body">
        <p className='destaque'>Número aleatório</p>
        <div className={fundo}>
          <p className='destaque'>{numero}</p>
        </div>
        <p className='txtInfo'>Clique no botão para gerar um número aleatório:</p>
        <button onClick={ () => gerarNumero()}>
          Gerar Número
        </button>

      </body>
      <footer>
        <p>Desenvolvido com ❤️ por Rafael Fontana</p>
      </footer>
    </div>
  );
}

export default Index;