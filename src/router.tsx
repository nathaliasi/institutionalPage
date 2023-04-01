import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Sobre } from './pages/Sobre';
import { FormaPag } from './pages/FormaPag';
import { Entrega } from './pages/Entrega';
import { TrocaDevol } from './pages/TrocaDevol';
import { SegPriv } from './pages/SegPriv';
import { Contato } from './pages/Contato';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/step2" element={<FormaPag />} />
        <Route path="/step3" element={<Entrega />} />
        <Route path="/step4" element={<TrocaDevol />} />
        <Route path="/step5" element={<SegPriv />} />
        <Route path="/step6" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};
