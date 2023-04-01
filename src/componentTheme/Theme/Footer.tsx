import * as C from './footer-style';
import React from 'react';
import Face from '../../img/facebook.png';
import Insta from '../../img/instagram.png';
import Twitter from '../../img/twitter.png';
import Youtube from '../../img/youtube.png';
import Linkedin from '../../img/linkedin.png';
import Master from '../../img/Master.png';
import Visa from '../../img/Visa.png';
import Diners from '../../img/Diners.png';
import Elo from '../../img/Elo.png';
import Hiper from '../../img/Hiper.png';
import Paypal from '../../img/Pagseguro.png';
import Boleto from '../../img/Boleto.png';
import Whatsapp from '../../img/whatsapp.png';
import Topo from '../../img/topo.png';
import Plus from '../../img/mais.png';

export const Footer = () => {
  return (
    <C.Containerfooter>
      <C.Footer1>
        <div className="footer1">
          <div className="footer1-perguntas">
            <ul>
              <h4>
                Institucional <div className='img-plus'><img src={Plus} className="plus" alt='plus'/> </div>     
              </h4>                 
              <li>
                <a href="http://www.google.com">Quem Somos</a>
              </li>
              <li>
                <a href="http://www.google.com">Política de Privacidade</a>
              </li>
              <li>
                <a href="http://www.google.com"> Segurança</a>
              </li>
              <li>
                <a href="http://www.google.com">Seja um Revendedor</a>
              </li>
            </ul>
          </div>
          <div className="footer1-perguntas">
            <ul>
              <h4>Dúvidas <div className='img-plus-2'><img src={Plus} className="plus" alt='plus'/></div></h4>
              <li>
                <a href="http://www.google.com">Entrega</a>
              </li>
              <li>
                <a href="http://www.google.com">Pagamento</a>
              </li>
              <li>
                <a href="http://www.google.com">Trocas e Devoluções</a>
              </li>
              <li>
                <a href="http://www.google.com">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>
          <div className="footer1-perguntas">
            <ul>
              <h4>Fale Conosco <div className='img-plus'><img src={Plus} className="plus" alt='plus'/></div></h4>
              <li>
                <a href="http://www.google.com">Atendimento ao Consumidor</a>
              </li>
              <li>
                <a href="http://www.google.com">(11)4159-9504</a>
              </li>
              <li>
                <a href="http://www.google.com"> Atendimento Online</a>
              </li>
              <li>
                <a href="http://www.google.com">(11)99488-8825</a>
              </li>
            </ul>
          </div>
          <div className="redes-lorem">
            <div className="footer1-redes">
              <a href="http://www.google.com">
                <img className="redes-img" alt='redes'src={Face} />
              </a>
              <a href="http://www.google.com">
                <img className="redes-img" alt='redes' src={Insta} />
              </a>
              <a href="http://www.google.com">
                <img className="redes-img" alt='redes' src={Twitter} />
              </a>
              <a href="http://www.google.com">
                <img className="redes-img" alt='redes' src={Youtube} />
              </a>
              <a href="http://www.google.com">
                <img className="redes-img" alt='redes' src={Linkedin} />
              </a>
            </div>
            <a className='a-lorem'href="http://www.google.com">www.loremipusu.com</a>
          </div>
        </div>
      </C.Footer1>
      <C.Footer2>
        <div className="footer2">
            <p className="txt">
              Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.ksdhsdkhds ijdlclwjeAHBScjhbdC
            </p>
            <div className="pagamentos">
              <a href="http://www.google.com">
                <img src={Master} alt='redes'/>
              </a>
              <a href="http://www.google.com">
                <img src={Visa} alt='redes'/>
              </a>
              <a href="http://www.google.com">
                <img src={Diners} alt='redes'/>
              </a>
              <a href="http://www.google.com">
                <img src={Elo} alt='redes'/>
              </a>
              <a href="http://www.google.com">
                <img src={Hiper} alt='redes'/>
              </a>
              <a href="http://www.google.com">
                <img src={Paypal} alt='redes'/>
              </a>
              <a href="http://www.google.com">
                <img src={Boleto} alt='redes'/>
              </a>
            </div>
          </div>
          <div className="topoWpp">
        <a
          href="https://api.whatsapp.com/send/?phone=55000000&text&type=phone_number&app_absent=0"
          target="blank"
        >
          <img className="wpp" src={Whatsapp} alt="wpp"/>
        </a>
        <div className="bola">
          <a href="#topo">
            <img className="topo" src={Topo} alt="top"/>
          </a>
        </div>
      </div>
      </C.Footer2>
    </C.Containerfooter>
  );
};
