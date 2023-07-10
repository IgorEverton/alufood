import style from './Item.module.scss';
import Logo from 'assets/img/logo.svg';

export default function Item(){
  return(
    <div>
      <div>
        <img src={Logo} alt="imagem"/>
      </div>
    </div>
    )
}