import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
                  <header>
                      <img src="https://4.bp.blogspot.com/-6EoPBFwCzNc/VXv_si7-w8I/AAAAAAAACF4/oheoBnnPe7A/s1600/len_avatar_os.png" alt=""/>
                      <div>
                          <strong>Professor X</strong>
                          <span>Matemática</span>
                      </div>
                  </header>
                  <p>
                  Professor doutor em matemática, com experiência de aulas na unesp, dá aulas para o ensino fundamental, médio e superior nas mais diversas disciplinas de matemática.
                  </p>

                  <footer>
                      <p>
                          Preço/hora
                          <strong>R$ 70,00</strong>
                      </p>
                      <button type="button">
                          <img src={whatsappIcon} alt="Whatsapp"/>
                          Entrar em contato
                      </button>
                  </footer>
              </article>
    );
}

export default TeacherItem;