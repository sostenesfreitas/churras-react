import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import './Main.css';
function Main(props) {
  return (
    <div className='main-container'>
      {props.carnes.length > 0 ? (
        <div>
          <div className='accordion'>
            <Accordion>
              <Card bg='dark' text='white'>
                <Accordion.Toggle as={Card.Header} eventKey='0'>
                  Carnes
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    <ul>
                      {props.carnes.map((carne, i) => (
                        <li key={i}>
                          <footer>
                            <a href={carne.link}>
                              <strong>{carne.nome}</strong>
                            </a>
                            <p>{carne.preco}</p>
                          </footer>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div>
            <Accordion>
              <Card bg='dark' text='white'>
                <Accordion.Toggle as={Card.Header} eventKey='0'>
                  Cervejas
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    <ul>
                      {props.cervejas.map((cerveja, i) => (
                        <li key={i}>
                          <footer>
                            <a href={cerveja.link}>
                              <strong>{cerveja.nome}</strong>
                            </a>
                            <p>{cerveja.preco}</p>
                          </footer>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      ) : (
        <div className='empty' />
      )}
    </div>
  );
}

export default Main;
