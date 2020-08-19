import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeatIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import api from '../../servies/api';

function Landing(){
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(()=>{
        api.get('connections').then(response => {
            const {total} = response.data;

            setTotalConnections(total);
        });
    },[]);

    return (
        <div id="page-lading">
            <div id="page-lading-content">
                <div className="logo-container">
                    <img src={logo} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img 
                src={landing} 
                alt="Plataforma de estudos" 
                className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas 
                    <img src={purpleHeatIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    );
}

export default Landing;