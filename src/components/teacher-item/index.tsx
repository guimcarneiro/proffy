import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/32914505?s=460&u=bcc31462f935d73c42c3d861fbadb016b69aab89&v=4" alt="Guilherme Carneiro"/>
                <div>
                    <strong>Guilherme Carneiro</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Entusiasta em Programação Funcional, com foco em JavaScript.abs
                <br/><br/>
                Ansioso pelas aulas de NodeJS, e gostando muito das dicas de CSS dadas na NLW.abs
                <br/>
                #NLWForTheWin
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 60,00</strong>  
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;