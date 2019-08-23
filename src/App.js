import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './App.css';
import api from './api';
import Main from './Main';
function App() {
  const [qtdPessoa, setQtdPessoa] = useState('');
  const [carnes, setCarnes] = useState([]);
  const [carneKg, setCarneKg] = useState([]);
  const [qtdLata, setQtdLata] = useState([]);
  const [cervejas, setCervejas] = useState([]);
  const [spinner, setSpinner] = useState('');
  const getCarnes = async e => {
    carnes.length = 0;
    cervejas.length = 0;
    setSpinner(true);
    e.preventDefault();
    const response = await api.get('/carnes/');
    setCarnes(response.data.carnes);
    setCervejas(response.data.cervejas);
    setSpinner(false);
    calc();
  };

  const calc = () => {
    setCarneKg(qtdPessoa * (500 / 1000));
    setQtdLata(qtdPessoa * qtdLata);
    setQtdPessoa('');
  };
  return (
    <div className='login-container'>
      <form onSubmit={getCarnes}>
        <h4>CHURRASCOMETRO</h4>
        <input
          placeholder='Qtd Pessoas'
          value={qtdPessoa}
          onChange={e => setQtdPessoa(e.target.value)}
        />
        <input
          placeholder='Qtd Lata'
          value={qtdLata}
          onChange={e => setQtdLata(e.target.value)}
        />
        <button type='submit' disabled={!qtdPessoa}>
          {!spinner ? (
            <>
              <span>Enviar</span>
            </>
          ) : (
            <>
              <Spinner
                as='span'
                animation='grow'
                size='sm'
                role='status'
                aria-hidden='true'
              />
              Loading...
            </>
          )}
        </button>
      </form>
      {carnes.length > 0 ? (
        <>
          <div className='quantidades'>
            <p>Quantidade de carnes: {carneKg} Kg</p>
            <p>Quantidade de Latas: {qtdLata} latas</p>
          </div>

          <Main carnes={carnes} cervejas={cervejas} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
