import React, { useState } from "react";
import style from './Cardapio.module.scss';
import logo from 'assets/img/logo.svg';
import Buscador from "pages/Cardapio/Buscador";

export default function Cardapio(){
  const [busca, setBusca] = useState("");
  return(
    <main>
      <nav className={style.menu}>
        <img src={logo} alt="Logo AluFood"></img>
      </nav>
      <header className={style.header}>
        <div className={style.header__text}>
          A casa do código da Massa
        </div>
      </header>
      <section className={style.cardapio}>
        <h3 className={style.cardapio__titulo}>
          Cardápio
        </h3>
      </section>
      <Buscador 
        busca={busca}
        setBusca={setBusca}
        />
    </main>
    );
}