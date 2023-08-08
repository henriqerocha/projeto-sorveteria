import React from "react";
import {Link} from 'react-router-dom';
import './style.css';

const Home = () =>(
    <main>
        <div className="container-home">
        <header className="topo">
            <div className="logo">
                <img src="./assets/logo.png"></img>
            </div>
            <nav className="menu">
                <ul>
                    <Link className="link-menu" to='/Home'>Home</Link>
                    <Link className="link-menu" to='/Sabores'>Sabores</Link>
                    <Link className="link-menu" to='/Sobre'>Sobre</Link>
                </ul>
            </nav>
        </header>
        </div>
    </main>
);

export default Home;