import React, { useState } from "react";
import style from './Cardapio.module.scss';
import logo from 'assets/img/logo.svg';
import Buscador from "pages/Cardapio/Buscador";
import Filtro from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from './Itens/index';

export default function Cardapio(){
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
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
        <div className={style.cardapio__filtros}>
          <Filtro filtro={filtro} setFiltro={setFiltro}/>
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
        <Itens/>
      </section>
      <Buscador 
        busca={busca}
        setBusca={setBusca}
        />
    </main>
    );
}