import { ReactNode } from 'react';
import * as C from './style';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { NavLink } from 'react-router-dom';
import Home from '../../img/Vector.png';
import Seta from '../../img/setinha.png';
import './Footer';
import { Footer } from './Footer';

import { useForm } from '../../contexts/FormContext';

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();
  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Inst>
          <div className="home">
            <NavLink to="#home">
              <img className="casinha" src={Home} />
            </NavLink>
            <NavLink to="/">
              <img className="seta" src={Seta} />
            </NavLink>
            <p className="txt-inst">INSTITUCIONAL</p>
          </div>
          <div className="institucional">
            <h2 className="h2-inst">INSTITUCIONAL</h2>
          </div>
        </C.Inst>
        <C.Steps>
          <C.Sidebar>
            <SidebarItem title="sobre" path="/" />
            <SidebarItem title="forma de pagamento" path="/step2" />
            <SidebarItem title="entrega" path="/step3" />
            <SidebarItem title="Troca Devolução" path="/step4" />
            <SidebarItem title="Segurança e Privacidade" path="/step5" />
            <SidebarItem title="Contato" path="/step6" />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
      <C.Section>
        <div className="linha">
        <h3 className='titulo-newsletter'>Assine nossa newsletter</h3>
          <div className="inputlabel">
            <label htmlFor="" className="label">
            </label>
            <input className="input" placeholder="E-mail" type="text" />
            <button>Enviar</button>
          </div>
        </div>
      </C.Section>
      <Footer />
    </C.Container>
  );
};

/**/
