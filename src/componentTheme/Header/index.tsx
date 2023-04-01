import * as C from './styles';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.png';
import Lupa from '../../img/lupa.png';
import Carrinho from '../../img/carrinho.png';
import { MobileHeader } from './mobileHeader';


    export const Header = () => {
      return (
        <C.Container className="header" id="topo">
          <div className='header-mobile'><MobileHeader /></div>
          <div className="container header-desktop">      
            <div className="header-top">
            <NavLink to="/">
              <img className="logo" src={Logo} alt="logo" />
            </NavLink>
            <div className="search">
              <input type="text" placeholder="Buscar" />
              <button className="buttonLupa">
                <img className="lupa" src={Lupa} alt="lupa"/>
              </button>
            </div>
            <div className="entrarCarrinho">
              <NavLink className="entrar" to="#">
                <p>Entrar</p>
              </NavLink>
              <NavLink to="/">
                <img className="carrinho" src={Carrinho} alt="carrinho"/>
              </NavLink>
            </div>
            </div>
            <div className="container3">
            <div className="menu">
              <NavLink className="cursos" to="#">
                <p>Cursos</p>
              </NavLink>
              <NavLink className="saibamais" to="#">
                <p>Saiba Mais</p>
              </NavLink>
              <NavLink className="institucionais" to="#">
                <p>institucionais</p>
              </NavLink>
            </div>
            </div>          

          </div>
        </C.Container>
      );
    };
    
    
