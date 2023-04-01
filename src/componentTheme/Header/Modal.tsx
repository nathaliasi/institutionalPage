import React from 'react';
import './Modal.css';
import close from '../../img/x.png';

interface ModalProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}


const Modal= ({isOpened, setIsOpened}: ModalProps) => {
 
  return(
    <div className={`modal-wrapper ${isOpened && "opened"}`}>
       <div className="modal-content">
        <button className='close-button'onClick={()=> setIsOpened(false)}><img className="close" src={close}/></button>
          <li>
            <div className="entrar">entrar</div>        
          </li>
          <li className='list'>
              Cursos
          </li>
          <li className='list'>
              Saiba Mais
          </li>
          <li className='list'>
              institucionais
          </li>
      </div>
       <div className='modal-overlay'onClick={()=> setIsOpened(false)}></div>
    </div>
  )

};

export { Modal };
