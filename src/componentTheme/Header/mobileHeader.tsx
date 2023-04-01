import './MobileHeader.scss';
import { useState } from 'react';
import Logo from '../../img/logo.png';
import Lupa from '../../img/lupa.png';
import Carrinho from '../../img/carrinho.png';
import Menu from '../../img/menu-mobile.png';
import { Modal } from './Modal';

 const MobileHeader = () =>{
  const [isOpened, setIsOpened] = useState(false);
  return(
    <div className='container-header-mobile'>
      <div className="top-header">
        <div className="menu-mobile">
          <Modal isOpened={isOpened} setIsOpened={setIsOpened} />
          <button onClick={() => setIsOpened(true)}>
            <img className="menu-mobile" src={Menu} alt="menu-hamburguer"/>
          </button>
          </div>
      <img className="logo" src={Logo} alt="logo"/>
        <img className="carrinho" src={Carrinho} alt="acrrinho"/>
      </div>
        <div className="search">
          <input type="text" placeholder="Buscar" />
          <button className="buttonLupa">
            <img className="lupa" src={Lupa} alt="lupa"/>
          </button>
        </div>
    </div>
  )
}
export { MobileHeader };